import React, { useEffect, useState } from "react";
import "./NavigationBar.css";
import { Link } from "react-router-dom";


export default function NavigationBar() {
  var navLinkLists = [
    { title: "todo list", path: "/todoLists" },
    { title: "global clock", path: "/globalClock" }
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(()=>{
    let path=window.location.pathname
    let indexLists=navLinkLists.map(e=>e.path===path?1:0).indexOf(1)
    return setActiveIndex(indexLists)
  },[])

const setActive=(i)=>{
  return setActiveIndex(i)
}

  return (
    <div className="navigationBar">
      {navLinkLists.map((v, i) => {
        return (
          <Link key={i} to={v.path}>
            {/* CONDITIONAL CLASSNAME */}
            <div className={i===activeIndex?'isActive':'isNotActive'} onClick={()=>setActive(i)} >
              {v.title}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
