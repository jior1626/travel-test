import React, { useState } from "react";
import { Button, Card, Col, Form, Row, Tab, Tabs, ToggleButtonGroup  } from "react-bootstrap";
import { Hotel } from "../../models";
import DropzoneComponent from "../Dropzone/Dropzone";

// import ToggleButton from 'react-bootstrap/ToggleButton'

// Styles
import "./AddRoom.css";

interface AddRoomInterface {
    data: Hotel
}

const AddRoom: React.FC<AddRoomInterface> = ({data}) => {

    const [numberRoom, setNumberRoom] = useState("");

    const [typeRoom, setTypeRoom] = useState("");

    const [description, setDescription] = useState("");

    const [beds, setBeds] = useState("");

    const [bathrooms, setBathrooms] = useState("");

    const [sizeRoom, setSizeRoom] = useState("");

    const [price, setPrice] = useState("");

    const [tax, setTax] = useState("");

    const [wifi, setWifi] = useState(false);

    const [bathtub, setBathtub] = useState(false);

    const [addFiles, setAddFiles] = useState<any[]>([]);


    const SaveRoom = (e: any) => {
        e.preventDefault();

    }

    return (
        <Form onSubmit={SaveRoom}>

            <Tabs
                defaultActiveKey="basic"
                id="fill-tab-example"
                className="item-menu-hotels mt-2 mb-4"
                justify
            >
                <Tab eventKey="basic" title="Información Básica">
                    <Row>
                        <Col sm lg={6}>
                            <Form.Group className="mb-3" controlId="numberRoom">
                                <Form.Label># de habitación<strong className="text-danger">*</strong></Form.Label>
                                <Form.Control type="text" name="numberRoom" placeholder="Ingrese el numero de la habitación" onChange={e => setNumberRoom(e.target.value)} autoComplete="off" required/>
                            </Form.Group>
                        </Col>
                        <Col sm lg={6}>
                            <Form.Group className="mb-3" controlId="type">
                                <Form.Label>Tipo de habitación <strong className="text-danger">*</strong></Form.Label>
                                <Form.Select name="type" onChange={e => setTypeRoom(e.target.value)}>
                                    <option value={""}>Select option...</option>
                                    <option value={"Simple"}>Sencilla</option>
                                    <option value={"SimpleX2"}>Sencilla Doble</option>
                                    <option value={"Special"}>Especial</option>
                                    <option value={"SpecialX2"}>Especial Doble</option>
                                    <option value={"DeluxeX2"}>Deluxe Doble</option>
                                    <option value={"DeluxeX3"}>Deluxe Triple</option>
                                </Form.Select>
                            </Form.Group>
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col sm lg={12}>
                            <Form.Group className="mb-3" controlId="description">
                                <Form.Label>Descripción <strong className="text-danger">*</strong></Form.Label>
                                <Form.Control type="text" name="description" placeholder="Ingrese la descripción de la habitación" onChange={e => setDescription(e.target.value)} autoComplete="off"  required/>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm lg={3}>
                            <Form.Group className="mb-3" controlId="bathrooms">
                                <Form.Label>Numero de Baños <strong className="text-danger">*</strong></Form.Label>
                                <Form.Control type="number" min={0} name="bathrooms" placeholder="Cant. de baños" onChange={e => setDescription(e.target.value)} autoComplete="off" required/>
                            </Form.Group>
                        </Col>

                        <Col sm lg={3}>
                            <Form.Group className="mb-3" controlId="beds">
                                <Form.Label>Numero de Camas <strong className="text-danger">*</strong></Form.Label>
                                <Form.Control type="number" min={0} name="beds" placeholder="Cant. de camas" onChange={e => setDescription(e.target.value)} autoComplete="off" required/>
                            </Form.Group>
                        </Col>

                        <Col sm lg={6}>
                            <Form.Group className="mb-3" controlId="sizeRoom">
                                <Form.Label>Tamaño de la Habitacion <strong className="text-danger">*</strong></Form.Label>
                                <Form.Control type="text" name="sizeRoom"  placeholder="Ingrese el tamaño de la habitación" onChange={e => setDescription(e.target.value)} autoComplete="off" required/>
                            </Form.Group>
                        </Col>

                    </Row>

                    <Row>
                        <Col sm lg={3}>
                            <Form.Group className="mb-3" controlId="price">
                                <Form.Label>Precio <strong className="text-danger">*</strong></Form.Label>
                                <Form.Control type="number" name="price" min={0} placeholder="Digite un valor..." onChange={e => setDescription(e.target.value)} autoComplete="off" required/>
                            </Form.Group>
                        </Col>

                        <Col sm lg={3}>
                            <Form.Group className="mb-3" controlId="tax">
                                <Form.Label>Impuestos <strong className="text-danger">*</strong></Form.Label>
                                <Form.Control type="number" name="tax" min={0} placeholder="Digite un valor..." onChange={e => setDescription(e.target.value)} autoComplete="off" required/>
                            </Form.Group>
                        </Col>

                        <Col sm lg={3}>
                            <Form.Group className="mt-4">
                                <Form.Check 
                                    className="form-size-switch"
                                    type="switch"
                                    id="wifi-switch"
                                    label="Wifi"
                                    onChange={() => setWifi(!wifi)}
                                />
                            </Form.Group>
                        </Col>

                        <Col sm lg={3}>
                            <Form.Group className="mt-4">
                                <Form.Check 
                                    className="form-size-switch"
                                    type="switch"
                                    id="bathtub-switch"
                                    label="Bañera"
                                    onChange={() => setBathtub(!bathtub)}
                                />
                            </Form.Group>
                        </Col>

                    </Row>

                    <Row className="mt-4">
                        <Col sm lg={12} className="d-grid gap-2">
                            <Button size="lg" variant="primary" type="submit">
                                Registrar
                            </Button>
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="images" title="Imágenes">
                    <Row>
                        <Col lg={12}>
                            <DropzoneComponent setAddFiles={() => setAddFiles}/>
                        </Col>
                    </Row>
                   
                </Tab>
            </Tabs>
           
        </Form>
    )
}

export default AddRoom;