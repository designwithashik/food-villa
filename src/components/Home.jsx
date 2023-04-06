import Lottie from 'lottie-react';
import React from 'react';
import food from '../assets/25523-wok-pan-food-fry-on-fire.json'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
const Home = () => {
    return (
        <div className='flex items-center justify-evenly'>
            <div>
            <h1 className='text-5xl font-bold font-[quicksand]'>Order food from favourite restaurants near you.
                </h1>
                <p className='my-7 text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo. </p>
                <div>
                    <button className='text-white font-[700] px-9 py-4 bg-[#F46A06] rounded'><Link to='/explore-foods'>Order Now <FontAwesomeIcon icon={faBasketShopping}></FontAwesomeIcon></Link></button>
                    <button className='font-bold px-9 py-4 shadow-2xl rounded ml-5'><Link to='/orders'>Cart<FontAwesomeIcon className='ml-2 ' icon={faArrowCircleRight}/></Link></button>
                </div>
            </div>

            <Lottie animationData={food} loop={true} className='w-full'/>
        </div>
    );
};

export default Home;