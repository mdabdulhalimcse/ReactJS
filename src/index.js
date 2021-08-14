import React from 'react';
import reactDom from 'react-dom';
// const element = React.createElement('h1', null, 'Hello, World!');

// element ceate
const index = 0;

const element = (
    <h1 className="heading" tabIndex={index}>
        <span> Time is {new Date().toLocaleTimeString()}</span>
        <img src="" alt="" />
    </h1>
);
reactDom.render(element, document.getElementById('root'));

// setInterval(() => {
//     const element = (
//         <h1 className="heading" tabIndex={index}>
//             <span> Time is {new Date().toLocaleTimeString()}</span>
//             <img src="" alt="" />
//         </h1>
//     );
//     reactDom.render(element, document.getElementById('root'));
// }, 1000);
