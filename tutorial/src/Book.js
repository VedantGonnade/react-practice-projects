export const Book = props => {
  const { img, title, author, children, displayImage, bookNumber } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <h2>{`# ${bookNumber + 1}`}</h2>
      <button type="button" onClick={() => displayImage(props.id)}>
        display title
      </button>
      {children}
    </article>
  );
};
