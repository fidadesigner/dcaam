import React from "react";
import AuditBanner from "../components/AuditBanner/AuditBanner";
import BigPicture from "../components/BigPicture/BigPicture";
import ComplianceSecurity from "../components/ComplianceSecurity/ComplianceSecurity";
import InfoSecAndComplianceAutomation from "../components/InfoSecAndComplianceAutomation/InfoSecAndComplianceAutomation";
import NextLevelDemo from "../components/NextLevelDemo/NextLevelDemo";
import Reports from "../components/Reports/Reports";
import CompareProducts from "../components/CompareProducts/CompareProducts";

function AuditPrep() {

    const assetPath = process.env.REACT_APP_ASSET_BASE_URL || '/dcaam/assets/';
    const bgImageUrl = `${assetPath}images/gradient-bg-img.jpg`;

    return(
        <>
            <div className="bg-custom-gradient" 
                    style={{
                        backgroundImage: `url(${bgImageUrl})`,
                    }}
                >
                <AuditBanner />
            </div>
            <BigPicture />
            <ComplianceSecurity />
            <InfoSecAndComplianceAutomation />
            <NextLevelDemo />
            <Reports />
            <CompareProducts />
        </>
    );
}

export default AuditPrep;