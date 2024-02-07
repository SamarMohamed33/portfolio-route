import React, { useState } from 'react';
import "./Portfolio.css"
import post1 from "../../assets/poert1.png"
import post2 from "../../assets/port2.png"
import post3 from "../../assets/port3.png"

function Portfolio() {
    const [image,setImage]=useState(post1)
    const [opened,setOpened] = useState(false);
    const posts = [post1,post2,post3,post1,post2,post3]
    return (
        <section className='portfolio py-4'>
            <div className="container">
                <h1 className='text-center'>PORTFOLIO COMPONENT</h1>
                <div className='d-flex justify-content-center align-items-center'><div className='hLine'></div><svg className='mx-3' xmlns="http://www.w3.org/2000/svg" fill='#2c3e50' height="30px" width="30px" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg><div className='hLine'></div></div>                
                <div className="row g-5 pt-5">
                    {posts.map((el,index)=>{
                        return(
                        <div className="col-md-4" key={index}>
                        <div className='portfolio-card'  onClick={()=>{
                            setImage(el)
                            setOpened(true)
                        } } >
                            <img src={el} alt="" className='w-100 rounded-3'/>
                            <div className="card-overlay rounded-3 d-flex justify-content-center align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="80px" width="80px" fill='#fff'> <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                            </div>
                        </div>
                    </div>
                        )
                    })}
                </div>
                    <div className='img-container align-items-center justify-content-center'  style={{display: opened===false?"none":"flex"}}>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={image} alt="" className='w-100'/>
                            <svg onClick={()=>{setOpened(false)}} xmlns="http://www.w3.org/2000/svg" fill='#fff' viewBox="0 0 384 512" width="20px" height="20px"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
                        </div>
                        
                    </div>
            </div>
        </section>
    );
}

export default Portfolio;