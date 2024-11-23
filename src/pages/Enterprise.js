import React from "react";
import EnterpriseBanner from "../components/EnterpriseBanner/EnterpriseBanner";
import SolutionForMaturing from "../components/SolutionForMaturing/SolutionForMaturing";
import UnparalleledFunctionality from "../components/UnparalleledFunctionality/UnparalleledFunctionality";
import InfoSecAndComplianceAutomation from "../components/InfoSecAndComplianceAutomation/InfoSecAndComplianceAutomation";
import NextLevelDemo from "../components/NextLevelDemo/NextLevelDemo";
import Reports from "../components/Reports/Reports";
import CompareProducts from "../components/CompareProducts/CompareProducts";

function Enterprise() {

    const assetPath = process.env.REACT_APP_ASSET_BASE_URL || '/dcaam/assets/';
    const bgImageUrl = `${assetPath}images/gradient-bg-img.jpg`;

    return(
        <>
            <div className="bg-custom-gradient" 
                    style={{
                        backgroundImage: `url(${bgImageUrl})`,
                    }}
                >
                <EnterpriseBanner />
            </div>
            <SolutionForMaturing />
            <UnparalleledFunctionality />
            <InfoSecAndComplianceAutomation />
            <NextLevelDemo />
            <Reports />
            <CompareProducts />
        </>
    );
}

export default Enterprise;