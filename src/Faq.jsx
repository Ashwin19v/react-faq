import { useState } from "react";
import "./faq.css";
const FaqItems = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };
  return (
    <div className={`faqitem ${show ? "active " : ""}`}>
      <div className="header" onClick={toggle}>
        {" "}
        {question}
      </div>
      <div className="body">
        <div className="content">{answer}</div>
      </div>
    </div>
  );
};
const FaqAccordian = ({ data }) => {
  return (
    <div className="faq">
      <h2>FAQs</h2>
      {data.map((item) => (
        <FaqItems key={item.id} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

const data = [
  {
    id: 4,
    question: "What is JSX?",
    answer:
      "JSX stands for JavaScript XML. It allows you to write HTML in React.",
  },
  {
    id: 5,
    question: "What are React components?",
    answer:
      "Components are the building blocks of a React application's UI. They can be functional or class-based.",
  },
  {
    id: 6,
    question: "What are props in React?",
    answer:
      "Props are short for properties. They are read-only attributes used to pass data from parent to child components.",
  },
  {
    id: 7,
    question: "What is state in React?",
    answer:
      "State is a built-in React object used to contain data or information about the component. State can change over time, usually as a result of user actions.",
  },
  {
    id: 8,
    question: "What are hooks in React?",
    answer:
      "Hooks are functions that let you use state and other React features in functional components. Examples include useState, useEffect, and useContext.",
  },
  {
    id: 9,
    question: "What is the virtual DOM?",
    answer:
      "The virtual DOM is a lightweight copy of the actual DOM. React uses it to update the UI efficiently by minimizing direct manipulation of the actual DOM.",
  },
  {
    id: 10,
    question: "What is a React fragment?",
    answer:
      "A React Fragment lets you group multiple elements without adding extra nodes to the DOM.",
  },
  {
    id: 11,
    question: "What is React Router?",
    answer:
      "React Router is a library for routing in React applications. It enables navigation among views or components.",
  },
  {
    id: 12,
    question: "What is server-side rendering (SSR)?",
    answer:
      "SSR is the process of rendering React components on the server and sending HTML to the client. This improves performance and SEO.",
  },
  {
    id: 13,
    question: "What is a higher-order component (HOC)?",
    answer:
      "An HOC is a function that takes a component and returns a new component with additional props or functionality.",
  },
  {
    id: 14,
    question: "What are React lifecycle methods?",
    answer:
      "Lifecycle methods are functions that get called at different stages of a component's lifecycle, such as componentDidMount, componentDidUpdate, and componentWillUnmount.",
  },
];

export const Faq = () => {
  return (
    <>
      <div className="app">
        <FaqAccordian data={data} />
      </div>
    </>
  );
};
