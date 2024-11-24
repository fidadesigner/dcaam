import React, {useEffect, useState} from "react";
import { Container, Row, Col } from 'react-bootstrap';

function DynemicHomeBanner() {

    const [bannerContent, setBannerContent] = useState(
        {
            title: "Title loading...",
            description: "Description loading..."
        }
    )

    // Fetch data from API on component mount
    useEffect(() => {
        // Replace with your actual API endpoint
        const fetchData = async () => {
            try {
                const response = await fetch('https://your-api-endpoint.com/banner');
                const data = await response.json();
                // Assuming API response has "title" and "description" fields
                setBannerContent({
                    title: data.title || "Default Title",
                    description: data.description || "Default Description"
                });
            } catch (error) {
                console.error("Error fetching banner content", error);
                // You can handle errors here (e.g., set a default message)
                setBannerContent({
                    title: "Error loading title",
                    description: "Error loading description"
                });
            }
        };

        fetchData();
    }, []); // Empty dependency array to run only on mount

    return(
        <>
            <section id="section">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} className="text-center">
                            <h1>{bannerContent.title}</h1>
                            <p>{bannerContent.description}</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default DynemicHomeBanner;