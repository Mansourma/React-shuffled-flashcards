import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>React Flashcards</h1>
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript"
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components"
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX"
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props"
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook"
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element"
  },
  {
    id: 5678,
    question: "What is the purpose of React Router?",
    answer: "To enable navigation among views in a React application"
  },
  {
    id: 9876,
    question: "What is the virtual DOM in React?",
    answer: "A lightweight copy of the actual DOM which helps in efficient rendering"
  },
  {
    id: 5432,
    question: "What is the role of keys in React lists?",
    answer: "To give elements in a list a stable identity to optimize rendering"
  },
  {
    id: 24168,
    question: "Explain the concept of state in React.",
    answer: "State holds information about the components, and when state changes, the component re-renders"
  },
  {
    id: 1357,
    question: "What's the purpose of the useEffect hook in React?",
    answer: "To perform side effects in functional components"
  },
  {
    id: 1122,
    question: "How does React handle forms?",
    answer: "By using controlled and uncontrolled components"
  },
  {
    id: 3141,
    question: "What are React hooks?",
    answer: "Functions that let you use state and other React features in functional components"
  },
  {
    id: 5926,
    question: "What is the purpose of the useCallback hook?",
    answer: "To memoize functions to prevent unnecessary re-renders in child components"
  },
  {
    id: 2718,
    question: "Explain the concept of prop drilling in React.",
    answer: "The process of passing props through multiple levels of components"
  },
  {
    id: 8181,
    question: "What is the Context API in React used for?",
    answer: "To share data between components without having to explicitly pass props through every level"
  },
  {
    id: 1618,
    question: "What are higher-order components (HOCs) in React?",
    answer: "Functions that take a component and return a new enhanced component"
  },
  {
    id: 8008,
    question: "How does React handle conditional rendering?",
    answer: "By using ternary operators, logical &&, or conditional rendering with if-else statements"
  },
  {
    id: 7777,
    question: "What is the purpose of React.Fragment?",
    answer: "To group multiple elements without adding extra nodes to the DOM"
  },
  {
    id: 8888,
    question: "What is the difference between state and props in React?",
    answer: "State is managed within a component while props are passed to a component"
  },
  {
    id: 9999,
    question: "Explain the concept of controlled vs uncontrolled components in forms.",
    answer: "Controlled components have form data handled by React, uncontrolled components do not"
  },
  {
    id: 1234,
    question: "What is the role of shouldComponentUpdate() in React?",
    answer: "To let React know if a component’s output is affected by state or props changes"
  },
  {
    id: 56748,
    question: "How does React handle error boundaries?",
    answer: "By capturing errors in any component below them in the tree and displaying fallback UI"
  },
  {
    id: 2468,
    question: "What's the purpose of useRef hook in React?",
    answer: "To access and interact with DOM nodes or React elements directly"
  },
  {
    id: 10010,
    question: "What is the purpose of the useMemo hook in React?",
    answer: "To memoize expensive calculations and optimize performance by caching the result"
  },
  {
    id: 2020,
    question: "Explain the concept of event handling in React.",
    answer: "React uses synthetic events to handle browser events in a consistent way across different browsers"
  },
  {
    id: 3030,
    question: "What is the significance of keys in React lists?",
    answer: "Keys help React identify which items have changed, are added, or are removed in a list"
  },
  {
    id: 4040,
    question: "What is the purpose of the useContext hook in React?",
    answer: "To consume context values provided by the nearest Context.Provider ancestor"
  },
  {
    id: 5050,
    question: "Explain the concept of lifting state up in React.",
    answer: "Moving the state from child components to their common ancestor to share state between them"
  },
  {
    id: 6060,
    question: "What is the role of componentDidCatch() in React?",
    answer: "To catch JavaScript errors anywhere in a component tree"
  },
  {
    id: 7070,
    question: "What are the key features of React?",
    answer: "Virtual DOM, JSX, Components, One-way data flow, and React hooks"
  },
  {
    id: 8080,
    question: "What is the purpose of the useRef hook in React?",
    answer: "To persist values across renders without causing re-renders"
  },
  {
    id: 9090,
    question: "Explain the concept of higher-order components (HOCs) in React.",
    answer: "HOCs are functions that take a component and return a new enhanced component"
  },
  {
    id: 1010,
    question: "How does React handle routing?",
    answer: "React Router is commonly used for declarative routing in React applications"
  },
  {
    id: 1111,
    question: "What is the purpose of the useCallback hook in React?",
    answer: "To memoize functions and optimize performance by preventing unnecessary re-renders"
  },
  {
    id: 1212,
    question: "Explain the concept of server-side rendering (SSR) in React.",
    answer: "Rendering React components on the server side to send fully rendered pages to the client"
  },
  {
    id: 1313,
    question: "What is the significance of the PureComponent in React?",
    answer: "PureComponent is similar to Component, but it performs a shallow comparison of props and state to prevent unnecessary re-renders."
  },
  {
    id: 1414,
    question: "What is the purpose of the componentDidCatch() method?",
    answer: "componentDidCatch() is a lifecycle method used for error handling in React components, capturing errors in child components."
  },
  {
    id: 1515,
    question: "Explain the concept of keys in React. Why are they important?",
    answer: "Keys are used to identify and differentiate between components in lists, aiding in efficient rendering and updating."
  },
  {
    id: 1616,
    question: "What are controlled components in React?",
    answer: "Controlled components are elements like inputs whose value is controlled by React state, allowing React to monitor and control the input value."
  },
  {
    id: 1717,
    question: "What is the purpose of the getDerivedStateFromProps() method?",
    answer: "getDerivedStateFromProps() is a static method used to update state based on changes in props before rendering."
  },
  {
    id: 1818,
    question: "Explain the concept of lazy loading in React.",
    answer: "Lazy loading involves delaying the loading of components until they are needed, improving initial page load times."
  },
  {
    id: 1919,
    question: "What are fragments in React?",
    answer: "Fragments allow you to group multiple children elements without adding extra nodes to the DOM."
  },
  {
    id: 2021,
    question: "What is the purpose of the useMemo hook?",
    answer: "useMemo is used to memoize expensive calculations in functional components to optimize performance."
  },
  {
    id: 2121,
    question: "What is React.memo() used for?",
    answer: "React.memo is a higher-order component that memoizes a functional component to prevent unnecessary re-renders."
  }
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);
  const [shuffledQuestions, setShuffledQuestions] = useState(questions);

  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  function handleClick(id) {
    if (id === selectedId) {
      setSelectedId(null); 
      setShuffledQuestions(shuffleArray(questions)); 
    } else {
      setSelectedId(id);
    }
  }

  return (
    <div className="flashcards">
      {shuffledQuestions.map((question) => (
        <div
          key={question.id}
          onClick={() => handleClick(question.id)}
          className={question.id === selectedId ? "selected" : ""}
        >
          <p> {question.id === selectedId ? question.answer : question.question} </p>
        </div>
      ))}
    </div>
  );
}
