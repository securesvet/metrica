'use client';

import {useVisitorInfo} from "@/hooks/useVisitorInfo";
import {useUserAgent} from "@/hooks/useUserAgent";

export default function Home() {
    const {ipAddress, countryCode} = useVisitorInfo();

    const ua = useUserAgent();

    return (
        <>
            <h1>Your useragent is {ua}</h1>
            <h1>IP {ipAddress}</h1>
            <h1>Country Code: {countryCode}</h1>
        </>
    );
}
