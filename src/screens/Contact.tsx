import { Card, Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Contact Us</Card.Title>
        <Card.Text className="text-start">
          Let SNC support your ogranization! <br />
          For questions or additional information, call us at{" "}
          <strong>407-756-0117</strong>, or use the provided email submission
          form.
        </Card.Text>
        <Form>
          <Form.Group>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group>
            <Form.Control as="textarea" placeholder="What's on your mind?" />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Contact;
