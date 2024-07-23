import React from 'react'
import { Link } from 'react-router-dom'
import './style.css';

const Contact = () => {
    return (
        <main id='container'>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About us</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
            </ul>
            <div className='data'>
                <div className="content">
                    <h4>Address:</h4>
                    <p>Mr John Smith. 132, My Street, Kingston, New York 12401.</p>
                </div>
                <div className='table'>
                    <h4>Contact us:</h4>
                    <table>
                        <tr>
                            <td>Name:</td>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td>Message:</td>
                            <td><textarea cols={26} rows={4}></textarea></td>
                        </tr>
                    </table>
                </div>
            </div>
        </main>
    )
}

export default Contact