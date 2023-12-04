'use client';

import { Button } from '@nextui-org/react';
import Link from 'next/link';

export default function HireForm() {
  return (
    <div className="flex flex-col items-start justify-center w-screen max-w-screen p-6 md:p-12">
      <h1 className="text-2xl font-bold text-gray-700 mb-4 ">
        Apply for another position. Choose what category of jobs to apply for
        below
      </h1>
      <h1 className="text-md text-gray-700 mb-4 ">
        <span className="font-semibold">Important Notice: </span>If you apply
        for 2 or more positions, you will be paid for only one position even if
        you are selected for more than one position. You will be able to select
        the position you want to be paid for when you are selected.
      </h1>
      <Link href="/AMMON/apply-for-another/executive-business-managerial-positions">
        <Button
          auto
          shadow
          size="small"
          className="border hover:text-white hover:bg-black hover:border-white border-black px-4 py-2 rounded-none min-w-[330px] md:min-w-[450px] md:max-w-[450px] bg-green-500 font-semibold text-white"
        >
          Click to apply for STATE OFFICE BUSINESS POSITIONS.
        </Button>
      </Link>
      <br />
      <Link href="/AMMON/apply-for-another/ngo-community-portfolio-desk-offices">
        <Button
          auto
          shadow
          size="small"
          className="border hover:text-white hover:bg-black hover:border-white border-black px-4 py-2 rounded-none min-w-[330px] md:min-w-[450px] md:max-w-[450px] bg-yellow-500 font-semibold text-white"
        >
          Click To apply for STATE NGO DESK OFFICE POSITIONS
        </Button>
      </Link>
      <br />
      <Link href="/AMMON/apply-for-another/local-govt-buisness-office">
        <Button
          auto
          shadow
          size="small"
          className="border hover:text-white hover:bg-black hover:border-white border-black px-4 py-2 rounded-none min-w-[330px] md:min-w-[450px] md:max-w-[450px] bg-blue-500 font-semibold text-white"
        >
          Clcick to apply for LOCAL GOVT BUSINESS OFFICE POSITIONS
        </Button>
      </Link>
      <br />
      <Link href="/AMMON/apply-for-another/local-govt-ngo-desk-office">
        <Button
          auto
          shadow
          size="small"
          className="border hover:text-white hover:bg-black hover:border-white border-black px-4 py-2 rounded-none min-w-[330px] md:min-w-[450px] md:max-w-[450px] bg-red-500 font-semibold text-white"
        >
          Click to apply for LOCAL GOVT NGO DESK OFFICE POSITIONS
        </Button>
      </Link>
    </div>
  );
}
