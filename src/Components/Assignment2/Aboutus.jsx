import React from 'react'
import { Link } from 'react-router-dom'
import './style.css';

const Aboutus = () => {
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
            <div className="text">
                <h3 className="innerHeading">About us:</h3>
                <p className="innerText">
                    Fastrack was launched in 1998 and became an independent urban youth
                    brand in 2005. Since then, it has carved a niche for itself with
                    watches and sunglasses that are both fashionable and affordable.
                    Fastrack extended its footprint into accessories in 2009 with a
                    range of bags, belts and wallets. Fastrack retails across the nation
                    through 158 exclusive Fastrack stores in over 79 cities as well as
                    authorized multi-brand outlets and online (www.fastrack.in). Today,
                    the brand has successfully notched up the title of being the most
                    loved youth fashion brand in the country.
                </p>
                <h4 className="innerHeading">Products</h4>
                <p className="innerText">
                    Watches, Smartwatch, Sunglasses, Bags, Wallets, Perfumes
                </p>
            </div>
        </main>
    );
}

export default Aboutus