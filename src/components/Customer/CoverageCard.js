import * as React from 'react'
import { FaBalanceScale } from 'react-icons/fa';

function CoverageCard () {
    return (
        <div className='relative flex justify-center w-full my-4'>
          <div className='absolute top-0 left-10'>
            <span className="inline-block px-2 py-1 mr-1 text-xs font-semibold text-white uppercase rounded bg-sky-700 bg-lightBlue-200 last:mr-0">
              <FaBalanceScale className="w-12 h-12"/>
            </span>
          </div>
          <div class="text-white -mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div class="rounded-2xl bg-[#2D3B41] py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-12">
              <div class="mx-auto max-w-xs px-8">
                  <p class="text-2xl font-semibold">Balance</p>
                  <p class="mt-6 flex items-baseline justify-center gap-x-2">
                  <span class="text-5xl font-bold tracking-tight">+ $2000</span>
                  <span class="text-sm font-semibold leading-6 tracking-wide">USD</span>
                  </p>              
              </div>
            </div>
          </div>
        </div>
    );
}

export default CoverageCard;
