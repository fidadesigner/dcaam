import React from "react";
import HowItWorkBanner from "../components/HowItWork/HowItWorkBanner";
import ParnerLogos from "../common_components/PartnerLogos/PartnerLogos";
import SecurityProgram from "../components/SecurityProgram/SecurityProgram";
import RapidlyMature from "../components/RapidlyMature/RapidlyMature";
import InfoSecAndComplianceAutomation from "../components/InfoSecAndComplianceAutomation/InfoSecAndComplianceAutomation";

function HowItWork() {

    const assetPath = process.env.REACT_APP_ASSET_BASE_URL || '/assets/';
    const bgImageUrl = `${assetPath}images/gradient-bg-img.jpg`;

    return(
        <> 
            <div className="bg-custom-gradient" 
                style={{
                    backgroundImage: `url(${bgImageUrl})`,
                }}
            >
                <HowItWorkBanner />
                <ParnerLogos />
            </div>
            <SecurityProgram />
            <RapidlyMature />
            <InfoSecAndComplianceAutomation />
        </>
    );
}

export default HowItWork;