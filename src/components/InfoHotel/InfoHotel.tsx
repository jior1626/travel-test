import { Card, Carousel, Col, Image, Row } from "react-bootstrap";
import { Hotel } from "../../models";

interface HotelInterface {
    data: Hotel
}

const InfoHotel: React.FC<HotelInterface> = ({data}) => {
    return (
        <>
            <Card border="primary" style={{ width: '18rem' }}>
                <Card.Body className="p-3">

                    <Carousel className="mb-4">
                        { data.images?.map(image => {
                            return (
                                <Carousel.Item interval={1000}>
                                    <img
                                        className="d-block w-100"
                                        src={image.preview}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>

                    <Card.Title className="mb-3" as="h4"><strong>{data.name}</strong></Card.Title>

                    <Card.Text as="h6">
                        <span className="bi bi-globe-americas"> {data.country} - {data.city}</span>
                    </Card.Text>
                    <Card.Text as="h6">
                        <span className="bi bi-geo-alt"> {data.address}</span> 
                    </Card.Text>
                    <Card.Text as="h6">
                        <span className="bi bi-telephone-inbound"> {data.phone}</span>
                    </Card.Text>
                
                </Card.Body>
            </Card>
        </>
    )
} 

export default InfoHotel;