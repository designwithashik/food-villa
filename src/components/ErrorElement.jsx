import React from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { Link, useRouteError } from 'react-router-dom';
const ErrorElement = () => {
    // const error = ErrorMessage
    // console.log(error)
    const error = useRouteError();
    console.log(error)
    return (
        <div className='gap-5 lg:mx-24 mx-12 flex flex-col items-center justify-center h-[100vh]'>
            <h1 className='text-5xl font-bold font-[quicksand] text-center '>{error.error.message}</h1>
            <h3 className='font-semibold'>Go Back to<Link className='py-2 ml-5 text-white  px-5 rounded-lg bg-[#F46A06]' to='/'>HomePage</Link></h3>
        </div>
    );
};

export default ErrorElement;