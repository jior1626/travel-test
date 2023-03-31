import { Accordion, Button, Col, Form, Row, Tab, Tabs } from "react-bootstrap";

import React, {useState, useCallback} from "react";
import AddRoom from "../AddRoom/AddRoom";
import DropzoneComponent from "../Dropzone/Dropzone";
import { Hotel } from "../../models";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addHotel, hotelsSelector } from "../../redux/states/hotel.slice";


import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { generateIdToData } from "../../utilities/helpers";
import { Images } from "../../models/images";


const AddHotel = () => {

    const MySwal = withReactContent(Swal)

    const [ hotel, setHotel ] = useState<Hotel>({});

    const [ name, setName ] = useState("");

    const [ address, setAddress ] = useState("");

    const [ phone, setPhone ] = useState("");

    const [ city, setCity ] = useState("");

    const [ country, setCountry ] = useState("");

    const [files, setAddFiles] = useState<any[]>([]);

    const [showBtnCreate, setShowBtnCreate] = useState(true)

    const { hotelCreated } = useAppSelector(hotelsSelector);

    const dispatch = useAppDispatch();

    const saveHotel = async (e: any) => {
        e.preventDefault();

        if (name == "") {
            showAlert("error", 'Oops...', "¡El nombre es requerido!")
        }
        if (address == "") {
            showAlert("error", 'Oops...', "¡La dirección es requerida!")
        }
        if (phone == "") {
            showAlert("error", 'Oops...', "¡El telefonó es requerido!")
        }
        if (city == "") {
            showAlert("error", 'Oops...', "¡La ciudad es requerida!")
        }
        if (country == "") {
            showAlert("error", 'Oops...', "¡El pais es requerido!")
        }

        if(files.length == 0) {
            showAlert("error", 'Oops...', "¡Debe agregar mínimo una imagen!")
        }

        let images: Images[] = [];

        files.map(item => {
            images = [...images, {
                preview: item.base64 ? item.base64 : item.preview,
                name: item.name
            }]
        });

        const newData: Hotel = {
            id: generateIdToData("hotel"),
            name: name,
            address: address,
            phone: phone,
            city: city,
            country: country,
            images: images
        }

        await dispatch(addHotel(newData));
        
        if(hotelCreated) {
            await showAlert("success", "¡Guardado!", "Hotel creado correctamente.")
        }  
    }
    
    const showAlert = (type: any, title: string, message: string) => {
        MySwal.fire({
            icon: type,
            title: title,
            text: message,
        })
    }

    // useCallback(() => {
    //     showAlert("success", "Guardado", "¡Hotel creado correctamente!")
    // }, [hotelCreated]);

    return (
        <>
            <Form onSubmit={saveHotel}>
                <Tabs
                    defaultActiveKey="basic-hotel"
                    id="fill-tab-example"
                    className="item-menu-hotels m-3 mb-4"
                    justify
                    onSelect={(key) => (key == "images-hotel") ? setShowBtnCreate(false): setShowBtnCreate(true)}
                >
                    <Tab eventKey="basic-hotel" title="Información Básica">
                        <Row className="mb-3">
                            <Col md sm lg={6}>
                                <Form.Group controlId="name">
                                    <Form.Label>Nombre del hotel <strong className="text-danger">*</strong></Form.Label>
                                    <Form.Control type="text" name="name" placeholder="Digite el nombre del hotel..." onChange={e => setName(e.target.value)} required/>
                                </Form.Group>
                            </Col>
                            <Col md sm lg={6}>
                                <Form.Group controlId="address">
                                    <Form.Label>Dirección del hotel <strong className="text-danger">*</strong></Form.Label>
                                    <Form.Control type="text" name="address" placeholder="Digite la dirección del hotel..." onChange={e => setAddress(e.target.value)} required/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col md sm lg={6}>
                                <Form.Group controlId="phone">
                                    <Form.Label>Telefonó del hotel <strong className="text-danger">*</strong></Form.Label>
                                    <Form.Control type="text" name="phone" placeholder="Digite el telefonó del hotel..." onChange={e => setPhone(e.target.value)} required/>
                                </Form.Group>
                            </Col>
                            <Col md sm lg={3}>
                                <Form.Group controlId="country">
                                    <Form.Label>Pais del hotel <strong className="text-danger">*</strong></Form.Label>
                                    <Form.Control type="text" name="country" placeholder="Digite el pais..." onChange={e => setCountry(e.target.value)} required/>
                                </Form.Group>
                            </Col>
                            <Col md sm lg={3}>
                                <Form.Group controlId="city">
                                    <Form.Label>Ciudad del hotel <strong className="text-danger">*</strong></Form.Label>
                                    <Form.Control type="text" name="city" placeholder="Digite la ciudad..." onChange={e => setCity(e.target.value)} required/>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Tab>

                    <Tab eventKey="images-hotel" title="Imágenes">
                        <DropzoneComponent setAddFiles={setAddFiles}/>
                    </Tab>
                </Tabs>
                {
                    showBtnCreate ?
                        <Row className="mt-5">
                            <Col sm lg={12} className="d-grid gap-2">
                                <Button size="lg" variant="primary" type="submit">
                                    Registrar
                                </Button>
                            </Col>
                        </Row>
                    : null
                }
            </Form>
        </>
    )
}

export default AddHotel;