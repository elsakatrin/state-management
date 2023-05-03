Module 6 - state management using useContext

For this project I followed this tutorial.
https://dev.to/samueladex/react-context-api-for-beginners-using-usecontext-hook-jld
It's a really simple counter where I used useContext to increase and decrease the number on the counter with + and -. Comments in the code.




I only used useContext in this project, but not useReducer so instead I'm going to write about both of these hooks. 

useContext: 
useContext is used to save a state globally.
First 
React context provides a way to pass data around your component tree without having to pass it through each parent to a child. It accepts the content object returned from React createContext as an argument and returns the current context value. The current context value is determined by the value prop of the nearest context provider. 
You can use useContext to do pretty cool things. You can use it to tell your components which layout it's supposed to render based on the state; basically just keep track of UI information. 




useReducer:
useReducer is an alternative to useState. 

You should use useState when:
* Application is small
* State value is a primitive value
* Simple UI state transitions
* Logic os not complicated and can stay in one component

You should use useReducer when:
* Application architecture is complex and big
* When logic to a update state is complex or you want to update state deep down in component tree
* The state value is either an object or an array
* You need more predictible and maintainable state architecture

useReducer helps you manage complex state and state trancitions in a predictible and organized way by seperating your state logic from components logic.
It's helpful when you have a state that can be updated in multiple ways and you want to keep track of those in a single page.
 With useReducer you define a reducer function that takes the current state and an action (usually an object with type) as input and returns a new state based on the action. 
 You then call useReducer with the reducer function and an initial state value, and it returns an array with two elements:the current state and a dispatch function that can be used to update the state. 
 You then call the dispatch function with an action object that describes how you want to update the state. The reducer function will be called with the current state and action, and will re-render and return a new state that replaces the old one. 





Some interesting links related to the topic:

Here's an exciting article on how to make dark mode with useContext https://medium.com/swlh/creating-a-dark-mode-for-your-react-app-with-usecontext-65c408a3b8e8

Article on how to use useReducer: https://medium.com/free-code-camp/hooked-on-hooks-how-to-use-reacts-usereducer-2fe8f486b963

And here's an article/tutorial on react hooks, for a counter app similar to what I did: https://medium.com/@seantheurgel/react-hooks-as-state-management-usecontext-useeffect-usereducer-a75472a862fe# state-management
