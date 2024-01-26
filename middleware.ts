import {NextFetchEvent, NextRequest, NextResponse, userAgent} from "next/server";

export async function middleware(request: NextRequest, _next: NextFetchEvent) {
    const res = NextResponse.next();
    const realIP = request.ip ?? request.headers.get('x-real-ip');
    const ip = (realIP) ?? (request.headers.get('x-forwarded-for'));
    const {browser, device, os} = userAgent(request);
    try {
        console.log(request.nextUrl.pathname);
        console.log('yeah buddy');
        await fetch('http://localhost:3001/addVisit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ip: String(ip),
                browser: String(browser.name),
                os: String(os.name),
                device: String(device.model)
            })
        });
    } catch (e) {
        console.log("Error occurred while trying to submit form: ", e);
    }

    if (ip) {
        res.cookies.set("user-ip", ip, {
            httpOnly: false
        });
    }

    return res;
}


export const config = {
    // The above middleware would only run for the "/" path
    matcher: '/',
}