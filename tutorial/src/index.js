import React from "react";
import ReactDom from "react-dom/client";

import "./index.css";

const books = [
  {
    img: "https://m.media-amazon.com/images/I/71FsIkGF3pL._AC_UY218_.jpg",
    title: "The Midnight Library",
    author: "Matt Haig",
    id: 1,
  },
  {
    img: "https://m.media-amazon.com/images/I/61aNIVRCtHL._AC_UY218_.jpg",
    title: "Atomic habits",
    author: "James clear",
    id: 2,
  },
];

export const BookList = () => {
  return (
    <section className="booklist">
      <EventExample />
      {books.map(book => {
        return <Book {...book} key={book.id}></Book>;
      })}
    </section>
  );
};

const Book = props => {
  const { img, title, author, children } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

const handleFormInput = e => {
  console.log(e.target.value);
};

const handleButtonClick = () => {
  alert("Button clicked");
};

const hanldeFormSubmission = e => {
  e.preventDefault();
  console.log("Form submitted");
};

const EventExample = () => {
  return (
    <section>
      <form onSubmit={hanldeFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          style={{
            margin: "1 rem",
          }}
          onChange={handleFormInput}
        ></input>
      </form>
      <button onClick={handleButtonClick}>Click me</button>
    </section>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<BookList />);
