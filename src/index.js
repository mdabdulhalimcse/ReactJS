/* eslint-disable react/destructuring-assignment */
import React from 'react';
import reactDom from 'react-dom';
// const element = React.createElement('h1', null, 'Hello, World!');

// const index = 0;
// function Clock({ locale }) {
//     return (
//         <h1 className="heading" tabIndex={index}>
//             <span> Time is {new Date().toLocaleTimeString(locale)}</span>
//             <img src="" alt="" />
//         </h1>
//     );
// }
// reactDom.render(Clock(), document.getElementById('root'));
// reactDom.render(<Clock locale="bn-bd" />, document.getElementById('root'));

// class Clock  {
//     // eslint-disable-next-line class-methods-use-this
//     print() {
//         return (
//             <h1 className="heading">
//                 <span className="text"> Time is {new Date().toLocaleTimeString()}</span>
//             </h1>
//         );
//     }
// }
// const ClockComponent = new Clock();
// reactDom.render(ClockComponent.print(), document.getElementById('root'));

// eslint-disable-next-line react/prefer-stateless-function
class Clock extends React.Component {
    // eslint-disable-next-line class-methods-use-this
    render() {
        return (
            <h1 className="heading">
                <span className="text">
                    {this.props.children} Time is {new Date().toLocaleTimeString(this.props.locale)}
                </span>
            </h1>
        );
    }
}
reactDom.render(
    <>
        <Clock locale="bn-bd">Bangladesh</Clock>
        <Clock locale="en-bd">Bangladesh</Clock>
        <Clock locale="en-us">America</Clock>
    </>,
    document.getElementById('root')
);
