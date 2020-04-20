- [ ] Why would you use class component over function components (removing hooks from the question)?

    Class components would be more useful for applications that need to perform logic or move data(state) to perform a task. Class components make use of the extends method which gives us access to the React.Component parent class. With the React.Component parent class we're able to pass state to perform such functions as signing in to an account. Functional components don't possess any of this logic and would be ideal when you only need to accept data and display in a certian way such as a button. 

- [ ] Name three lifecycle methods and their purposes.

    The three lifecycle methods are mounting, updating, and un-mounting. The mounting phase take place when the component is being created and the initial state will be defined on the constructor at this time and componentDidMount will be invoked. After mounting the updating phase begins and the setState update the initial data and causes the app to render the updated data and componentDidUpdate is called. Finally, the un-mounting phase takes place after the updated information has been rendered. During this phase the component is removed from the screen and allows the process to repeat as needed. 

- [ ] What is the purpose of a custom hook?
    
    Custom hooks allow us to write a specific peaice of logic in one place and use it in multiple places in an app without needing to re-write the same lines of code. This becomes very useful as apps get larger and more complex. Writing the same lines of code in multiple places not only slows down the app but leaves us open to errors.

- [ ] Why is it important to test our apps?

    Testing minimizes the risk of errors in code. Finding and fixing errors can be costly in both time and money for companies and testing can help us identify and fix errors before they become much larger problems further in the development cycle. 