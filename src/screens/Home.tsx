import { Carousel, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import nursing from "../nursing-3.jpg";
import nursingHome from "../nursing-home.jpg";

const Home = () => {
  return (
    <Container>
      <Row>
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              src={nursing}
              className="d-block w-100"
              alt="first nursing"
              style={{ opacity: 0.4 }}
            />
            <Carousel.Caption>
              <h3>
                Interested in improving your team's efficiency and patient
                safety? Check out our{" "}
                <Link to="/training">Peer Review Consulting Programs</Link>
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={nursingHome}
              className="d-block w-100"
              alt="nursing home"
            />
            <Carousel.Caption>
              <h3>
                Allow us to help you keep your nursing home compliant with
                health codes. Take a look at our{" "}
                <Link to="/compliance">Compliance Consulting Programs</Link>
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
      <Row>
        <p className="text-start fs-6">
          <strong>Sunshine Nursing Consulting (SNC) LLC</strong> specializes in
          providing nursing consulting services to the greater Orlando area. SNC
          is owned and operated by Venice Thomas RN, MS who has over 30 years of
          experience in long term care, home healthcare and nursing education.
          At SNC we help our clients to achieve their organization goals by
          providing training, auditing, mentoring and consultation services. We
          have a team of experience nursing professionals who can help you to
          fulfill all of your organizational aspirations.
        </p>
      </Row>
    </Container>
  );
};

export default Home;
