import React, {useState} from "react";

import { Card, Form, Row, Col, Button } from "react-bootstrap";
import Layout from "../../../components/Layout/Layout";
import ListHotels from "../../../components/ListHotels/ListHotels";

// Styles
import "./HotelManagement.css";

const HotelManagementView = () =>{
 
    return (
        <>
            <Layout>
                <Row>
                    <Col sm lg={12}>
                        <Card>
                            <Card.Header as="div" className="align-header-content">
                                <h5><span className="bi bi-building-fill-gear mr-1"> Listado De Hoteles</span></h5>
                                <div className="pull-right">
                                    <Button variant="success">
                                        <span className="bi bi-plus-circle-fill"> Crear Hotel</span>
                                    </Button>
                                </div>
                            </Card.Header>
                            <Card.Body className="p-5">
                                <ListHotels />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Layout>
        </>
    )
}
export default HotelManagementView;