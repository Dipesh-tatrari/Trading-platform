import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        ImageURl="media/images/kite.png"
        ProductName="Kite"
        ProductDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices"
        tryDemo=""
        learnMore=""
        googlePlay=""
        applePlay=""
      />

        <RightSection
        ImageURl="media/images/console.png"
        ProductName="Console"
        ProductDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        tryDemo=""
        learnMore=""
        googlePlay=""
        applePlay=""
      />

      <LeftSection
        ImageURl="media/images/coin.png"
        ProductName="Coin"
        ProductDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        applePlay=""
      />

      <RightSection
        ImageURl="media/images/kiteconnect.png"
        ProductName="Kite Connect API"
        ProductDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        tryDemo=""
        learnMore=""
        googlePlay=""
        applePlay=""
      />

      <LeftSection
        ImageURl="media/images/varsity.png"
        ProductName="Varsity Mobile"
        ProductDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        applePlay=""
      />
    </>
  );
}

export default ProductPage;
