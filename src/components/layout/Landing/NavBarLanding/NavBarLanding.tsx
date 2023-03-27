// Libraries
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate, NavLink } from "react-router-dom";
import { useAppDispatch } from "../../../../redux/hooks";


// Styles
import "./NavBarLanding.css";

const NavBarLanding = () => {
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const login = () => {
        navigate('/auth/login')
    }

    return (
        <Navbar className="navbar" expand="lg">
            <Container  fluid >
                <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
                    {/* <Button
                        variant="dark"
                        className="d-lg-none btn-fill d-flex justify-content-center align-items-center rounded-circle p-2"
                        onClick={() => {}}
                    >
                        <i className="fas fa-ellipsis-v"></i>
                    </Button> */}
                    <Navbar.Brand
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="mr-2"
                    >
                        {/* <img src={Logo} alt="Logo Travel" width={90} /> */}
                        
                    </Navbar.Brand>
                </div>
            
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2">
                    <span className="navbar-toggler-bar burger-lines"></span>
                    <span className="navbar-toggler-bar burger-lines"></span>
                    <span className="navbar-toggler-bar burger-lines"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="nav" navbar>
                        <Nav.Item>
                            <NavLink
                                className="m-0"
                                to="/hotels"
                            >
                                <span className="bi bi-building-fill-up mr-1">Hoteles</span>
                            </NavLink>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav className="nav" navbar>
                        <Nav.Item>
                            <Nav.Link
                                className="m-0"
                                onClick={() => login()}
                            >
                                <span className="no-icon">Login</span>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>  
    )
}

export default NavBarLanding;