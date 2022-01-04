import React from 'react';
import ReactDOM from 'react-dom';

let states = [];
let stateIndex = -1;

function useState(defaultValue){
  const index = ++stateIndex;


  if(states[index]) return states[index];

  const setValue = (newValue) => {
    states[index][0] = newValue;
    renderWithAbdulHalim();
  }
  const returnArray = [defaultValue,setValue];
  states[index] = returnArray;
  return returnArray;

}

function App() {
  const [todo, setTodo] = useState('');
  const [warning, setWarning] = useState(null);

  const handleInput = (e) => {
      const inputValue = e.target.value;
      const updatedWarning = inputValue.includes('.js')
      ? 'You need JavaScript skill to complete the task. Do you have it.?'
      : null;

     setTodo(inputValue);
     setWarning(updatedWarning);
  }

  return(
      <div>
          <h2>Welcome to Todo Functional Component</h2>
      <p>{todo}</p>
      <p>
          <textarea name='todo' value={todo} onChange={handleInput} />
      </p>
      <hr/>
      <h2>{warning || 'Good choice!'}</h2>
  </div>
  )
}


function renderWithAbdulHalim(){
  stateIndex = -1;
  ReactDOM.render(
    <App />,
  document.getElementById('root')
);
}
renderWithAbdulHalim();

