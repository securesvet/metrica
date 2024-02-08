import { useEffect, useState } from "react";

type visitorInfoType = {
    countryCode: string,
    countryName: string,
    city: string,
    postal: string | number | undefined,
    latitude: string | number | undefined,
    longitude: string | number | undefined,
    ipAddress: string,
    state: string
};

export const useVisitorInfo = () => {
    const [visitorInfo, setVisitorInfo] = useState<visitorInfoType>({
        countryCode: '',
        countryName: '',
        city: '',
        postal: undefined,
        latitude: undefined,
        longitude: undefined,
        ipAddress: '',
        state: ''
    });

    useEffect(() => {
        fetch('https://geolocation-db.com/json/')
            .then(response => response.json())
            .then(data => {
                const updatedData = {
                    ...data,
                    ipAddress: data["IPv4"],
                    countryCode: data["country_code"],
                    countryName: data["country_name"]
                };
                delete updatedData["IPv4"];
                delete updatedData["country_code"];
                delete updatedData["country_name"];
                setVisitorInfo(updatedData);
            })
            .catch(error => console.log(error))
    }, []);

    return { ...visitorInfo };
};
