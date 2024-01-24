import { useState } from "react"
import Personal from './components/Personal'
import Education from "./components/Education";
import Work from "./components/Work";
import Navbar from "./components/Navbar";
import { MdEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import './App.css'
function App() {
  const [data, setData] = useState({});

  function handleChange(e){
    let {name, value} = e.target;
   if(name == "userName" || name == "userLastName"){
    value = value.toUpperCase()
   }
    

    setData((prev)=>({...prev, [name]: value}))
    console.log(data);
    
  }

  return (
  <div>
      <Navbar/>
      <Personal handleChange={handleChange}/>
      <Education handleChange={handleChange}/>
      <Work handleChange={handleChange}/>
      <div id="app">
        <div id="app1">
      <p id="first_last">{data.userName} {data.userLastName}</p>
      <p id="title">{data.Title}</p>
      <p id="des_1">{data.des}</p>
      </div>

   

      <div className="em_ph_lo">
      <div className="data_email">{data.email && (<MdEmail className="mail" />) }
      <p className="em_ph_lo_1">{data.email}</p>
      </div>
      <div id="phone_number">{data.phone && (
      <IoCallOutline id="icon_phone"/>)}
      <p className="em_ph_lo_1">{data.phone}</p>
      </div>
      <div id="data_location" >{data.location && (
      <CiLocationOn id="icon_location"/>)}
      
      <p className="em_ph_lo_1">{data.location}</p>
      </div>

      </div>



      <div id="education">
      <p id="text_1"><b>Education</b></p>
      <p className="education_data">{data.course}</p>
      {data.course && (<hr/>)}
      <p className="education_data">{data.college}</p>
      {data.college && (<hr/>)}
      <p className="education_data">{data.start} {data.start && '-'} {data.last}</p>
      {data.start && (<hr/>)}
      
      </div>
      <div id="work">
      <p id="text_2"><b>Work</b></p>
      <p className="data_work">{data.institu}</p>
      {data.institu && (<hr/>)}
      <p className="data_work">{data.position}</p>
      {data.position && (<hr/>)}
      <p className="data_work">{data.start1} {data.start1 && '-'} {data.last1}</p>
      {data.start1 && (<hr/>)}
      </div>
     </div>
    </div> 
  )
}

export default App
