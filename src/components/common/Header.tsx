import { Container, Nav, Navbar } from 'react-bootstrap';
import { BiPhoneCall } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import { FaMobileAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="header_component">
      <div className="top-header">
        <Container className="d-flex justify-content-between">
          <ul className="list-unstyled  d-flex">
            <li>
              <BiPhoneCall />
              <a href="tell:1234567890">1234567890</a>
            </li>
            <li>
              <AiOutlineMail />
              <a href="mail-to:support@daily-bazar.com">
                support@daily-bazar.com
              </a>
            </li>
          </ul>
          <div className="app">
            <FaMobileAlt />
            save big on your app
          </div>
        </Container>
      </div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
