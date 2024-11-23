import React from "react";
import AboutBanner from "../components/AboutBanner/AboutBanner";
import MissionValues from "../components/MissionValues/MissionValues";
import OurLeadership from "../components/OurLeadership/OurLeadership";
import ParnerLogos from "../common_components/PartnerLogos/PartnerLogos";

function About() {

    const assetPath = process.env.REACT_APP_ASSET_BASE_URL || '/dcaam/assets/';
    const bgImageUrl = `${assetPath}images/gradient-bg-img.jpg`;

    return(
        <>
            <div className="bg-custom-gradient" 
                    style={{
                        backgroundImage: `url(${bgImageUrl})`,
                    }}
                >
                <AboutBanner />
            </div>
            <MissionValues />
            <OurLeadership />
            <ParnerLogos />
        </>
    );
}

export default About;