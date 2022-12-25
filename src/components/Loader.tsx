import React from 'react';

const Loader = () => {
    return (
        <div className="flex justify-center items-center dot-loader">
            <progress className="progress w-64"></progress>
        </div>
    );
}

export default Loader;
