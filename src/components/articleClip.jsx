import React from "react";

const ArticleClip = ({ newsImage, description, title, externalFull }) => {
  return (
    <div className="col-12 col-md-5 col-xl-4 mx-md-2 mx-lg-4 mx-xl-5 mb-5 bg-white shadow">
      <div className="row justify-content-center">
        <img className="img-fluid news-image" src={newsImage} alt={title} />
      </div>

      <div className="row mx-4 mb-5">
        <div className="row w-100  mt-4 mb-2">
          <h1 className="news-title font-weight-bold ">{title}</h1>
        </div>

        <div className="row w-100 mb-3 lead">
          <p className="news-description mb-2">{description}</p>
        </div>

        <div className="w-100 row">
          <a
            target={"_blank"}
            href={externalFull}
            rel="noopener noreferrer"
            className="btn btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArticleClip;
