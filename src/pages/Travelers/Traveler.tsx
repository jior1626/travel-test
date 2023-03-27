// Redux
import { useState } from "react";

// Libraries
import { useNavigate } from "react-router-dom";

// Components Library
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import Carousel from 'react-bootstrap/Carousel';

// Components 
import HotelCard from "../../components/HotelCard/HotelCard";
import LandingLayout from "../../components/Layout/Landing/Landing";
import CarouselImg from "../../components/Carousel/Carousels";

// Styles
import "./Traveler.css"


const TravelerView = () => {

    return (
        <>
            <LandingLayout>
                <div className="content">
                    <CarouselImg />
                </div>
                <HotelCard title="Hotel El Dorado" description="jibacdshck" />
                <HotelCard title="Hotel El plateado" description="jibacdshck" />
                <HotelCard title="Hotel El Dorado" description="jibacdshck" />
            </LandingLayout>

        </>
    )
}
export default TravelerView;