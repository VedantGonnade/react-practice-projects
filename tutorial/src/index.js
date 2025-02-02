import React from "react";
import ReactDom from "react-dom/client";

import "./index.css";

export const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const author = "Matt Haig";

const Book = () => {
  const title = "The Midnight Library";
  return (
    <article className="book">
      <img
        src="https://m.media-amazon.com/images/I/71FsIkGF3pL._AC_UY218_.jpg"
        alt=""
      />
      <h2>{title}</h2>
      <h4
        style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.5rem" }}
      >
        {author}
      </h4>
    </article>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<BookList />);

