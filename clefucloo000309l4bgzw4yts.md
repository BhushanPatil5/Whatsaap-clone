# Why React Does Not Necessarily Need a Global State Manager

As React developers, we often hear about the need for a global state manager in our applications, but in some cases, using a global state manager may not be necessary. By pushing a state towards the leaf components and using a local state and props, we can simplify our application's architecture and make it more efficient and maintainable. let us take a look at some real-world examples to understand this better.

In this article, we'll explore why React may not necessarily need a global state manager and discuss some alternatives that developers can use to manage state in their applications.

### **What is a Global State Manager?**

Before we dive into why React may not need a global state manager, let's first define what it is. A global state manager is a tool or library that allows developers to manage the state of an application in a centralized location.

In React, this is typically done with tools like Redux or MobX. These libraries provide a way for developers to store and manage data across their applications without having to pass data between components.

### Decentralizing Data

Consider an e-commerce website that has a product page with multiple sections, such as product details, related products, and reviews. We can store the data related to each section in the component that is responsible for rendering that section. For instance, we can store the product details in the Product Details component and the reviews in the Reviews component. here is an example of how we can implement this:

```javascript
function ProductPage() {
  const [productDetails, setProductDetails] = useState({ /* product details data */ });
  const [relatedProducts, setRelatedProducts] = useState({ /* related products data */ });
  const [reviews, setReviews] = useState({ /* reviews data */ });

  return (
    <div>
      <ProductDetails productDetails={productDetails} />
      <RelatedProducts relatedProducts={relatedProducts} />
      <Reviews reviews={reviews} />
    </div>
  );
}
```

In this example, we store the data related to each section in its respective state variables and pass them as props to the corresponding child components. This way, we keep the data decentralized and ensure that only the required components receive the relevant data.

### **Avoiding Unnecessary Complexity**

Imagine a simple to-do list application that allows users to add, delete and mark tasks as complete. In such an application, using a global state manager may not be necessary. Instead, we can keep the state of the to-do list in the parent component and pass it as props to the child components. Here's an example of how we can implement this:

```javascript
function TodoApp() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (todo) => {
    setTodos(todos.filter((t) => t !== todo));
  };

  const completeTodo = (todo) => {
    const updatedTodos = todos.map((t) =>
      t === todo ? { ...t, completed: true } : t
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <TodoList todos={todos} onDelete={deleteTodo} onComplete={completeTodo} />
      <AddTodo onAdd={addTodo} />
    </div>
  );
}
```

In this example, we keep the state of the to-do list in the TodoApp component and pass it as props to the TodoList component, which renders the list of todos. We also pass callback functions onDelete and onComplete as props to the TodoList component, which are called when the user clicks the delete and complete buttons. This way, we avoid the unnecessary complexity that a global state manager like Redux can add to our application.

### Transporting User Interaction

When it comes to transporting user interaction between distant sibling trees or components in a React application, a global state manager may be necessary. For example, imagine a large form that is split into different sections, each with its own component, and the user must navigate between them. If we want to save the user's progress, we need a way to transport their interaction from one component to another.

In this case, we can use a global state manager to store the user's progress and make it accessible to all components. Let's take a look at an example:

```javascript
// Create a new Redux store
import { createStore } from 'redux';
const store = createStore(reducer);

// Define a reducer function to update the store's state
function reducer(state = {}, action) {
  switch (action.type) {
    case 'UPDATE_FORM':
      return { ...state, formData: action.payload };
    default:
      return state;
  }
}

// Create an action to update the form data in the store
function updateForm(formData) {
  return { type: 'UPDATE_FORM', payload: formData };
}

// Dispatch the action when the user updates the form data
function handleFormUpdate(formData) {
  store.dispatch(updateForm(formData));
}

// Access the form data in a different component
function OtherComponent() {
  const formData = useSelector(state => state.formData);
  // Use the form data in the component
}
```

In this example, we create a new Redux store with a reducer function that updates the state when the UPDATE\_FORM action is dispatched. We define an updateForm action that takes the form data as its payload and dispatches it to the store. In a different component, we use the useSelector hook to access the form data from the store and use it in the component.

While this example uses Redux, other global state managers like MobX or Zustand can also be used to transport user interaction in a React application. However, as mentioned earlier, we should still consider whether or not a global state manager is necessary and whether we can avoid unnecessary complexity in our application's architecture.

### **Alternatives to Global State Managers**

If you decide that a global state manager is not necessary for your React application, there are several alternatives that you can use to manage the state.

#### React's Built-in State Management

React comes with its own built-in state management system, which can be used to manage the state in a component. This system allows developers to store and update data within a component without having to pass data between components.

While this system may not be suitable for more complex state management needs, it can be a good option for simpler applications.

#### Context API

The Context API is another option for managing state in React applications. It provides a way for developers to share data between components without having to pass data down through props.

The Context API is built into React, so it doesn't require any additional libraries or tools to use. It can also be used in combination with other state management solutions, such as Redux or MobX.

But it should be used with caution, as it can also cause performance issues.

#### Local State Management Libraries

There are several libraries available that provide local state management solutions for React applications. These libraries allow developers to manage the state within a component or a specific part of the application.

Some popular local state management libraries include Unstated, Recoil, and Zustand.

In conclusion, while global state managers can be useful in certain situations, they may not be necessary for all applications built with React. React's built-in state management system, the Context API, and local state management libraries can all be used as alternatives to global state managers.