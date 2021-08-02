import { Accordion, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import troupe from "../nursing-troupe.jpg";
const Training = () => {
  return (
    <Container>
      <Card>
        <Card.Img
          src={troupe}
          variant="top"
          alt="nursing troupe"
          style={{ opacity: 0.4 }}
          className="w-25 p-3 mx-auto d-block"
        />
        <Card.Body>
          <Card.Title className="display-6">
            Training/Development Services
          </Card.Title>
          <Card.Text className="lead">
            SNC Specializes in the following training and development services:
          </Card.Text>
          <Accordion flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Peer Review Consulting</Accordion.Header>
              <Accordion.Body className="text-start">
                We help you to devloped your peer review processes. As we get to
                know your team, we are able to foster a culture of
                accountability and respect that leads to improved patient safety
                as well as company morale.
                <Link to="/contact">
                  <p>Contact us for more information!</p>
                </Link>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Leadership Development Consulting
              </Accordion.Header>
              <Accordion.Body className="text-start">
                These trainings will improve your staff's leadership skills and
                prepare them for the day to day rigors of the healthcare
                industry. Check them out to determine which best suites your
                needs.
                <ul>
                  <li>Directors of Nursing (DON) Training</li>
                  <li>Assistant Directors of Nursing (ADON) Training</li>
                  <li>Nurse Managers (NM) Training</li>
                  <li>Unit Managers (UM) Training</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Training;
