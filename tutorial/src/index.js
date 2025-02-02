import React from "react";
import ReactDom from "react-dom/client";

import "./index.css";

const firstBook = {
  img: "https://m.media-amazon.com/images/I/71FsIkGF3pL._AC_UY218_.jpg",
  title: "The Midnight Library",
  author: "Matt Haig",
};

const secondBook = {
  img: "https://m.media-amazon.com/images/I/61aNIVRCtHL._AC_UY218_.jpg",
  title: "Atomic habits",
  author: "James clear",
};

export const BookList = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      >
        <button>I am a children</button>
      </Book>
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
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

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<BookList />);
