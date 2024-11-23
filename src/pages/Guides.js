import React from "react";
import GuidesBanner from "../components/GuidesBanner/GuidesBanner";
import GuidesCard from "../components/GuidesCard/GuidesCard";

function Guides() {

    const assetPath = process.env.REACT_APP_ASSET_BASE_URL || '/dcaam/assets/';
    const bgImageUrl = `${assetPath}images/gradient-bg-img.jpg`;

    return(
        <>
            <div className="bg-custom-gradient" 
                    style={{
                        backgroundImage: `url(${bgImageUrl})`,
                    }}
                >
                <GuidesBanner />
            </div>
            <GuidesCard />
        </>
    );
}

export default Guides;