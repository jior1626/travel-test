import { useEffect, useState } from "react";
import { Button, OverlayTrigger, Table, Tooltip } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import { hotels } from "../../data/hotel";
import { Hotel, Room } from "../../models";

interface ListRoomsInterface {
    props: Room[]
}

const ListRooms = () => {

    const params = useParams();

    const navigate = useNavigate();

    const [hotel, setHotel] = useState<Hotel>({});

    const [rooms, setRooms] = useState<Room[]>([]);

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

    const editRoom = (item:  any) => {

    }

    const deleteRoom = (item: any) => {

    }

    return (
        <>
            <Table striped hover size="sm">
                <thead>
                    <tr className="text-center">
                        <th>#</th>
                        <th>Number Room</th>
                        <th>Description</th>
                        <th>Type</th>
                        <th>Price</th>
                        <th>Tax</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {rooms.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td className="text-center">{item.id}</td>
                                <td>{item.numberRoom}</td>
                                <td className="text-right">{item.description}</td>
                                <td className="text-center">{item.type}</td>
                                <td className="text-center">{item.price}</td>
                                <td className="text-center">{item.tax}</td>
                                <td className="d-flex justify-content-around">
                                    <Button size="sm" variant="primary" onClick={() => editRoom(item)}>
                                        <span className="bi bi-pencil-fill"></span>
                                    </Button>
                                    <Button size="sm" variant="danger" onClick={() => deleteRoom(Number(item.id ? item.id : 0))}>
                                        <span className="bi bi-trash-fill"></span>
                                    </Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
}

export default ListRooms;