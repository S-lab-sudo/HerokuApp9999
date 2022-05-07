import React from "react";
import { useEffect, useState } from "react";
import "./GlobalClock.css";
import dT from "../../HelperFunctions/dT";
import UserTime from "./Components/UserTime/UserTime";
import SelectedTime from "./Components/SelectedTime/SelectedTime";
import axios from "axios";

export default function GlobalClock() {
  useEffect(() => {
    dT("Global Clock");
  }, []);
  const [dataFromAPI, setDataFromAPI] = useState([]);
  const [thisCountry, setThisCountry] = useState({ name: "", code: "" });

  const [sortedTimeZone, setSortedTimeZone] = useState([]);
  const [filteredFromText, setFilteredFromText] = useState([]);

  const [toggelShow, setToggelShow] = useState(false);

  const [userSelectedTime, setUserSelectedTime] = useState([]);

  const [search, setSearch] = useState("");
  useEffect(() => {
    axios.get("https://json.geoiplookup.io/").then((response) => {
      setThisCountry({
        name: response.data.country_name,
        code: response.data.country_code.toLocaleLowerCase(),
      });
    });
    axios
      .get(
        "https://api.timezonedb.com/v2.1/list-time-zone?key=NKCDTKSSOD7J&format=json"
      )
      .then((res) => {
        if (res.status === 200) {
          setDataFromAPI(res.data.zones);
        }
      });
  }, []);
  useEffect(() => {
    let sortedArray = dataFromAPI.sort((a, b) => {
      let fa = a.countryName.toLowerCase();
      let fb = b.countryName.toLowerCase();
      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    sortedArray=sortedArray.filter((c, index) => {
      return sortedArray.indexOf(c) === index;
    })
    setSortedTimeZone(sortedArray);
    setFilteredFromText(sortedArray);
  }, [dataFromAPI]);

  const toggle = () => {
    console.log("first");
    return setToggelShow(!toggelShow);
  };
  // useEffect(()=>{
  //   let text=document.getElementById('search').value
  //   console.log(text);
  //   return ()=>setFilteredFromText(sortedTimeZone.filter(value=>{
  //     if(!text){
  //       return true
  //     }
  //     if(value.countryName.includes(text) || value.countryCode.includes(text) ){
  //       return true
  //     }
  //   }))
  // },[search])

  useEffect(()=>{
    setFilteredFromText(sortedTimeZone.filter(value=>{
          if(!search){
            return true
          }
          if(value.countryName.includes(search) || value.countryCode.includes(search) ){
            return true
          }
        }))
  },[search])

  const addTime = (value) => {
    setUserSelectedTime([...userSelectedTime, value]);
  };
  const deleteTime=(value)=>{
    return setUserSelectedTime(userSelectedTime.filter(e=>e!==value))
  }
  return (
    <div className="clockMC centeredDiv">
      <div className="container">
        <UserTime
          country={thisCountry.name}
          countrycode={thisCountry.code}
        ></UserTime>
        {userSelectedTime.map((value, index) => {
          return <SelectedTime data={value} key={index} deleteTime={deleteTime} />;
        })}
        <div className="addTime">
          <button onClick={() => toggle()}> + </button>
        </div>
      </div>
      {toggelShow?<div className="search">
        <div className="inpclose">
          <input
            id="search"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Country's Name"
          />
          <button onClick={() => toggle()}>X</button>
        </div>
        <div className="results">
          <div className="lists">
            <ul>
              {filteredFromText.map((value, index) => {
                return (
                  <li key={index} onClick={() => addTime(value)}>
                    {value.countryName}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>:null}
    </div>
  );
}
