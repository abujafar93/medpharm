import React from "react";

const Moredetails=({formvalues, setFormvalues})=>{
    return(
        <div className="form">
            <div className="input-grp">
                <label>Other Name</label>
                <div className="input-item">
                  <input type="text"
                  placeholder="Enter your Other name"
                  onChange={(e)=>
                  setFormvalues({ ...formvalues,
                  adminUser: {...formvalues.adminUser, otherName: e.target.value }})}
                  />
                </div>
          </div>
          <div className="input-grp">
                <label>Upload Profile Image</label>
                <div className="input-item">
                  <input type="file"
                  accept="image/*"
                  onChange={(e)=>{
                    let reader = new FileReader()
                    reader.readAsDataURL(e.target.files[0])
                    reader.onload=(e)=>{
                  setFormvalues({ ...formvalues,
                  adminUser: {...formvalues.adminUser, imageUrl: e.target.result}})}
                  }
                  }
                  />
                </div>
          </div>
          <div className="input-grp">
                <label>Referral Code</label>
                <div className="input-item">
                  <input type="text"
                  placeholder="referral code"
                  onChange={(e)=>
                  setFormvalues({ ...formvalues,
                  adminUser: {...formvalues.adminUser, refferedReferralCode: e.target.value }})}
                  />
                </div>
          </div>
            
        </div>
    )
}


export default Moredetails;