import React from "react";
import ReactDom from "react-dom/client";

import "./index.css";
import { books } from "./books";
import { Book } from "./Book";

const displayImage = id => {
  const book = books.find(book => book.id === id);
  console.log(book);
};

export const BookList = () => {
  return (
    <>
      <h1>Best Selling Books</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return (
            <Book
              {...book}
              key={book.id}
              displayImage={displayImage}
              bookNumber={index}
            ></Book>
          );
        })}
      </section>
    </>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<BookList />);
