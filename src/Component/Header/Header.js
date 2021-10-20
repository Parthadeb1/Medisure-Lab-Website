import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Home from "../Home/Home";
import Service from "../Services/Services/Service";
import Doctors from "../Doctors/Doctors";

const Header = () => {
  const element1 = <FontAwesomeIcon icon={faUser} />;
  const { user, logOut, name } = useAuth();
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Link to="/home">
            {" "}
            <Navbar.Brand className="fs-3 fw-bold">
              Medi<span className="text-danger">Health</span>{" "}
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link className="fs-6 fw-bold text-white" as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link
              className="fs-6 fw-bold text-white"
              as={Link}
              to="/services"
            >
              Services
            </Nav.Link>
            <Nav.Link
              className="fs-6 fw-bold text-white"
              as={Link}
              to="/doctors"
            >
              Doctors
            </Nav.Link>
            <Nav.Link
              className="fs-6 fw-bold text-white"
              as={Link}
              to="/aboutus"
            >
              About Us
            </Nav.Link>
            {user.email ? (
              <button
                onClick={logOut}
                type="button"
                className="btn btn-danger fw-normal"
              >
                SignOut
              </button>
            ) : (
              <Nav.Link
                className="fs-6 fw-bold text-white"
                as={Link}
                to="/signin"
              >
                SignIn
              </Nav.Link>
            )}

            <Navbar.Text className="p-2">
              <span className="text-info">{element1} </span>
              <span>
                {(user && <span>{user.displayName}</span>) || (
                  <span>{user?.name}</span>
                )}
              </span>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
