import logo from './logo.svg';
import './App.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap'
import { Link, Switch, Route, NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ComplianceScreen, ContactScreen, HomeScreen, TrainingScreen } from './screens'
// add a carousel of stock photos, leaading to other places


// should use accordion for lists
// should add breadcrumbs as site map??
// can use cards for the body
// need to add the grid and what not


function App() {
  // need to add site map
  return (
    <Container>

      <div className="App">
        <header>

          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand as={Link} to="/" >
                <img src={logo} alt="logo" height={67} width={104} />

                Sunshine Nursing Consulting LLC
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" >
                <Nav>
                  <Nav.Link as={NavLink} to="/" >
                    Home
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/training" >
                    Training/Development Services
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/compliance" >
                    Compliance Services
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/contact" >
                    Contact Us
                  </Nav.Link>
                </Nav>

              </Navbar.Collapse>
            </Container>
          </Navbar>

        </header>
        <body style={{ marginBottom: 75 }}>
          <Container>

            <Switch>
              <Route path="/training">
                <TrainingScreen />
              </Route>
              <Route path="/compliance">
                <ComplianceScreen />
              </Route>
              <Route path="/contact">
                <ContactScreen />
              </Route>
              <Route path="/">
                <HomeScreen />
              </Route>
            </Switch>
          </Container>
        </body>
        <footer className="fixed-bottom">
          <Container style={{ backgroundColor: '#FFE1D0' }} fluid>
            <Row>


              <Col>
                <Row>
                  <p>
                    Sunshine Nursing Consulting LLC
                  </p>
                </Row>
                <Row>
                  <Col>
                    <p>
                      407-756-0017
                    </p>
                  </Col>
                  <Col>
                    <Link to="/contact">
                      <p>
                        Contact Us!
                      </p>
                    </Link>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row >
                  <p>

                    1106 Doris Street, Altamonte Springs, Fl 32714
                  </p>
                </Row>
                <Row>
                  <p>

                    Email us at: Sunshinenursingconsulting@gmail.com
                  </p>

                </Row>
              </Col>
            </Row>



          </Container>
        </footer>
      </div>
    </Container>
  );
}

export default App;
