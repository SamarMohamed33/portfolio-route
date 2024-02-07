import React, { useState } from 'react';

function Contact() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [age,setAge]=useState("")
    const [password,setPassword]=useState("")

    return (
        <section className='contact py-5'>
            <div className="container">
            <h1 className='text-center'>CONATCT SECTION</h1>
                <div className='d-flex justify-content-center align-items-center'><div className='hLine'></div><svg className='mx-3' xmlns="http://www.w3.org/2000/svg" fill='#2c3e50' height="30px" width="30px" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg><div className='hLine'></div></div>                
               <div className="form w-75 m-auto d-flex flex-column justify-content-center align-items-center">
                    <div className='mb-3 w-100 position-relative'>
                        <div className='label-container'>
                            <label htmlFor="name" style={{top: name!==""?"0px":"100%"}}>Name: </label>
                        </div>
                        <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Name" id='name' name='name' className='form-control'/>
                    </div>
                    <div className='m-3 w-100'>
                        <div className='label-container'>
                            <label htmlFor="email" style={{top: email!==""?"0px":"100%"}}>Email: </label>
                        </div>
                        <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email" id='email' name='email' className='form-control'/>
                    </div>
                    <div className='m-3 w-100'>
                        <div className='label-container'>
                            <label htmlFor="age" style={{top: age!==""?"0px":"100%"}}>Age: </label>
                        </div>
                        <input type="number" onChange={(e)=>setAge(e.target.value)} name="age" placeholder='Age' id='age' className='form-control'/>
                    </div>
                    <div className='m-3 w-100'>
                        <div className='label-container'>
                            <label htmlFor="password" style={{top: password!==""?"0px":"100%"}}>Password: </label>
                        </div>
                        <input type="password" onChange={(e)=>setPassword(e.target.value)} name='password' id='password' placeholder='Password' className='form-control'/>
                    </div>
                    <button type='submit' className='btn'>Send Message</button>
                </div>
            </div>
        </section>
    );
}

export default Contact;