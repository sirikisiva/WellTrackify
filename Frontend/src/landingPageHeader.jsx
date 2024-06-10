import React, { useState } from "react";
import "./landingPage.css";
import { useNavigate } from "react-router-dom";
import { Modal, Button, Form, Alert } from "react-bootstrap";

const LandingPageHeader = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", body: "" });
  const [isBookDemo, setIsBookDemo] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", date: "" });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const navigate = useNavigate();

  const goToSignIn = () =>{
    navigate('/SignIn');
  }

  const goToSignUp = () =>{
    navigate('/SignUp');
  }

  const handleShowModal = (title, body, bookDemo = false) => {
    setModalContent({ title, body });
    setIsBookDemo(bookDemo);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setIsBookDemo(false);
    setShowSuccessMessage(false); 
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name: "", email: "", date: "" });
    setShowSuccessMessage(true);
    setTimeout(() => {
      handleCloseModal();
    }, 3500);
  };

  return (
    <div className="d-flex headerBar">
      <div className="appName col-3">Welltrackify</div>
      <div className="col-6 headerList">
        <div
          className="eachList"
          onClick={() =>
            handleShowModal(
              "Admin Features",
              "1. Dashboard <br> <span class='highlight'>1. Overview of total customers, active/inactive users, and revenue.<br> <span class='highlight'>2. Real-time analytics and reports.</span><br>2. Customer Management<br> <span class='highlight'>1. View and manage customer profiles.</span> <br> <span class='highlight'> 2. Track customer progress and activity.</span>  <br><span class='highlight'>3. Batch-wise customer grouping.</span><br>  3. Activity Tracking<br>4. Class Management<br>5. Payments<br>6. Notifications<br>7. Reports & Analytics"
            )
          }
        >
          Admin Features
        </div>
        <div
          className="eachList"
          onClick={() =>
            handleShowModal(
              "User Features",
              "1. Personal Dashboard<br>2. Activity Tracking<br>3. Nutrition Suggestions<br>4. Virtual Diaries<br>5. Curated Music Playlists"
            )
          }
        >
          User Features
        </div>
        <div
          className="eachList"
          onClick={() =>
            handleShowModal(
              "Solutions",
              "Welltrackify is a comprehensive fitness and wellness app designed for both administrators and users. Administrators can efficiently manage customer profiles, schedule classes, handle payments, and access detailed analytics, all from a user-friendly dashboard. Users benefit from personalized activity tracking, nutrition guidance, class booking, and additional wellness features like music, meditation, and a personal diary. Seamlessly integrating all these features into one holistic platform, Welltrackify provides an unparalleled and cohesive wellness experience for everyone"
            )
          }
        >
          Solutions
        </div>
        <div
          className="eachList"
          onClick={() =>
            handleShowModal(
              "Pricing",
              "1.Small Business Plan (Up to 50 customers)<br>   <span class='highlight'>1. Monthly Subscription: $49.99/month</span>, <br> <span class='highlight'>2. Annual Subscription: $499.99/year</span> <br> 2. Medium Business Plan (Up to 200 customers) <br> <span class='highlight'> 1. Monthly Subscription: $99.99/month</span><br><span class='highlight'> 2. Annual Subscription: $999.99/year </span>"
            )
          }
        >
          Pricing
        </div>
        <div
          className="eachList"
          onClick={() =>
            handleShowModal("Book Demo", "", true)
          }
        >
          Book Demo
        </div>
      </div>
      <div className="col-3 signInfo">
        <div className="signIn" onClick={goToSignIn}>Sign In</div>
        <div className="signUp" onClick={goToSignUp}>Sign Up</div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modalContent.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isBookDemo ? (
            <>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formDate">
                  <Form.Label>Preferred Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <div className="submit">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                </div>
              </Form>
              {showSuccessMessage && (
                <Alert variant="success" className="mt-3 success">
                  Demo request submitted successfully!
                </Alert>
              )}
            </>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: modalContent.body }} />
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default LandingPageHeader;
