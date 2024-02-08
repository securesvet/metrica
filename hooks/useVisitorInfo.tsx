import {useEffect, useState} from "react";
import axios from "axios";

export const useVisitorInfo = () => {
    const [ipAddress, setIPAddress] = useState('')

    useEffect(() => {
        fetch('https://geolocation-db.com/json/')
            .then(response => response.json())
            .then(data => setIPAddress(data['IPv4']))
            .catch(error => console.log(error))
    }, []);

    return ipAddress;
};