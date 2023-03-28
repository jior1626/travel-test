import { Card, Col, Image, Row } from "react-bootstrap";
import { Hotel } from "../../models";

interface HotelInterface {
    data: Hotel
}

const InfoHotel: React.FC<HotelInterface> = ({data}) => {
    return (
        <>
            <Card border="primary" style={{ width: '18rem' }}>
                {/* <Card.Header as="div" className="align-header-content">
                    <h5><span className="bi bi-building-fill-up mr-1">Información Del Hotel</span></h5>
                </Card.Header> */}
                <Card.Img variant="top" src={data.image} />
                <Card.Body className="p-3">

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