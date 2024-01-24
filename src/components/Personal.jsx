import React from 'react'
import './Personal.css'
function Personal(props) {
   
  return (
    <form>
    <div>
      <div id="form_1">
    <p className="tesk"><b>Personal Details</b></p>
    <label htmlFor="name"><b>Name:</b></label><br/>
    <input type="text"  name="userName" onChange={props.handleChange} />
    <br/>
    <br/>
    <label htmlFor="name"><b>Last Name:</b></label>
    <br/>
    <input type="text"  name="userLastName" onChange={props.handleChange}/>
    <br/>
    <br/>
    <label htmlFor="name"><b>Title:</b></label>
    <br/>
    <input type="text"  name="Title" onChange={props.handleChange}  />
    <br/>
    <br/>
    <label htmlFor="name"><b>Email:</b></label>
    <br/>
    <input type="text" name="email" onChange={props.handleChange}  />
    <br/>
    <br/>
    <label htmlFor="name"><b>Phone Number:</b></label>
    <br/>
    <input type="text" name="phone" onChange={props.handleChange} maxLength={10} />
    <br/>
    <br/>
    <label htmlFor="name"><b>Location:</b></label>
    <br/>
    <input type="text" name="location" onChange={props.handleChange}  />
    <br/>
    <br/>
    <label htmlFor="name"><b>Description:</b></label>
    <br/>
    <textarea type="text" id="des" name="des" onChange={props.handleChange} />
    <br/>
    </div>
    </div>
    </form>
  )
}

export default Personal
