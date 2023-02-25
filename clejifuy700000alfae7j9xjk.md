# React Hooks - What's happening under the hood

React Hooks are a game changer in the world of React. They allow you to use state and other React features without writing a class component, making your code much easier and more efficient to write and maintain. But what is happening under the hood when you use React Hooks?

To understand this, let's take a look at a simple example. Suppose you have a functional component that displays a counter and a button to increment the counter. You can implement this using React Hooks as follows:

```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

In this example, we are using the `useState` Hook to manage the state in our functional component. When the component is first rendered, useState returns an array with two elements: the current state value (0 in this case), and a function to update that state value (`setCount`).

When the user clicks the "Increment" button, the onClick handler calls setCount with the new count value. This updates the state value and triggers a re-render of the component with the new count value displayed on the screen.

But how does this work under the hood? When we call `useState`, React creates a closure around the state value and the setCount function. This closure is persistent across renders, so we can use the same useState Hook to manage the state across multiple renders of the component.

When we call setCount with a new count value, React updates the state value and triggers a re-render of the component. This is achieved using React's internal `updateQueue` and `fiber data` structures, which keep track of changes to the component's state and props.

The `useState` hook is just one example of how React Hooks work. There are many other Hooks available, such as `useEffect`, `useContext`, and `useRef`, which allow you to add functionality to your functional components without the need for class components.

### Let's take a closer look!

At its core, React Hooks utilize the hidden state of a component, which is stored inside a fiber. A fiber represents an entity that corresponds to a component instance. However, unlike class components, functional components do not create instances.

The React renderer grants access to the respective context, state, and other information that a hook needs. Moreover, it's the React renderer that calls the component function, allowing it to associate the component instance with hook functions that are called inside the component function.

To better understand how this works, consider the following code snippet:

```javascript

let currentlyRenderedCompInstance;
const compStates = new Map(); // maps component instances to their states
const compInstances = new Map(); // maps component functions to instances

function useState(initialState) {
  if (!compStates.has(currentlyRenderedCompInstance))
    compStates.set(currentlyRenderedCompInstance, initialState);

  return [
    compStates.get(currentlyRenderedCompInstance), // state
    val => compStates.set(currentlyRenderedCompInstance, val) // state setter
  ];
}

function render(comp, props) {
  const compInstanceToken = Symbol('Renderer token for ' + comp.name);

  if (!compInstances.has(comp))
    compInstances.set(comp, new Set());

  compInstances.get(comp).add(compInstanceToken);

  currentlyRenderedCompInstance = compInstanceToken;

  return { 
    instance: compInstanceToken,
    children: comp(props)
  };
}
```

As you can see, `useState` can access the currently rendered component instance token through `currentlyRenderedCompInstance`. Similarly, other built-in hooks can also access this token and maintain the state for the component instance.

React Hooks leverage the hidden state of a component, which is stored in a fiber. The React renderer grants hook access to relevant information and associates the component instance with hook functions. This allows for efficient state management and enhances the development experience.

In conclusion, React Hooks are a powerful tool for writing React components more simply and efficiently. <mark>They use closures to manage state</mark> and lifecycle methods in functional components, allowing you to write reusable logic and share stateful logic between components. Understanding how Hooks work under the hood can help you write better React code and take advantage of the full potential of this amazing library.

%%[youtube]