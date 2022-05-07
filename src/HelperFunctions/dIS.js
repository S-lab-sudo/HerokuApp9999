// DYNAMICALLY SET ICON OF WEBSITE
const dynamiIcon=(iconname)=>{
    console.log(iconname)
    console.log("first")
    return document.getElementById('favIcon').href=`${iconname}`
}
module.exports=dynamiIcon