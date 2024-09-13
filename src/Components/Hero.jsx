import React from 'react';

const Hero = ({coverImage, title, subtitle}) => {


    return (
        <div>
            {/* Hero Section */}
            <div className="relative bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg">
                <img
                    src={coverImage}
                    alt="Shoes Collection"
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                />
                <div className="relative p-10 md:p-20 lg:p-32 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
                    <p className="mt-4 text-lg md:text-2xl">{subtitle}</p>
                    <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                        Shop Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;



