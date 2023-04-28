import React from 'react';
import mealAnimation from "../../assets/meal-animation.json";
import Lottie from 'lottie-react';



const Banner = () => {


    return (
        <div className="hero">
            <div className="hero-content h-[70vh] flex-col lg:flex-row-reverse">
                <Lottie animationData={mealAnimation} loop={true} />

                <div className='w-1/2'>
                    <h1 className="text-5xl w-3/4 font-bold">Meal Management System!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;