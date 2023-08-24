import React from 'react';  
import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters/index';

const Home = () => {
    const [letterClass] = useState('text-animate')
    //persons name spelt out letter by letter
    const nameArray = ['h', 'o', 'm', 'a', 's', ' ', 'T', 'h', 'u', 'r', 's', 't', 'o', 'n']
    //programmer spelt out letter by letter in a constant array called jobArray
    const jobArray = ['P', 'r', 'o', 'g', 'r', 'a', 'm', 'm', 'e', 'r', '.']

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br /> 
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    {/* image of two t's on top of each other */}
                    <img
                        src={LogoTitle}
                        alt="developer"
                        className={`${letterClass} _15`} // Apply the same class and idx
                        style={{ animationDelay: '1.5s' }} // Add a delay of 1.5 seconds
                    />
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={16} />
                    <br/>
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={30}/>
                </h1>
                <h2>Student / Programmer</h2>
                <Link to="/contact" className="flat-button"> CONTACT ME </Link>
            </div>
        </div>
    )
}

export default Home;
