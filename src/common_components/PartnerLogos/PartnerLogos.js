import React, { useState, useEffect } from 'react';
import './PartnerLogos.css';
import { Container, Row, Col } from 'react-bootstrap';

const assetPath = process.env.REACT_APP_ASSET_BASE_URL || '/dcaam/assets/';

const logos = [
 `${assetPath}images/partner-logo1.png`,
  `${assetPath}images/partner-logo2.png`,
  `${assetPath}images/partner-logo3.png`,
  `${assetPath}images/partner-logo4.png`,
  `${assetPath}images/partner-logo5.png`,
  `${assetPath}images/partner-logo1.png`,
  `${assetPath}images/partner-logo2.png`,
  `${assetPath}images/partner-logo3.png`,
  `${assetPath}images/partner-logo4.png`,
  `${assetPath}images/partner-logo5.png`,
  `${assetPath}images/partner-logo1.png`
];

function ParnerLogos() {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment index to create the sliding effect
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 3000); // Adjust the time interval (e.g., 2000ms for 2 seconds per slide)

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const visibleLogos = logos.slice(currentIndex, currentIndex + 5).concat(
    logos.slice(0, Math.max(0, currentIndex + 5 - logos.length))
  );

  return (
    <>
        <section id='section' className='custom-d-none'>
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={12} className='text-center'>
                        <h2>Monitoring thousands of environments daily</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className='d-flex align-items-center justify-content-between'>
                        {visibleLogos.map((logo, index) => (
                            <div className="slider-item" key={index}>
                                <img src={logo} alt={`Logo ${index + 1}`} />
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  );
}

export default ParnerLogos;
