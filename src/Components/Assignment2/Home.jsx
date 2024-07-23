import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import titan from '../images/titan_thumbnail.jpg'
import fastrack from '../images/fastrack_thumbnail.jpg'
import sonata from '../images/sonata_thumbnail.jpg'
const Home = () => {
    return (
        <main>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/about"}>About us</Link>
                </li>
                <li>
                    <Link to={"/contact"}>Contact</Link>
                </li>
            </ul>
            <div id='brand'>
                <h3>Our Brands</h3>
                <div className='image'>
                    <img src={titan} alt="" />
                    <img src={fastrack} alt="" />
                    <img src={sonata} alt="" />
                </div>
            </div>
        </main>
    );
}

export default Home