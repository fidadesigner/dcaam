import React from "react";
import GrcBanner from "../components/GrcBanner/GrcBanner";
import IncreaseEfficiency from "../components/IncreaseEfficiency/IncreaseEfficiency";
import UnblockInfoSec from "../components/UnblockInfoSec/UnblockInfoSec";
import InfoSecAndComplianceAutomation from "../components/InfoSecAndComplianceAutomation/InfoSecAndComplianceAutomation";
import NextLevelDemo from "../components/NextLevelDemo/NextLevelDemo";
import Reports from "../components/Reports/Reports";
import CompareProducts from "../components/CompareProducts/CompareProducts";

function Grc() {

    const assetPath = process.env.REACT_APP_ASSET_BASE_URL || '/dcaam/assets/';
    const bgImageUrl = `${assetPath}images/gradient-bg-img.jpg`;

    return(
        <>
            <div className="bg-custom-gradient" 
                    style={{
                        backgroundImage: `url(${bgImageUrl})`,
                    }}
                >
                <GrcBanner />
            </div>
            <IncreaseEfficiency />
            <UnblockInfoSec />
            <InfoSecAndComplianceAutomation />
            <NextLevelDemo />
            <Reports />
            <CompareProducts />
        </>
    );
}

export default Grc;