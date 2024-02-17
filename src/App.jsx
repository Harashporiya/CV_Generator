import React, { useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { IoCallOutline } from 'react-icons/io5';
import { CiLocationOn } from 'react-icons/ci';
import './App.css';
import Personal from './components/Personal';
import Education from './components/Education';
import Work from './components/Work';
import Navbar from './components/Navbar';

function App() {
  const [data, setData] = useState({});

  function handleChange(e) {
    let { name, value } = e.target;
    if (name === 'userName' || name === 'userLastName') {
      value = value.toUpperCase();
    }

    setData((prev) => ({ ...prev, [name]: value }));
    console.log(data);
  }

  function downloadFile() {
    const jsonString = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'user_info.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function exportHTML() {
    const htmlContent = `
      <html>
        <head>
          <title>User Information</title>
        </head>
        <body>
          <div>
            <h1>User Information</h1>
            <p>Name: ${data.userName} ${data.userLastName}</p>
            <p>Email: ${data.email}</p>
            <p>Phone: ${data.phone}</p>
            <p>Location: ${data.location}</p>
            <!-- Add other fields as needed -->

            <h2>Education</h2>
            <p>Course: ${data.course}</p>
            <p>College: ${data.college}</p>
            <p>Start Date: ${data.start} - End Date: ${data.last}</p>

            <h2>Work Experience</h2>
            <p>Institution: ${data.institu}</p>
            <p>Position: ${data.position}</p>
            <p>Start Date: ${data.start1} - End Date: ${data.last1}</p>
          </div>
        </body>
      </html>
    `;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'user_info.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  return (
    <div>
      <Navbar />
      <Personal handleChange={handleChange} />
      <Education handleChange={handleChange} />
      <Work handleChange={handleChange} />
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
        <button onClick={downloadFile} className="download-button json">
          <b>Download JSON</b>
        </button>
        <button onClick={exportHTML} className="download-button html">
         <b>Download HTML</b>
        </button>
      </div>
    </div>
  );
}

export default App;


