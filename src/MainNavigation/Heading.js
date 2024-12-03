import { Badge, Button, Container, Nav, Navbar } from "react-bootstrap";
import classes from "./Heading.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Heading(props) {
  let cart = useSelector((state) => state.cart.cart);
  let totalV = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <Navbar data-bs-theme="dark" className={classes.box}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          Winter Shop
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Welcome
          </Nav.Link>
          <Nav.Link as={Link} to="/shop">
            Products
          </Nav.Link>
        </Nav>
        <Button variant="light" onClick={props.show}>
          Cart <Badge bg="danger">{totalV}</Badge>
        </Button>
      </Container>
    </Navbar>
  );
}

export default Heading;
