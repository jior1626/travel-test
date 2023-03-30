import { Accordion, Button, Col, Form, Row, Tab, Tabs } from "react-bootstrap";

import React, {useState} from "react";
import AddRoom from "../AddRoom/AddRoom";
import DropzoneComponent from "../Dropzone/Dropzone";
import { Hotel } from "../../models";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { hotelsSelector } from "../../redux/states/hotel.slice";

// name?: string;
// address?: string;
// phone?: string;
// city?: string;
// country?: string;
// image?: string;

const AddHotel = () => {

    const [ hotel, setHotel ] = useState<Hotel>({});

    const [files, setAddFiles] = useState<any[]>([]);

    const dispatch = useAppDispatch();

    const {hotels} = useAppSelector(hotelsSelector)

    const saveHotel = (e: any) => {
        e.preventDefault();

        console.log("files", files);
        
    }   

    return (
        <>
            <Form onSubmit={saveHotel}>
                <Tabs
                    defaultActiveKey="basic-hotel"
                    id="fill-tab-example"
                    className="item-menu-hotels m-3 mb-4"
                    justify
                >
                    <Tab eventKey="basic-hotel" title="Información Básica">
                        <Row className="mb-3">
                            <Col md sm lg={6}>
                                <Form.Group controlId="name">
                                    <Form.Label>Nombre del hotel <strong className="text-danger">*</strong></Form.Label>
                                    <Form.Control type="text" name="name" placeholder="Digite el nombre del hotel..." onChange={e => {}} required/>
                                </Form.Group>
                            </Col>
                            <Col md sm lg={6}>
                                <Form.Group controlId="address">
                                    <Form.Label>Dirección del hotel <strong className="text-danger">*</strong></Form.Label>
                                    <Form.Control type="text" name="address" placeholder="Digite la dirección del hotel..." onChange={e => {}} required/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col md sm lg={6}>
                                <Form.Group controlId="phone">
                                    <Form.Label>Telefonó del hotel <strong className="text-danger">*</strong></Form.Label>
                                    <Form.Control type="text" name="phone" placeholder="Digite el telefonó del hotel..." onChange={e => {}} required/>
                                </Form.Group>
                            </Col>
                            <Col md sm lg={3}>
                                <Form.Group controlId="country">
                                    <Form.Label>Pais del hotel <strong className="text-danger">*</strong></Form.Label>
                                    <Form.Control type="text" name="country" placeholder="Digite el pais..." onChange={e => {}} required/>
                                </Form.Group>
                            </Col>
                            <Col md sm lg={3}>
                                <Form.Group controlId="city">
                                    <Form.Label>Ciudad del hotel <strong className="text-danger">*</strong></Form.Label>
                                    <Form.Control type="text" name="city" placeholder="Digite la ciudad..." onChange={e => {}} required/>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Tab>

                    <Tab eventKey="images-hotel" title="Imágenes">
                        <DropzoneComponent setAddFiles={setAddFiles}/>
                    </Tab>
                </Tabs>

                <Row className="mt-5">
                    <Col sm lg={12} className="d-grid gap-2">
                        <Button size="lg" variant="primary" type="submit">
                            Registrar
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default AddHotel;