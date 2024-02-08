import {useEffect, useState} from "react";

export const useVisitorInfo = () => {
    const [ip, setUserIp] = useState<string>("");
    useEffect(() => {
        const userIp = fetch('http://api.ipify.org/?format=json', {mode: 'no-cors'})
            .then(result => setUserIp(result.json().ip))
            .catch(res => console.log('Error: ', res));

    }, []);

    return ip;
};