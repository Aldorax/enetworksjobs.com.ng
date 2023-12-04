import { NextResponse } from 'next/server';
import jwtDecode from 'jwt-decode';

export default function middleware(req) {
  const { token } = req.cookies;
  const { pathname, origin } = req.nextUrl;

  let decoded = '';
  if (token) {
    decoded = jwtDecode(token);
  }

  // Private Route
  if (!token) {
    if (
      pathname !== '/' &&
      pathname !== '/auth/login' &&
      pathname !== '/auth/apply' &&
      pathname !== '/auth/apply/executive-business-managerial-positions' &&
      pathname !== '/auth/apply/ngo-community-portfolio-desk-offices' &&
      pathname !== '/auth/apply/local-govt-buisness-office' &&
      pathname !== '/auth/apply/local-govt-ngo-desk-office' &&
      pathname !== '/auth/apply/apply-for-another' &&
      pathname !==
        '/auth/apply/apply-for-another/executive-business-managerial-positions' &&
      pathname !==
        '/auth/apply/apply-for-another/ngo-community-portfolio-desk-offices' &&
      pathname !== '/auth/apply/apply-for-another/local-govt-buisness-office' &&
      pathname !== '/auth/apply/apply-for-another/local-govt-ngo-desk-office' &&
      pathname !== '/auth/apply/success' &&
      pathname !== '/AMMON' &&
      pathname !== '/AMMON/apply-for-another' &&
      pathname !==
        '/AMMON/apply-for-another/executive-business-managerial-positions' &&
      pathname !==
        '/AMMON/apply-for-another/ngo-community-portfolio-desk-offices' &&
      pathname !== '/AMMON/apply-for-another/local-govt-buisness-office' &&
      pathname !== '/AMMON/apply-for-another/local-govt-ngo-desk-office' &&
      pathname !== '/AMMON/executive-business-managerial-positions' &&
      pathname !== '/AMMON/ngo-community-portfolio-desk-offices' &&
      pathname !== '/AMMON/local-govt-buisness-office' &&
      pathname !== '/AMMON/local-govt-ngo-desk-office' &&
      pathname !== '/AMMON/success' &&
      pathname !== '/auth/forgot' &&
      !pathname.match(/\/auth\/reset\/[\w]*/gi)
    ) {
      return NextResponse.redirect(`${origin}/auth/login`);
    }
  }

  // Public Route
  if (token) {
    if (
      pathname === '/auth/login' ||
      pathname === '/auth/apply' ||
      pathname === '/auth/apply/executive-business-managerial-positions' ||
      pathname === '/auth/apply/ngo-community-portfolio-desk-offices' ||
      pathname === '/auth/apply/success' ||
      pathname === '/auth/forgot' ||
      pathname.match(/\/auth\/reset\/[\w]*/gi)
    ) {
      return NextResponse.redirect(`${origin}`);
    }
  }

  // Validate Worker
  if (
    decoded.role === 0 &&
    (pathname === '/recruiter' || pathname === '/recruiter/edit')
  ) {
    return NextResponse.redirect(`${origin}/worker`);
  }

  // Validate Recruiter
  if (
    decoded.role === 1 &&
    (pathname === '/worker' ||
      pathname === '/worker/edit' ||
      pathname === '/worker/:id')
  ) {
    return NextResponse.redirect(`${origin}/recruiter`);
  }
}
