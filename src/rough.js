import React from "react";

import "./styles.css";

// don't change the Component name "App"
export default function App() {
  const [value, setValue] = React.useState("Invalid");
  const validationHandler = (event) => {
    let char_value = event.target.value;
    if (char_value.trim().length < 3) {
      setValue("Invalid");
    } else {
      setValue("Valid");
    }
  };

  return (
    <form>
      <label>Your message</label>
      <input type="text" onChange={validationHandler} />
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

/**
 * On Delete Warning Show Module
 * 
 * 
 import React from 'react';

// don't change the Component name "App"
export default function App() {
    
    const [isDeleting, setIsDeleting] = React.useState(false);
    
    function deleteHandler() {
        setIsDeleting(true);
    }
    
    function proceedHandler() {
        setIsDeleting(false);
    }
    let warning;
    if (isDeleting) {
        warning =       (
                            <div id="alert">
                              <h2>Are you sure?</h2>
                              <p>These changes can't be reverted!</p>
                              <button onClick={proceedHandler}>Proceed</button>
                            </div>
                        )
                    }

    
    return (
      <div>
            {warning}
        
        <button onClick={deleteHandler}>Delete</button>
      </div>    
    );
}
 */
