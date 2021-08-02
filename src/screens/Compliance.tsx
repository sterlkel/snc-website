import { Accordion, Card } from "react-bootstrap";
import hands from "../hand-holding.jpg";

const Compliance = () => {
  return (
    <Card>
      <Card.Img
        src={hands}
        variant="top"
        alt="nursing troupe"
        style={{ opacity: 0.4 }}
        className="w-25 p-3 mx-auto d-block"
      />
      <Card.Body>
        <Card.Title className="display-6">Compliance Services</Card.Title>
        <Card.Text className="lead">
          SNC specializes in the following auditing/compliance services
        </Card.Text>
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Nursing Home</Accordion.Header>
            <Accordion.Body className="text-start">
              We help your nursing home stay organized and ensure compliance
              with the latest health codes.
              <ul>
                <li>Skilled Nursing Facility/ALF Mock Surveys</li>
                <li>Chart audits</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Home Health</Accordion.Header>
            <Accordion.Body>
              Our experienced professionals can help you determine what needs to
              be filed and make sure it is done on time. Let us get your team
              ready for certifications, audits, and everything in between.
              <ul>
                <li>Coding Audits</li>
                <li>OASIS Review</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Body>
    </Card>
  );
};
export default Compliance;
