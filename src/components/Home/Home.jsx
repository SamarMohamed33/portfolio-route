import React from 'react';
import "./Home.css"
import avatar from "../../assets/avataaars.svg"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Home() {
    return (
        <header className='text-center d-flex flex-column justify-content-center align-items-center p-3'>
            <img src={avatar} alt="avatar" className='w-25'/>
            <h1>Start Framework</h1>
            <div className='d-flex justify-content-center align-items-center'><div className='hLine'></div><svg className='mx-3' xmlns="http://www.w3.org/2000/svg" fill='#fff' height="30px" width="30px" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg><div className='hLine'></div></div>
            <p>Graphic Artist - Web Designer - Illustrator</p>

        </header>
    );
}

export default Home;