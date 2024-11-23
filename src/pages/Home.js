import React from "react";
import HomeBanner from "../components/HomeBanner/HomeBanneer";
import ParnerLogos from "../common_components/PartnerLogos/PartnerLogos";
import GrcPlatform from "../components/GRC_Platform/GrcPlatform";
import AutomateManualWork from "../components/Automate_Manual_Work/AutomateManualWork";
import Performer from "../components/Performer/Performer";
import MoveShift from "../components/MoveShift/MoveShift";
import Frameworks from "../components/Frameworks/Frameworks";
import RequestDemo from "../common_components/Request_Demo/RequestDemo";
import DownloadGrcRoiGuide from "../components/Download_GRC_ROI_Guide/DownloadGrcRoiGuide";

function Home() {

    const assetPath = process.env.REACT_APP_ASSET_BASE_URL || '/dcaam/assets/';
    const bgImageUrl = `${assetPath}images/gradient-bg-img.jpg`;

    return(
        <> 
            <div className="bg-custom-gradient" 
                style={{
                    backgroundImage: `url(${bgImageUrl})`,
                }}
            >
                <HomeBanner />
                <ParnerLogos />
            </div>
            <GrcPlatform />
            <AutomateManualWork />
            <Performer />
            <MoveShift />
            <Frameworks />
            <RequestDemo />
            <DownloadGrcRoiGuide />
        </>
    );
}

export default Home;