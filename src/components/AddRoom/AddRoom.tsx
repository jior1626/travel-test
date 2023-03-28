import { Button, Col, Form, Row } from "react-bootstrap";


const AddRoom = () => {
    return (
        <Form>
            <Row>
                <Col sm lg={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label># de habitación<strong className="text-danger">*</strong></Form.Label>
                        <Form.Control type="text" required placeholder="Ingrese el numero de la habitación" onChange={e => {}} />
                    </Form.Group>
                </Col>
                <Col sm lg={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Tipo de habitación <strong className="text-danger">*</strong></Form.Label>
                        <Form.Select>
                            <option value={""}>Select option...</option>
                            <option value={"Simple"}>Sencilla</option>
                            <option value={"Simple"}>Sencilla Doble</option>
                            <option value={"Simple"}>Especial</option>
                            <option value={"Simple"}>Especial Doble</option>
                            <option value={"Simple"}>Deluxe Doble</option>
                            <option value={"Simple"}>Deluxe Triple</option>
                        </Form.Select>
                    </Form.Group>
                    
                </Col>
            </Row>
            <Row>
                <Col sm lg={12}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Descripción <strong className="text-danger">*</strong></Form.Label>
                        <Form.Control type="text" required placeholder="Ingrese la descripción de la habitación" onChange={e => {}} />
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col sm lg={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Tamaño de la Habitacion <strong className="text-danger">*</strong></Form.Label>
                        <Form.Control type="number" required placeholder="Ingrese el precio de la habitación" onChange={e => {}} />
                    </Form.Group>
                </Col>

                <Col sm lg={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Numero de Camas <strong className="text-danger">*</strong></Form.Label>
                        <Form.Control type="number" required placeholder="Ingrese el impuesto de la habitación" onChange={e => {}} />
                    </Form.Group>
                </Col>

            </Row>

            <Row>
                <Col sm lg={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Precio <strong className="text-danger">*</strong></Form.Label>
                        <Form.Control type="number" required placeholder="Ingrese el precio de la habitación" onChange={e => {}} />
                    </Form.Group>
                </Col>

                <Col sm lg={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Impuestos <strong className="text-danger">*</strong></Form.Label>
                        <Form.Control type="number" required placeholder="Ingrese el impuesto de la habitación" onChange={e => {}} />
                    </Form.Group>
                </Col>

            </Row>

            <Row className="mt-3">
                <Col sm lg={3}>
                    <Form.Group className="mb-3">
                        <Form.Check
                            type="checkbox"
                            id="wifi"
                            label="Wifi"
                        />
                    </Form.Group>
                </Col>

                <Col sm lg={3}>
                    <Form.Group className="mb-3">
                        <Form.Check
                            type="checkbox"
                            id="bañera"
                            label="Bañera"
                        />
                    </Form.Group>
                </Col>

            </Row>
           
           
            
           
            

            <div className="row">
                <div className="col-md-12 d-grid gap-2">
                    <Button size="lg" variant="primary" type="submit">
                        Registrar
                    </Button>
                </div>
            </div>
        </Form>
    )
}

export default AddRoom;