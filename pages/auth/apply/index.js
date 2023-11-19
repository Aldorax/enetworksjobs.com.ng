'use client';

import { Button } from '@nextui-org/react';
import Link from 'next/link';

export default function HireForm() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen max-h-full max-w-screen p-6">
      <div className="flex flex-col items-start justify-sart">
        <h1 className="text-3xl font-bold text-gray-700">Welcome Applicant</h1>
        <p className="text-gray-500">
          Apply for an Executive or Business Managerial Positions
        </p>
      </div>
      {/* i want a description showing the requirements for the executive and ngo */}
      <div className="flex flex-col items-center justify-center mt-4">
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-2xl font-bold text-gray-700 underline mb-2">
            Requirments for applying
          </h1>
          <p className="text-gray-500">
            <ol>
              <li>
                <span className="font-bold">1. </span>Must be an Adult Nigerian{' '}
              </li>
              <li>
                <span className="font-bold">2. </span>B.Sc- BE SALES CENTRIC{' '}
              </li>
              <li>
                <span className="font-bold">3. </span>M.Sc- MARKETING SUPER
                CHARACTER{' '}
              </li>
              <li>
                <span className="font-bold">4. </span>Have an active, functional
                enetworkspay agent account{' '}
              </li>
              <li>
                <span className="font-bold">5. </span>Have the enetworkspay Card
              </li>
            </ol>
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-4">
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-2xl font-bold text-gray-700 underline mb-2">
            CONDITIONS OF SERVIC
          </h1>
          <p className="text-gray-500">
            <ol>
              <li>1. ALL EMPLOYEES WILL BE ON A 3 MONTHS PROBATION PERIOD </li>
              <li>
                2. ALL EMPLOYEES THAT HAVE SUCCEEDED WITHIN THE 3 MONTHS
                PROBATION PERIOD WILL BE CONFIRMED WITH A POSSIBLE SALARY REVIEW
                AND ACCESS TO APPROVED ALLOWANCES{' '}
              </li>
              <li>
                3. SALARIES WILL BE PRO-RATED DURING PROBATIONARY PERIOD BASED
                ON THE PRODUCTIVITY LEVEL OF EACH EMPLOYEE{' '}
              </li>
              <li>
                4. EMPLOYEE SALARIES WILL BE PAID THROUGH THEIR ENETWORKSPAY
                CARDS{' '}
              </li>
              <li>
                5. SCHEDULED, DEFINED AND MEASURABLE TASKS WILL BE ASSIGNED TO
                EMPLOYEES DURING PROBATION FOR ACCESSMENT{' '}
              </li>
              <li>
                6. EMPLOYEES ARE EXPECTED TO BE DEDICATED, LOYAL AND DISCIPLINED{' '}
              </li>
              <li>
                7. EMPLOYEES ARE NOT TO MISREPRESENT OR MISGUIDE THE PUBLIC
                ABOUT THE ORGANIZATION OR BE INVOLVED IN ANY FRAUDULENT
                ACTIVITIES EITHER DIRECTLY OR INDIRECTLY.{' '}
              </li>
              <li>
                8. EMPLOYEES ARE TO PARTICIPATE IN A MANDATORY ORIENTATION
                PROGRAM PRE AND POST EMPLOYMENT.
              </li>
            </ol>
          </p>
        </div>
      </div>
      <br />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-700 mb-3">
          Job application Categories
        </h1>
        <p className="text-gray-500">
          We have 2 Categories of Job Application for you to choose from
        </p>
      </div>
      <br />
      <div className="flex flex-col items-center justify-center mt-4 space-y-2">
        <Link href="/auth/apply/ngo-community-portfolio-desk-offices">
          <Button
            auto
            shadow
            size="small"
            className="ring hover:text-white hover:bg-black hover:ring-white ring-black px-4 py-2 rounded-none min-w-[300px] md:min-w-[400px]"
          >
            State NGO DESK OFFICE
          </Button>
        </Link>
        <Link href="/auth/apply/executive-business-managerial-positions">
          <Button
            auto
            shadow
            size="small"
            className="ring hover:text-white hover:bg-black hover:ring-white ring-black px-4 py-2 rounded-none min-w-[300px] md:min-w-[400px]"
          >
            State office buisness positions
          </Button>
        </Link>
        <Link href="/auth/apply/local-govt-buisness-office">
          <Button
            auto
            shadow
            size="small"
            className="ring hover:text-white hover:bg-black hover:ring-white ring-black px-4 py-2 rounded-none min-w-[300px] md:min-w-[400px]"
          >
            LOCAL GOVT BUSINESS OFFICE
          </Button>
        </Link>
        <Link href="/auth/apply/local-govt-ngo-desk-office">
          <Button
            auto
            shadow
            size="small"
            className="ring hover:text-white hover:bg-black hover:ring-white ring-black px-4 py-2 rounded-none min-w-[300px] md:min-w-[400px]"
          >
            LOCAL GOVT NGO DESK OFFICES
          </Button>
        </Link>
      </div>
    </div>
  );
}
