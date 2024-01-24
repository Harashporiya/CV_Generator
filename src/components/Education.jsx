import React from 'react'
import './Education.css'
function Education(props) {
  return (
    <form>
    <div id="form_2">
      <p className="tesk"><b>Education</b></p>
      <label htmlFor="name"><b>Course:</b></label>
      <br/>
    <input type="text" name="course" onChange={props.handleChange}/>
    <br/>
    <br/>
    <label htmlFor="name"><b>College:</b></label>
      <br/>
    <input type="text"  name="college" onChange={props.handleChange}/>
    <br/>
    <br/>
    <label htmlFor="name"><b>Start Date:</b></label>
      <br/>
    <input type="date"  id="date" value=" " name="start" onChange={props.handleChange}/>
    <br/>
    <br/>
    <label htmlFor="name"><b>Last Date:</b></label>
      <br/>
    <input type="date" id="date1" name="last" onChange={props.handleChange}/>
    <br/>
    <br/>
    </div>
    </form>
  )
}

export default Education
