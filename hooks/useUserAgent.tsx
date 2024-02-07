'use client'

import {useEffect, useState} from "react";

export const useUserAgent = () => {
    const [userAgent, setUserAgent] = useState<string>("");
    useEffect(() => {
        const ua = window.navigator.userAgent;
        setUserAgent(ua);
    }, []);

    return userAgent;
};