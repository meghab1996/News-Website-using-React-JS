import React from "react";

const NewsItem = (props) => {
  let { title, description, imageurl, newsurl, author, date, source, bgColor } =
    props;
  return (
    <div>
      <div
        className="card my-2"
        style={{ backgroundColor: `${props.bgColor}` }}
      >
        {/* following  style to position the icon properly in the card so that it doesnt overflow */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger"> {source}</span>
        </div>

        <span className="visually-hidden">unread messages</span>

        <img src={imageurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text" style={{ color: "White" }}>
            <small className="text-muted">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsurl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
