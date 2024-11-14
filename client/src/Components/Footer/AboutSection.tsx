import React from 'react';
import './AboutSection.css'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutSection: React.FC = () => {
    document.title = "RGUKT-aboutSection"
    return (
        <div className = "body">
            <section className="hero-section">
                <Container>
                    <h1>Welcome to Our Car Management System</h1>
                    <p>Seamless, sustainable, and affordable Car Management System is Provided for All.</p>
                    <h2>About Car Management</h2>
                </Container>
            </section>
            
            <section id="introduction" className="mt-2">
                <Container>
                    <Row className="intro justify-content-center">
                        <Col lg={8}>
                            <h2>Introduction</h2>
                            <p>Welcome to Car Management System, Efficiently manage your fleet with our Car Management System. This intuitive application streamlines vehicle tracking, maintenance scheduling, fuel monitoring, and driver management. Designed for car rental companies, fleet operators, and individual vehicle owners, our system enhances productivity, reduces costs, and improves customer satisfaction.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            
            <section id="features" className="key-features mt-5">
                <Container>
                    <h2>Key Features</h2>
                    <Row>
                        <Col md={4} className="text-center features">
                            <i className="fas fa-shopping-cart"></i>
                            <h4>Vehicle Management
                            </h4>
                            <p>1. Vehicle Registration: Store vehicle details (make, model, year, VIN)
                                2. Vehicle Tracking: GPS integration for real-time location tracking
                                3. Vehicle Inspection: Schedule and track maintenance inspections
                                4. Vehicle History: Maintain records of servicing, repairs, and accidents
                            </p>
                        </Col>
                        <Col md={4} className="text-center features">
                            <i className="fas fa-exchange-alt"></i>
                            <h4>Maintenance Management
                            </h4>
                            <p>1. Scheduled Maintenance: Automated reminders for routine maintenance
                                2. Repair Management: Track and manage repair requests and costs
                                3. Maintenance Calendar: Visualize upcoming maintenance tasks
                                4. Service History: Record and track all maintenance activities
                                </p>
                        </Col>
                        <Col md={4} className="text-center features">
                            <i className="fas fa-lock"></i>
                            <h4>Secure Transactions</h4>
                            <p>Your safety is our priority. Enjoy secure payment options and buyer protection policies to ensure a hassle-free shopping experience.</p>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col md={4} className="text-center features">
                            <i className="fas fa-users"></i>
                            <h4>User-friendly Interface</h4>
                            <p>Our platform is designed to be intuitive and easy to navigate. Quickly find what you’re looking for with our efficient search and category filters.</p>
                        </Col>
                        <Col md={4} className="text-center features">
                            <i className="fas fa-heart"></i>
                            <h4>Community Driven</h4>
                            <p>The Car Management System web application can benefit from integrating community features to enhance user engagement, foster collaboration, and provide valuable resources. </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            
            <section id="benefits" className="user-benefits mt-5">
                <Container>
                    <h2>User Benefits</h2>
                    <Row>
                        <Col md={6}>
                            <h4>Save Money</h4>
                            <p>Why pay more when you can get the same quality for less? Take advantage of discounted rates and pre-loved items to keep your expenses in check.</p>
                        </Col>
                        <Col md={6}>
                            <h4>Sustainable Shopping</h4>
                            <p>Reduce waste by buying and selling second-hand items. eMart encourages sustainable practices, contributing to a greener campus.</p>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col md={6}>
                            <h4>Convenience</h4>
                            <p>Shop anytime, anywhere. With eMart’s mobile-friendly design, you can browse, buy, and sell on the go.</p>
                        </Col>
                        <Col md={6}>
                            <h4>Build Connections</h4>
                            <p>Engage with your college community, meet new people, and exchange useful resources. eMart is more than just a marketplace; it’s a social hub.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            
            <section id="how-it-works" className="how-it-works mt-5">
                <Container>
                    <h2>How It Works</h2>
                    <Row>
                        <Col md={6}>
                            <h4>For Buyers:</h4>
                            <ul>
                                <li>Browse: Explore various categories or use the search bar to find specific items.</li>
                                <li>Add to Cart: Select the items you want to purchase and add them to your cart.</li>
                                <li>Checkout: Complete your purchase through our secure payment gateway.</li>
                                <li>Delivery: Choose between pick-up or delivery options, as available.</li>
                            </ul>
                        </Col>
                        <Col md={6}>
                            <h4>For Sellers:</h4>
                            <ul>
                                <li>List an Item: Post your items by filling in the details and uploading pictures.</li>
                                <li>Set Your Price: Decide on a fair price for your items.</li>
                                <li>Connect with Buyers: Respond to inquiries and arrange for item exchange.</li>
                                <li>Get Paid: Receive payments through the platform securely.</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
            
            <section id="faq" className="faq-section mt-5">
                <Container>
                    <h2>Frequently Asked Questions (FAQs)</h2>
                    <Row>
                        <Col md={6}>
                            <h4>Q1: Who can use Car Management System?</h4>
                            <p>1. Car Rental Companies: Manage rental fleets, bookings, and customer information.
                                <br/>2. Fleet Operators: Track and optimize vehicle usage, maintenance, and fuel consumption.
                                <br/> 3. Taxi/Cab Services: Monitor driver performance, vehicle utilization, and customer satisfaction.
                                <br/>4. Logistics/Transportation Companies: Manage vehicle fleets, routes, and delivery schedules.
                                <br/>5. Car Sharing Services: Coordinate vehicle sharing, bookings, and member management.
                                </p>
                        </Col>
                        <Col md={6}>
                            <h4>Q2: How do I list an item for sale?</h4>
                            <p>Log in to your eMart account, go to the "Sell" section, and follow the prompts to create a listing. Fill in all required details and upload clear images of your item.</p>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col md={6}>
                            <h4>Q3: What types of payments are accepted?</h4>
                            <p>We accept various payment methods, including credit/debit cards, PayPal, and direct bank transfers. All transactions are secured to protect your information.</p>
                        </Col>
                        <Col md={6}>
                            <h4>Q4: Can I return a purchased item?</h4>
                            <p>Yes, returns are possible within a specified period if the item is not as described or defective. Please refer to our return policy for more details.</p>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col md={6}>
                            <h4>Q5: How do I contact customer support?</h4>
                            <p>You can reach our customer support team through the "Contact Us" section on the website. We are here to assist you with any issues or queries.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default AboutSection;
