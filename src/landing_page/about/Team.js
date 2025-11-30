import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-2  border-top">
        <h1 className=" text-center mt-5 ">People</h1>
      </div>

      <div className="row p-5 mt-5 text-muted fs-6">
        <div className="col-lg-6 col-md-12 col-sm-12 p-5 text-center">
          <img
            src="media\images\nithinKamath.jpg"
            alt="ceo image"
            style={{ borderRadius: "100%", width: "65%" }}
          />
          <h4 className="mt-5">Nithin Kamath</h4>
          <h5 className="mt-2">Founder, CEO</h5>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 p-5">
          <p className="mb-3" style={{lineHeight:"1.8"}}>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p><br/>

          <p className="mb-3" style={{lineHeight:"1.8"}}>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC). markets.
          </p><br/>

          <p className="mb-3" style={{lineHeight:"1.8"}}>Playing basketball is his zen</p><br/>
          <p className="mb-3" style={{lineHeight:"1.8"}}>
            Connect on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              HomePage
            </a>
            /
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>
            /
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
