import React, { useState } from 'react';
import './Otp.css';
import { useNavigate } from 'react-router-dom';

function OtpPage() {
  // Retrieve phone number from localStorage
  const phonenumber = localStorage.getItem("phonenumber");

  const [otpvalues, setotpvalues] = useState(['','','','']);

  const history = useNavigate();
  
  const handleOtpChange = (index, value) => {
    const newOtpValues = [...otpvalues];
    newOtpValues[index] = value;
    setotpvalues(newOtpValues);
  }

  const handleVerify = ()=>{
    // if newOtpValues is  5678
    if(otpvalues[0] === '5' && otpvalues[1] === '6' && otpvalues[2] === '7' && otpvalues[3] === '8'){
      localStorage.setItem("verified", "true");
      history('/songs');      
    }else{
      alert("Invalid OTP");
    }
  }

  return (
    <div className="container">
      <h3 className='text-sign-in'>OTP Verification</h3>
      <p className='sub-text-sign-in'>We have sent an OTP to +{phonenumber}. Please enter the code received to <br></br> verify.</p>
      <div className='otp-input-container'>
        <div className='otp-input-box'>
        {otpvalues.map((list,index)=>{
          return (
            <input
              className='otp-input'
              type='text'
              maxLength={1}
              value={list}
              style={{width:"20%"}}
              key={index}
              onChange={(e) => handleOtpChange(index, e.target.value)}
            />
          )
        })}
        </div>
        <button className='sign-in-button' onClick={handleVerify}>Verify</button>
      </div>
    </div>
  );
}

export default OtpPage;
