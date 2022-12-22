// const heading = <h1 id="abc">"hey there"</h1>;


// const heading = React.createElement(
//     'h1',
//     { id: 'abc' },
//     'This is a heading.'
// );

// ReactDOM.render(
//     heading,
//     document.getElementById('react-container')
// );

// const paragraph = React.createElement(
//     'p',
//     null,
//     'This is a test paragraph which is created by React. This paragraph has no attribute and is contained inside a div which is also created by React.'
// );
// const paragraph = <p>this is the test paragrap created by and for practice </p>;
// const box = React.createElement(
//     'div',
//     { className: 'box' },
//     heading,
//     paragraph,
// );

// ReactDOM.render(
//     paragraph,
//     document.getElementById('react-container')
// );


// function Box() {
//     return (
//         <div className='box'>
//             <h1 id={myAttr}> this is a heading. </h1>
//             <p>this  is atest paragraph created  for filling the box over here</p>
//         </div>
//     );
// }
// function App() {
//     return (
//         <div className='row'>
//             <div className='col'>
//                 <Box />
//             </div>
//             <div className='col'>
//                 <Box />
//             </div>
//         </div>
//     );
// }
// ReactDom.render(
//     <App />,
//     document.getElementById('react-container')
// );
// ReactDom.render(
//     <Box />,
//     document.getElementById('react-container')
// );


// --******************arrow function*******************//
// it is used when we only want to return a value 
// const Box = (props) => {
//     return (
//         <div className='box'>
//             <h1 id='abc'> {props.heading}</h1>
//             <p>this  is atest paragraph created  for filling the box over here</p>
//         </div>
//     );
// };
// const App = () => {
//     return (
//         <div className='row'>
//             <div className='col'>
//                 <Box heading='First heading ' />
//             </div>
//             <div className='col'>
//                 <Box heading='second heading' />
//             </div>
//         </div>
//     );
// };
// ReactDOM.render(
//     <App />,
//     document.getElementById('react-container')
// );
///******/
// ReactDom.render(
//     <Box />,
//     document.getElementById('react-container')
// );***






class Box extends React.Component {
    state = { color: "black" };

    changeColor(color) {
        this.setState({ color: color });
    }

    render() {
        return (
            <div className='box'>
                <h1 className={this.state.color}>{this.props.heading}</h1>
                <p>this is a test paragraph return again and again to solve this problem</p>
                <button onClick={() => this.changeColor("red")} >Red</button>
                <button onClick={() => this.changeColor("blue")}>Blue</button>
                <button onClick={() => this.changeColor("yellow")}>Yellow</button>
            </div>
        );
    }
}

const App = () => {
    return (
        <div classNamee='row'>
            <div className='col'>
                <Box heading='First heading' />
            </div>

            <div className='col'>
                <Box heading='Second heading' />
            </div>
            <div className='col'>
                <Box heading='Third heading' />
            </div>
            <div className='col'>
                <Box heading='third  heading' />
            </div>
            <div className='col'>
                <Box heading='Fourth heading' />
            </div>

        </div>
    );
};

React.DOM.render(
    <App />, document.getElementById('react-container')
);