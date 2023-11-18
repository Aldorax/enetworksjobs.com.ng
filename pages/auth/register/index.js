'use client';

import { Button } from '@nextui-org/react';

export default function HireForm() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen max-h-screen max-w-screen p-6">
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
      <br />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-700">
          Job application Categories
        </h1>
        <p className="text-gray-500">
          We have 2 Categories of Job Application for you to choose from
        </p>
      </div>
      <br />
      <div className="flex flex-col items-center justify-center mt-4 space-y-2">
        <Button
          auto
          shadow
          size="small"
          className="ring hover:text-white hover:bg-black hover:ring-white ring-black px-4 py-2 rounded-xl min-w-[300px] md:min-w-[400px]"
        >
          NGO
        </Button>
        <Button
          auto
          shadow
          size="small"
          className="ring hover:text-white hover:bg-black hover:ring-white ring-black px-4 py-2 rounded-xl min-w-[300px] md:min-w-[400px]"
        >
          Executive
        </Button>
      </div>
    </div>
  );
}
