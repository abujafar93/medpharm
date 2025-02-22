import React from "react";
import "./styles/OnboardingPage/personaldetails.scss";
// import { AiOutlineCamera } from "react-icons/ai"

const PersonalDetails=({formvalues, setFormvalues})=>{
return (<div className="form">
          <div className="input-grp">
            <label>FirstName</label>
            <div className="input-item">
              <input
                type="text"
                placeholder="Enter your chosen name"
                onChange={(e) =>
                  setFormvalues({ ...formvalues, firstName: e.target.value })
                }
              />
            </div>
          </div>
          <div className="input-grp">
            <label>LastName</label>
            <div className="input-item">
              <input
                type="text"
                placeholder="Enter your last name"
                onChange={(e) =>
                  setFormvalues({
                    ...formvalues,
                    lastName: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="input-grp">
            <label>Other Name</label>
            <div className="input-item">
              <input
                type="text"
                placeholder="Enter your last name"
                onChange={(e) =>
                  setFormvalues({
                    ...formvalues,
                    otherName: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="input-grp">
            <label>Email Address</label>
            <div className="input-item">
              <input
                type="email"
                placeholder="Enter your email address"
                onChange={(e) =>
                  setFormvalues({ ...formvalues, emailAddress: e.target.value })
                }
              />
            </div>
          </div>
         
          <div className="input-grp">
            <label>Phone number</label>
            <div className="input-item">
              <input
                type="text"
                placeholder="Enter your phone number"
                onChange={(e) =>
                  setFormvalues({ ...formvalues, phoneNumber: e.target.value })
                }
              />
            </div>
          </div>

           <div className="input-grp">
            <label>Client ID</label>
            <div className="input-item">
              <input
                type="text"
                placeholder="Client ID"
                onChange={(e) =>
                  setFormvalues({ ...formvalues, clientId: e.target.value })
                }
              />
            </div>
          </div>
         
                
        </div>
)
            }

        export default PersonalDetails;