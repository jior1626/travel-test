import { Col, Form, Row, Tab, Tabs } from "react-bootstrap";

import React, {useState} from "react";
import AddRoom from "../AddRoom/AddRoom";

// name?: string;
// address?: string;
// phone?: string;
// city?: string;
// country?: string;
// image?: string;

const AddHotel = () => {

    const [ hotel, setHotel ] = useState({})

    return (
        <>
            <Form>
                <Tabs
                    defaultActiveKey="basic"
                    transition={true}
                    id="noanim-tab-example"
                    className="item-menu-hotels mt-2 mb-4"
                    justify
                >
                    <Tab eventKey="basic" title="Información Básica">
                        <Row>
                            
                            <Col lg={8}>
                                <Row className="mb-3">
                                    <Col md sm lg={6}>
                                        <Form.Group>
                                            <Form.Label>Nombre del hotel <strong className="text-danger">*</strong></Form.Label>
                                            <Form.Control type="text" placeholder="Digite el nombre del hotel..." onChange={e => {}} autoComplete="off" required/>
                                        </Form.Group>
                                    </Col>
                                    <Col md sm lg={6}>
                                        <Form.Group>
                                            <Form.Label>Dirección del hotel <strong className="text-danger">*</strong></Form.Label>
                                            <Form.Control type="text" placeholder="Digite la dirección del hotel..." onChange={e => {}} autoComplete="off" required/>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col md sm lg={6}>
                                        <Form.Group>
                                            <Form.Label>Telefonó del hotel <strong className="text-danger">*</strong></Form.Label>
                                            <Form.Control type="text" placeholder="Digite el telefonó del hotel..." onChange={e => {}} autoComplete="off" required/>
                                        </Form.Group>
                                    </Col>
                                    <Col md sm lg={6}>
                                        <Form.Group>
                                            <Form.Label>Ciudad del hotel <strong className="text-danger">*</strong></Form.Label>
                                            <Form.Control type="text" placeholder="Digite la ciudad del hotel..." onChange={e => {}} autoComplete="off" required/>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={4}>
                                
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="rooms" title="Habitaciones">
                        <AddRoom data={hotel} />
                    </Tab>
                   
                </Tabs>
            </Form>
        </>
    )
}

export default AddHotel;