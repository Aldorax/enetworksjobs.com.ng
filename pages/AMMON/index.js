'use client';

import { Button } from '@nextui-org/react';
import { Ammon, LogoPurple } from 'assets';
import Image from 'next/image';
import Link from 'next/link';

export default function HireForm() {
  return (
    <div className="flex flex-col items-start justify-center w-screen max-w-screen p-6 md:p-12">
      <div className="flex items-center gap-4 justify-evenly w-full">
        <Image
          src={LogoPurple}
          alt="ammon"
          width={100}
          height={100}
          quality={100}
          className="max-w-10 h-10"
        />
        <Image
          src={Ammon}
          alt="ammon"
          width={100}
          height={100}
          quality={100}
          className="max-w-10 h-10"
        />
      </div>
      <div className="flex flex-col items-center text-center justify-center md:items-start md:justify-sart mt-6">
        <h1 className="text-xl font-semibold text-gray-700">
          Welcome Applicant for
        </h1>
        <h1 className="text-xl font-bold text-gray-700">
          PROJECT AMMON/ENETWORKSJOBS
        </h1>
        <p className="text-gray-500">
          Apply for an Executive or Business Managerial Positions
        </p>
      </div>
      {/* i want a description showing the requirements for the executive and ngo */}
      <div className="flex flex-col items-center justify-center mt-4">
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-2xl font-bold text-gray-700 underline mb-2">
            Requirements for applying
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
            REMUNERATION:
          </h1>
          <p className="text-gray-500 text-sm">
            <ol className="space-y-2">
              <li>
                Note: ALL EMPLOYEES WILL BE ON A 3 MONTHS PROBATION PERIOD{' '}
              </li>
              <li>
                Note: ALL EMPLOYEES THAT HAVE SUCCEEDED WITHIN THE 3 MONTHS
                PROBATION PERIOD WILL BE CONFIRMED WITH A POSSIBLE SALARY REVIEW
                AND ACCESS TO APPROVED ALLOWANCES{' '}
              </li>
              <li>
                1. STATE MANAGERS AND DESK OFFICERS: #1,200,000 BASIC/ ANNUM
              </li>
              <li>
                2. DEP STATE MANAGER AND DEP STATE DESK OFFICER: #840,000 BASIC/
                ANNUM
              </li>
              <li>3. OTHER STATE OFFICIALS; #600,000 BASIC/ ANNUM</li>
              <li>4. LG MANAGER/ DESK OFFICER: #720,000 BASIC/ANNUM</li>
              <li>5. LG DEP MANAGER/ DEP DESK OFFICER: #480,000 BASIC/ANNUM</li>
              <li>6. OTHER LG OFFICIALS: #360,000 BASIC/ ANNUM</li>
              <li>
                7. ALL POSITIONS COME WITH CONTRIBUTORY PENSION PLANS FOR POST
                ENGAGEMENT WELFARE PROGRAM UPON CONFIRMATION AFTER 3 MONTHS
                PROBATION
              </li>
              <li>
                8. ALL POSITIONS COME WITH ALLOWANCES FOR AIRTIME AND DATA UPON
                CONFIRMATION AFTER 3 MONTHS PROBATION.
              </li>
            </ol>
          </p>
        </div>
      </div>
      <br />
      <div className="flex flex-col items-center justify-center mt-4">
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-2xl font-bold text-gray-700 underline mb-2">
            CONDITIONS OF SERVICE
          </h1>
          <p className="text-gray-500 text-sm">
            <ol className="space-y-2">
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
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-3xl font-bold text-gray-700 mb-3">
          Job Application Categories
        </h1>
        <p className="text-gray-500 font-bold mb-4">
          We have 4 Categories of Job Application for you to choose from:
        </p>
      </div>
      <div className="flex flex-col items-center justify-center w-full mt-4 space-y-2">
        <Link href="/AMMON/executive-business-managerial-positions">
          <Button
            auto
            shadow
            size="small"
            className="ring hover:text-white hover:bg-black hover:ring-white ring-black px-4 py-2 rounded-none min-w-[330px] md:min-w-[450px] md:max-w-[450px] bg-green-500 font-semibold text-white"
          >
            Click to apply for STATE OFFICE BUSINESS POSITIONS.
          </Button>
        </Link>
        <br />
        <Link href="/AMMON/ngo-community-portfolio-desk-offices">
          <Button
            auto
            shadow
            size="small"
            className="ring hover:text-white hover:bg-black hover:ring-white ring-black px-4 py-2 rounded-none min-w-[330px] md:min-w-[450px] md:max-w-[450px] bg-yellow-500 font-semibold text-white"
          >
            Click To apply for STATE NGO DESK OFFICE POSITIONS
          </Button>
        </Link>
        <br />
        <Link href="/AMMON/local-govt-buisness-office">
          <Button
            auto
            shadow
            size="small"
            className="ring hover:text-white hover:bg-black hover:ring-white ring-black px-4 py-2 rounded-none min-w-[330px] md:min-w-[450px] md:max-w-[450px] bg-blue-500 font-semibold text-white"
          >
            Clcick to apply for LOCAL GOVT BUSINESS OFFICE POSITIONS
          </Button>
        </Link>
        <br />
        <Link href="/AMMON/local-govt-ngo-desk-office">
          <Button
            auto
            shadow
            size="small"
            className="ring hover:text-white hover:bg-black hover:ring-white ring-black px-4 py-2 rounded-none min-w-[330px] md:min-w-[450px] md:max-w-[450px] bg-red-500 font-semibold text-white"
          >
            Click to apply for LOCAL GOVT NGO DESK OFFICE POSITIONS
          </Button>
        </Link>

        <br />
        <Link href="/AMMON/apply-for-another">
          <Button
            auto
            shadow
            size="small"
            className="border hover:bg-black hover:border-white border-black px-4 py-2 rounded-none min-w-[330px] md:min-w-[450px] md:max-w-[450px] font-semibold hover:text-white"
          >
            Already applied for a position already and want to apply for
            another?
          </Button>
        </Link>
      </div>
    </div>
  );
}
