import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const { serviceId } = useParams();
    const [serviceDetails, setServiceDetails] = useState([]);
    const [singleService, setSingleService] = useState({});
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServiceDetails(data))
    }, [])
    useEffect(() => {
        const findService = serviceDetails.find(singleService => singleService.id === parseInt(serviceId));

        setSingleService(findService)
    }, [serviceDetails])


    return (
        <div className="mt-5 py-5 ">
            <div >
                <h1 className="mt-5">This is Service {serviceId}</h1>
                <img src={singleService?.img} alt="" />
                <h5>{singleService?.name}</h5>
                <h6>{singleService?.price}</h6>
                <p>{singleService?.description}</p>


            </div>


        </div>
    );
};

export default Booking;