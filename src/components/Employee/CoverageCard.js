import * as React from 'react'

function CoverageCard () {
    return (
        <div className='relative flex justify-center w-full my-4'>
          <div className='absolute top-0 left-40'>
            <span className="inline-block px-2 py-1 mr-1 text-xs font-semibold text-white uppercase rounded bg-sky-700 bg-lightBlue-200 last:mr-0">
              Snow Protection
            </span>
          </div>
          <div class="text-white -mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div class="rounded-2xl bg-[#2D3B41] py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-12">
              <div class="mx-auto max-w-xs px-8">
                  <p class="text-base font-semibold">Your yearly preminum</p>
                  <p class="mt-6 flex items-baseline justify-center gap-x-2">
                  <span class="text-5xl font-bold tracking-tight">$300</span>
                  <span class="text-sm font-semibold leading-6 tracking-wide">USD</span>
                  </p>
                  <p class="mt-6 text-md font-medium leading-5">Reimbursement: $150</p>
                  <p class="mt-6 text-md font-medium leading-5">Validation Threshold: 75%</p>
                  <a href="#" class="mt-10 block w-full rounded-md bg-sky-900 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-sky-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Subscribe</a>
              </div>
            </div>
          </div>
        </div>
    );
}

export default CoverageCard;
