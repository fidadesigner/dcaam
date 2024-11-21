import React from "react";
import IntegrationBanner from "../components/IntegrationsBanner/IntegrationBanner";
import IntegrationPartners from "../components/IntegrationPartners/IntegrationPartners";

function Integration() {

    const assetPath = process.env.REACT_APP_ASSET_BASE_URL || '/assets/';
    const bgImageUrl = `${assetPath}images/gradient-bg-img.jpg`;

    return(
        <>
            <div className="bg-custom-gradient" 
                    style={{
                        backgroundImage: `url(${bgImageUrl})`,
                    }}
                >
                <IntegrationBanner />
            </div>
            <IntegrationPartners />
        </>
    );
}

export default Integration;