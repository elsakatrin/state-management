import { useState, createContext } from 'react';
//This file is to intalize Context api and store global states

//Creating the context that we need to use 
const counterContext = createContext();
//Contex Provider is used to encapsulate only the components that needs the state in this context
export const CounterProvider = ({children})=>{

    const [counter, setCounter] = useState(0);

    //Increase counter
    const increment = () => {
        return setCounter(counter + 1);
    }

    //Decrease counter
    const decrement = () => {
        return setCounter(counter - 1);
    }

    //Counter Context provider has three declarations, increment and decrement fucntions and statehook called counter.
    //Counter stores all numbers of counts, increment and decrement decide if value goes up or down 
    //Children is the components that needs the state in this context - all child components nested inside the counter provider will have recieve the context values as props and can access and use these values as needed in their logic
    return (
        <counterContext.Provider value={{counter, increment, decrement}}>
            {children}
        </counterContext.Provider>
    )
}

export default counterContext;