import React from "react";
import ContactForm from "../common_components/ContactForm/ContactForm";
import ParnerLogos from "../common_components/PartnerLogos/PartnerLogos";

function Contact() {

    const assetPath = process.env.REACT_APP_ASSET_BASE_URL || '/assets/';
    const bgImageUrl = `${assetPath}images/gradient-bg-img.jpg`;

    return(
        <>
            <div className="bg-custom-gradient" 
                    style={{
                        backgroundImage: `url(${bgImageUrl})`,
                    }}
                >
                <ContactForm />
            </div>
            <ParnerLogos />
        </>
    );
}

export default Contact;