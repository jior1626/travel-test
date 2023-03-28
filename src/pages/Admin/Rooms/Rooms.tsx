import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import AddRoom from "../../../components/AddRoom/AddRoom";
import InfoHotel from "../../../components/InfoHotel/InfoHotel";
import Layout from "../../../components/Layout/Layout";
import ListRooms from "../../../components/ListRooms/ListsRooms";
import { hotels } from "../../../data/hotel";
import { Hotel, Room } from "../../../models";

const RoomsView = () => {

    const params = useParams();

    const navigate = useNavigate();

    const [hotel, setHotel] = useState<Hotel>({});

    const [rooms, setRooms] = useState<Room[]>([]);

    const [showList, setShowList] = useState(true);

    const getRooms = () => {
        if(!params.id) {
            navigate("/hotel");
        } else {
            const hotelFind = hotels.find(item => item.id == params.id);
            setHotel(hotelFind ? hotelFind : {});
            setRooms(hotelFind?.rooms ? hotelFind?.rooms : []);
        }
    }

    useEffect(() => {
        getRooms();
    }, [])

    return (
        <>
            <Layout>
                <Row className="mb-5">
                    <Col sm lg={12}>
                        <h2>
                            <span className="bi bi-building-fill-up">  Información Hotel / Habitaciones</span>
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Col sm lg={4}>
                        <InfoHotel data={hotel} />
                    </Col>
                    <Col sm lg={8}>
                        <Card>
                            <Card.Header as="div" className="align-header-content">
                                <h5>
                                    {
                                        showList ? 
                                            <span className="bi bi-columns mr-1"> Habitaciones</span>
                                        :   
                                            <span className="bi bi-columns mr-1"> Crear Habitación</span>
                                    }
                                </h5>
                                <div className="pull-right">
                                    {
                                        showList ? 
                                            <Button variant="success" onClick={() => setShowList(false)}>
                                                <span className="bi bi-plus-circle-fill"> Nueva</span>
                                            </Button>   
                                        :
                                            <Button variant="secondary" onClick={() => setShowList(true)}>
                                                <span className="bi bi-box-arrow-in-left"> Listar Habitaciones</span>
                                            </Button>   
                                    }
                                </div>
                            </Card.Header>
                            <Card.Body className="p-3">
                                {showList ? 
                                 <ListRooms data={rooms} /> : <AddRoom />
                                }
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
               
            </Layout>
        </>
    )
}

export default RoomsView;