import React, {useState} from "react";

import { Card, Form, Row, Col, Button } from "react-bootstrap";
import AddHotel from "../../../components/AddHotel/AddHotel";
import Layout from "../../../components/Layout/Layout";
import ListHotels from "../../../components/ListHotels/ListHotels";
import { Hotel } from "../../../models";

// Styles
import "./HotelManagement.css";

const HotelManagementView = () =>{


    const [isShowCreate, setIsShowCreate] = useState(false)

    const [editHotel, setEditHotel] = useState<Hotel>({});
 
    return (
        <>
            <Layout>
                <Row>
                    <Col sm lg={12}>
                        <Card>
                            <Card.Header as="div" className="align-header-content">
                                <h5>
                                    {
                                        isShowCreate ?
                                            <span className="bi bi-building-fill-gear mr-1"> Crear Hotel</span>
                                        
                                        :
                                            <span className="bi bi-building-fill-gear mr-1"> Listado De Hoteles</span> 
                                    } 
                                </h5>
                                <div className="pull-right">
                                    {
                                        isShowCreate ?
                                            <Button variant="secondary" onClick={() => setIsShowCreate(false)}>
                                                <span className="bi bi-plus-circle-fill"> Listar Hoteles</span>
                                            </Button>
                                        :
                                            <Button variant="success" onClick={() => setIsShowCreate(true)}>
                                                <span className="bi bi-plus-circle-fill"> Crear Hotel</span>
                                            </Button>
                                    }
                                </div>
                            </Card.Header>
                            <Card.Body className="p-5">
                                {
                                    isShowCreate 
                                        ? <AddHotel />
                                        : <ListHotels />
                                }
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Layout>
        </>
    )
}
export default HotelManagementView;