import React from "react";

function RightSection({//it is compulsory to destructure the props otherwise other file cannot read the props
  ImageURl,
  ProductName,
  ProductDescription,
  tryDemo,
  learnMore,
  googlePlay,
  applePlay
}) {
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-lg-5 col-md-12 col-sm-12 p-5 mt-5">
          <h1>{ProductName}</h1>
          <p>{ProductDescription}</p>
          <div className="text-center mt-4">
            <a
              href={learnMore}
              className="p-3"
              style={{ textDecoration: "none" }}
            >
              Learn More<i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="text-center mt-3">
            <a href={googlePlay} className="p-3">
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={applePlay} className="p-3">
              <img src="media/images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-lg-5 col-md-12 col-sm-12 p-5">
          <img src={ImageURl} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
