import { Table, Row, Col, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import "./ListHotels.css";

// import hotels from "./../../data/hotel";

import { getHotels, deleteHotelById, hotelsSelector } from "./../../redux/states/hotel.slice";
import { useEffect } from "react";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const ListHotels = () => {

    const navigate = useNavigate();

    const { hotels } = useAppSelector(hotelsSelector);

    const dispatch = useAppDispatch();

    const MySwal = withReactContent(Swal)

    const listHotels = () => {
        dispatch(getHotels(true))
    }

    useEffect(() => {
        listHotels();
    }, [])

    const editHotel = (item:  any) => {

    }

    const deleteHotel = async (itemId: number) => {
        
        MySwal.fire({
            title: 'Estas seguro de borrar este hotel?',
            // showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Borrar Registro',
            // denyButtonText: `Don't save`,
            allowOutsideClick: false,
        }).then(async (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                await dispatch(deleteHotelById(itemId))
                MySwal.fire('Borrado Correctamente!', '', 'success')
            }
        })
    }

    const seeRooms = (hotelId: any) => {
        navigate("/hotel/"+hotelId+"/rooms");
    }

    return (
        <>
            <Table striped hover responsive size="sm">
                <thead>
                    <tr className="text-center">
                        <th>#</th>
                        <th>Name Hotel</th>
                        <th>Phone</th>
                        <th>Country/City</th>
                        <th>Address</th>
                        <th>Habitaciones</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {hotels.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td className="text-center">{item.id}</td>
                                <td>{item.name}</td>
                                <td className="text-right">{item.phone}</td>
                                <td className="text-center">{item.country} - {item.city}</td>
                                <td>{item.address}</td>
                                <td className="text-center">
                                    <OverlayTrigger
                                        key={"tooltip-"+index+item.id}
                                        placement={"left"}
                                        overlay={
                                            <Tooltip id={`tooltip-${index}`}>
                                                Ver <strong>Habitaciones</strong>.
                                            </Tooltip>
                                        }
                                    >
                                        <a href="#" onClick={() => seeRooms(item.id)} title={"Ver Habitaciones"}>
                                            {item.rooms?.length}
                                        </a>
                                        {/* <Button variant="secondary">{item.bedrooms?.length}</Button> */}
                                    </OverlayTrigger>
                                    
                                </td>
                                <td className="d-flex justify-content-around">
                                    <Button size="sm" variant="primary" onClick={() => editHotel(item)}>
                                        <span className="bi bi-pencil-fill"></span>
                                    </Button>
                                    <Button size="sm" variant="danger" onClick={() => deleteHotel(Number(item.id ? item.id : 0))}>
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

export default ListHotels;