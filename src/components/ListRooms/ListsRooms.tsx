import { useEffect, useState } from "react";
import { Button, Card, OverlayTrigger, Table, Tooltip } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import { hotels } from "../../data/hotel";
import { Hotel, Room } from "../../models";

interface ListRoomsInterface {
    data: Room[]
}

const ListRooms: React.FC<ListRoomsInterface> = ({data}) => {

   
    const editRoom = (item:  any) => {

    }

    const deleteRoom = (item: any) => {

    }

    return (
        <>
            <Table striped hover size="sm">
                <thead>
                    <tr className="text-center">
                        <th>Number</th>
                        <th>Description</th>
                        <th>Type</th>
                        <th>Price</th>
                        <th>Tax</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td className="text-center">{item.numberRoom}</td>
                                <td>{item.description}</td>
                                <td>{item.type}</td>
                                <td className="text-right">{item.price}</td>
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