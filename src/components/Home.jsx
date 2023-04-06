import Lottie from 'lottie-react';
import React from 'react';
import food from '../assets/25523-wok-pan-food-fry-on-fire.json'
const Home = () => {
    return (
        <div className='flex items-center'>
            <div>
            <h1 className='text-3xl font-bold'>Order food from favourite restaurants near you.
</h1>
            </div>
            <Lottie animationData={food} loop={true} />
        </div>
    );
};

export default Home;