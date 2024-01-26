'use client';

import axios from 'axios';
// import { NextRequest, NextResponse, userAgent } from 'next/server';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/Table';
import {useVisitorInfo} from "@/hooks/useVisitorInfo";

export default function Home() {
    const ip = useVisitorInfo();

    console.log(ip);

    // const submit = async() => {
    //     try {
    //         console.log('yeah buddy');
    //         await axios.post('http://localhost:3001/addVisit', {
    //             color, wheel, email, address,
    //         })
    //         if (validateEmail(email) && validateAddress(address)) {
    //             setSuccess(true);
    //         }
    //         else {
    //
    //         }
    //     }
    //     catch(e) {
    //         console.log("Error occurred, while trying to submit form: ", e);
    //     }
    //
    // }

  return (
    <main>
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className="font-medium">{ip}</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </main>
  );
}
