import { NextResponse } from 'next/server'

export function middleware(request) {
    const cookie = request.cookies.get("cookie");

    if(!cookie){
        return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*', '/configuracoes/:path*']
}