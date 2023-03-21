import React from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {
    const [value, setValue] = React.useState('Invalid');
    const validationHandler = (event) => {
        let char_value = event.target.value;
        if (char_value.trim().length < 3) {
            setValue("Invalid")
        } else {
            setValue("Valid")
        }
    };
    
    return (
        <form>
            <label>Your message</label>
            <input type="text" onChange={validationHandler}/>
            <p>{value} message</p>
        </form>
    );
}

/*
//Increment decrement program
import React from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {
    const [value, setValue] = React.useState(0);
    
    const incrementHandler = () => {


        setValue(prevCounter => prevCounter + 1);
    };
    
    const decrementHandler = () => {
        
        setValue(prevCounter => prevCounter - 1);
    };
    
    return (
      <div>
        <p id="counter">{value}</p>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
    );
}

*/