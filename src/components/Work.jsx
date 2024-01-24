import React from 'react'
import './Work.css'
function Work(props) {
  return (
    <form>
    <div id="form_3">
      <p className="tesk"><b>Work</b></p>
    <label htmlFor="name"><b>Institution name:</b></label>
    <br/>
    <input type="text" name="institu" onChange={props.handleChange}/>
    <br/>
    <br/>
    <label htmlFor="name"><b>Position:</b></label>
    <br/>
    <input type="text" name="position" onChange={props.handleChange} />
    <br/>
    <br/>
    <label htmlFor="name"><b>Start Date:</b></label>
    <br/>
    <input type="date" value="date" id="date" name="start1" onChange={props.handleChange}/>
    <br/>
    <br/>
    <label htmlFor="name"><b>Last Date:</b></label>
      <br/>
    <input type="Date" name="last1" id="date1" onChange={props.handleChange}/>
    <br/>
    <br/>
    </div>
    </form>
  )
}

export default Work
