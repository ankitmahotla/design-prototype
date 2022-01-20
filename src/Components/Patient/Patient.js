import React from 'react'
import './Patient.styles.css';

const Patient = () => {
    return (
        <div className="overlay">
        <div className="container">
            <div className="row">
                <div className="box">
                    <div className="header">
                        <h1>New Patient Enrollment</h1>
                        <h2>company name</h2>
                    </div>
                <hr/>
                <form>
    
                   <label htmlFor="name1">Name: </label>
                        <input className="fname1" type="text" id="firstname" name="firstname" placeholder="First name" />
                        <input className="lname1" type="text" id="lastname" name="lastname" placeholder="Last name" />
                    <br/> <br/>
                    <span>Date of Birth</span> 
                    <input className="dob1" type="date" id="dob" name="dob"/>
                    <br/> <br/>
                    <span>Sex</span> 
                    <select name="sex" id="sex">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    <br/> <br/>
                    <span>Contat Number:</span> 
                    <input type="tel" id="phone" name="phone" placeholder="+91-6666-999999" pattern="+91-[0-9]4-[0-9]6" required/> <br/> <br/>
                    <span>E-mail</span>
                    <input className="emailid" type="email" id="email" name="email" placeholder="ex: myname@example.com"/>
                    <br/> <br/>
                    <span>Address:</span>
                    <div className="addr_content">
                        <input className="addr" type="text" id="streetaddr" name="streetaddr"/> <br/> <br/>
                        <input className="addr" type="text" id="streetaddrln2" name="streetaddrln2"/> <br/> <br/>
                        <input className="addr" type="text" id="city" name="city"/> <br/> <br/>
                        <input className="addr" type="text" id="state" name="state"/> <br/> <br/>
                        <input className="addr" type="text" id="zipcode" name="zipcode"/>
                    </div>
                    <br/> <br/>
                    <span>Marital Status:</span>
                    <select name="maritalstat" id="maritalstat">
                        <option value="married">Married</option>
                        <option value="unmarried">Single</option>
                        <option value="unmarried">Divorced</option>
                    </select>
                    <hr/> <br/> <br/>
                    <span>Emergency Contact:</span> <br/> <br/>
                    <input className="fname2" type="text" placeholder="First Name"/>
                    <input  className="lname2" type="text" placeholder="Last Name"/>
                    <br/> <br/>
                    <span>Relationship</span><br/> <br/>
                    <input type="text" id="guardian" name="guardian"/> <br/> <br/>
                    <span>Contact Number:</span> <br/> <br/>
                    <input type="tel" id="phone" name="phone" placeholder="+91-6666-999999" pattern="+91-[0-9]4-[0-9]6" required /> 
                    <hr/> <br/> <br/>
                    <span>Weight(pounds)</span> <br/>
                    <input type="text" id="weight" name="weight" /> <br/> <br/>
        
                    <span>Height(inches)</span> <br/>
                    <input type="text" id="height" name="height" /> <br/> <br/>
        
                    <span>Taking any medications, currently?</span> &ensp;
                    <input className="radiobtn" type="radio" id="yes" name="question1" value="yes" />
                    <label htmlFor="yes">Yes</label> &ensp;
                    <input className="radiobtn" type="radio" id="no" name="question1" value="no" />
                    <label htmlFor="no">No</label> <br/> <br/> <br/>
                    <div className="textarea1">
                        <span>If yes, please list it here</span> &ensp;
                        <textarea rows="4" cols="50" name="comment" form="usrform"> Enter text here...</textarea>
                    </div>
                    <div className="btn">
                        <button className="enrollbtn" name="enroll" type="submit" value="HTML">Enroll</button>
                    </div>
                  </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Patient;
