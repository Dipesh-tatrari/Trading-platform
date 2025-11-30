import React from "react";

function Footer() {
  return (
    <footer style={{backgroundColor:"#F2F0EF"}}>
    <div className="container border-top mt-5" >
      <div className="row mt-5">
        <div className="col-lg-3 col-md-12 col-sm-12">
          <>
            <img
              src="media/images/logo.svg"
              alt="Logo"
              width="150"
              height="10%"
            />
          </>

          <p>&copy; 2010-2024 Zerodha Broking Limited. All rights reserved.</p>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-4">
          <p>Company</p>
          <a href="#" style={{textDecoration:"none", color:"black",}}>About</a>
          <br />
          <a href="#" style={{textDecoration:"none", color:"black",}}>Contact</a>
          <br />
          <a href="#" style={{textDecoration:"none", color:"black",}}>Products</a>
          <br />
          <a href="#" style={{textDecoration:"none", color:"black",}}>Pricing</a>
          <br />
          <a href="#" style={{textDecoration:"none", color:"black",}}>Referral Program</a>
          <br />
          <a href="#" style={{textDecoration:"none", color:"black",}}>Careers</a>
          <br />
          <a href="#" style={{textDecoration:"none", color:"black",}}>Press & media</a>
          <br />
          <a href="#" style={{textDecoration:"none", color:"black",}}>customer stories</a>
          <br />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-4">
          <p>Support</p>
          <a href="#" style={{textDecoration:"none", color:"black",}}>Contact</a>
          <br />
          <a href="#" style={{textDecoration:"none", color:"black",}}>Support Portal</a>
          <br />
          <a href="#" style={{textDecoration:"none", color:"black",}}>Z-Connect Blog</a>
          <br />
          <a href="#" style={{textDecoration:"none", color:"black",}}>List of Charges</a>
          <br />
          <a href="#" style={{textDecoration:"none", color:"black",}}>Download Resources</a>
          <br />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-4">
          <p>Account</p>
          <a href="#" style={{textDecoration:"none", color:"black",}}>Open an account</a>
          <br />
          <a href="#" style={{textDecoration:"none", color:"black",}}>Fund Transfer</a>
          <br />
          <a href="#" style={{textDecoration:"none", color:"black",}}>60 Day challenge</a>
          <br />
        </div>
      </div>
      <div className="mt-5 text-small text-muted">
        <p>
          Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
          no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
          Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered
          Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony,
          Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078,
          Karnataka, India. For any complaints pertaining to securities broking
          please write to complaints@zerodha.com, for DP related to
          dp@zerodha.com. Please ensure you carefully read the Risk Disclosure
          Document as prescribed by SEBI | IC
        </p>
        <p>
            Investments in securities market are subject to market risks; read all the related documents carefully before investing.
        </p>
        <p>
          Attention investors: 1) Stock brokers can accept securities as margins
          from clients only by way of pledge in the depository system w.e.f
          September 01, 2020. 2) Update your e-mail and phone number with your
          stock broker / depository participant and receive OTP directly from
          depository on your e-mail and/or mobile number to create pledge. 3)
          Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month
        </p>
        <p>
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day. Issued in the interest of investors. KYC is one time exercise
          while dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another
          intermediary." Dear Investor, if you are subscribing to an IPO, there
          is no need to issue a cheque. Please write the Bank account number and
          sign the IPO application form to authorize your bank to make payment
          in case of allotment. In case of non allotment the funds will remain
          in your bank account. As a business we don't give stock tips, and have
          not authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of Zerodha and offering such services, please
          create a ticket here
        </p>
      </div>
    </div>
    </footer>
  );
}

export default Footer;
