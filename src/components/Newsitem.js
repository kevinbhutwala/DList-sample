import React from "react";

const Newsitem = (props) => {
  const title = props.title;
  const description = props.description;

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="/" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Newsitem;
