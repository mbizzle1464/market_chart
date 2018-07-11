import React from "react";
import { withRouter, Link } from "react-router-dom";

class Terms extends React.Component {
  render() {
    return (
      <React.Fragment>
      <div className="stripe" />
      <div className="widget">
        <h1>Terms</h1>
        <div className="search-container">
          <h2>Terms of use</h2>
          <p>
            THESE TERMS OF USE(THESE“ TERMS OF USE”) DEFINE THE RELATIONSHIP BETWEEN MARKET CHART(THE“ COMPANY” OR“ WE” OR“ US”) 
            AND YOU, THE PERSON ACCESSING THE MARKET CHART WEBSITE LOCATED AT MARKETCHART.COM(THE“ SITE”) AND / OR DOWNLOADING OUR MOBILE APPLICATION(THE“ APPLICATION”) 
            AND / OR REGISTERING FOR OUR SERVICES(“YOU” OR“ YOUR”). YOU MAY USE THE SERVICES(DEFINED BELOW) ONLY IF YOU CAN FORM A BINDING CONTRACT WITH US AND ARE NOT A 
            PERSON BARRED FROM RECEIVING SERVICES UNDER THE LAWS OF THE UNITED STATES OR OTHER APPLICABLE JURISDICTION. IF YOU ARE ACCEPTING THESE TERMS OF USE ON BEHALF OF A 
            COMPANY, ORGANIZATION, GOVERNMENT, OR OTHER LEGAL ENTITY, YOU REPRESENT AND WARRANT THAT YOU ARE AUTHORIZED TO DO SO.IF YOU CANNOT CONFIRM THE FOREGOING, 
            THEN YOU MUST NOT ACCEPT THESE TERMS OF USE AND MAY NOT USE THE SITE, THE APPLICATION OR SERVICES.YOU MAY USE THE SERVICES ONLY IN COMPLIANCE WITH THESE 
            TERMS OF USE AND ALL APPLICABLE LAWS AND REGULATIONS.
            We may amend these Terms of Use at any time by posting the revised Terms of Use on the Site and Application. 
            We may terminate these Terms of Use at any time by suspending or terminating access to the Site, Application and / or Services and / or 
            notifying you.You can see when these Terms of Use were last revised by referring to the“ Updated” legend above.Your continued use of the Site, 
            Application or Services after we have posted revised Terms of Use signifies your acceptance of such revised Terms of Use.No amendment or modification 
            of these Terms of Use will be binding unless in writing and signed by our duly authorized representative or posted to the Site and Application by our duly authorized representative.
          </p>
          <p>
              Binding Arbitration
              ANY CLAIM, DISPUTE OR CONTROVERSY OF WHATEVER NATURE ARISING OUT OF OR RELATING TO THESE TERMS OF USE SHALL BE RESOLVED BY 
              FINAL AND BINDING ARBITRATION IN ACCORDANCE WITH THE PROCESS DESCRIBED IN THE SECTION TITLED“ BINDING ARBITRATION AND APPLICABLE LAW” BELOW.
              PLEASE READ THE SECTION TITLED“ BINDING ARBITRATION AND APPLICABLE LAW” CAREFULLY.
          </p>
          <p>
            Please <Link to="/auth">sign-up</Link> for an account and get
            started today.
          </p>
        </div>
      </div>
      </React.Fragment> 
    );
  }
}

export default withRouter(Terms);