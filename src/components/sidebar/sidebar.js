import React, { useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { Offcanvas } from "react-bootstrap";
import MenuIcon from '@mui/icons-material/Menu';
// import routes from "../../routes";
import routes from "../../routes";

function Sidebar() {
    const [show, setShow] = useState(false);
    const routes = routes
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <MenuIcon variant="primary" onClick={handleShow} />
            

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Dropdown Button
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {for item in routes}
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Sidebar;