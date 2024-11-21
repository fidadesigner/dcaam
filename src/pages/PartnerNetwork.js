import React from "react";
import PartnerNetworkBanner from "../components/PartnerNetworkBanner/PartnerNetworkBanner";
import ParnerLogos from "../common_components/PartnerLogos/PartnerLogos";
import AchieveSuccess from "../components/AchieveSuccess/AchieveSuccess";
import DiverseNetworkPartners from "../components/DiverseNetworkPartners/DiverseNetworkPartners";
import Reports from "../components/Reports/Reports";
import WhyJoinDcaam from "../components/WhyJoinDcaam/WhyJoinDcaam";
import JoinNow from "../components/JoinNow/JoinNow";

function PartnerNetwork() {

    const assetPath = process.env.REACT_APP_ASSET_BASE_URL || '/assets/';
    const bgImageUrl = `${assetPath}images/gradient-bg-img.jpg`;

    return(
        <>
            <div className="bg-custom-gradient" 
                    style={{
                        backgroundImage: `url(${bgImageUrl})`,
                    }}
                >
                <PartnerNetworkBanner />
                <ParnerLogos />
            </div>
            <AchieveSuccess />
            <DiverseNetworkPartners />
            <Reports />
            <WhyJoinDcaam />
            <JoinNow />
        </>
    );
}

export default PartnerNetwork;