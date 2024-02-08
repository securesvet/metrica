'use client';

import {useVisitorInfo} from "@/hooks/useVisitorInfo";
import {QueryClient, QueryClientProvider, useQuery} from 'react-query';
import {useUserAgent} from "@/hooks/useUserAgent";

interface VisitData {
    _id: string,
    ip: string,
    browser: string,
    os: string,
    device: string,
    __v: number
}

const queryClient = new QueryClient();

export default function Home() {
    const ip = useVisitorInfo();

    const ua = useUserAgent();

    return (
        <>
            <h1>Your useragent is {ua}</h1>
            <h1>IP {ip}</h1>
        </>
    );
}
