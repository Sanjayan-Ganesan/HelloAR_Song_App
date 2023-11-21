import React from 'react'
import './LoginPage.css'
import { useState } from 'react'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useNavigate } from 'react-router-dom';


function LoginPage() {
    const [phonenumber,setphonenumber] = useState('');
    const history = useNavigate();

    const handlechange = (value)=>{
        setphonenumber(value);
    }

    const handleSignIn = ()=>{
        if(phonenumber.length === 12){
            localStorage.setItem('phonenumber',phonenumber);
            history('/otp');
        }else{
            alert('Please enter a valid phone number');
        }               
    }

  return (
    <div className='container'>
        <div>
            <h3 className='text-sign-in'>Sign In</h3>
            <p className='sub-text-sign-in'>Please enter your mobile number to login. We will send an OTP<br></br>to verify your number.</p>
            <div style={{display: "flex",flexDirection:"column",width:"70%"}}>
            <PhoneInput country={'us'} inputProps={{required: true,}} className='phone-number-input-box' placeholder='Phone number' value={phonenumber} onChange={handlechange} containerStyle={{ width: '100%', height: '100%' }} maxlength="10"/>
            <button className='sign-in-button' onClick={handleSignIn}>Sign In</button>
            </div>            
        </div>
    </div>
  )
}

export default LoginPage