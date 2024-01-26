import {NextFetchEvent, NextRequest, NextResponse, userAgent} from "next/server";

export async function middleware(request: NextRequest, _next: NextFetchEvent) {
    const res = NextResponse.next();
    let ip = request.ip ?? request.headers.get('x-real-ip')
    const forwardedFor = request.headers.get('x-forwarded-for');
    res.cookies.set('vercel', 'fast');
    const {browser, device, os} = userAgent(request)
    if (!ip && forwardedFor) {
        ip = forwardedFor.split(',').at(0) ?? 'Unknown'
    }
    if (ip) {
        res.cookies.set("user-ip", ip, {
            httpOnly: false,
        });
    }
    console.log(browser, device, os);
    return res;
}