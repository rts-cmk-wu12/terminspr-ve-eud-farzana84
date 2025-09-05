import { NextResponse } from "next/server";

export default async function middleware(request) {
		if (!request.cookies.has("landrup_token") || !request.cookies.has("landrup_userid") || !request.cookies.has("landrup_role")) {
		return NextResponse.redirect(new URL("/login", request.url))
	}
}

export const config = {
	matcher: ["/calendar/:path*"]
};


