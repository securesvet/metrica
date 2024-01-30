'use client';

import {useVisitorInfo} from "@/hooks/useVisitorInfo";

interface VisitData {
    _id: string,
    ip: string,
    browser: string,
    os: string,
    device: string,
    __v: number
}

export default function Home() {
    const ip = useVisitorInfo();

    return (
        <main>
            {ip}

        </main>
    );
}
