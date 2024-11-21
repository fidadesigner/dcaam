import React from "react";
import OurSecurityBanner from "../components/OurSecurityBanner/OurSecurityBanner";
import TrustedPartner from "../components/TrustedPartner/TrustedPartner";
import ParnerLogos from "../common_components/PartnerLogos/PartnerLogos";
import RequestDemo from "../common_components/Request_Demo/RequestDemo";

function OurSecurity() {

    const assetPath = process.env.REACT_APP_ASSET_BASE_URL || '/assets/';
    const bgImageUrl = `${assetPath}images/gradient-bg-img.jpg`;

    return(
        <> 
            <div className="bg-custom-gradient" 
                style={{
                    backgroundImage: `url(${bgImageUrl})`,
                }}
            >
                <OurSecurityBanner />
                <TrustedPartner />
            </div>
            <ParnerLogos />
            <RequestDemo />
        </>
    );
}

export default OurSecurity;