import * as React from 'react'
import Navbar from './Validator/Navbar';
import SideNav from './Customer/SideNav';
import { useState } from 'react';
import CoverageCard from './Customer/CoverageCard';
import ClaimDetails from './Customer/ClaimDetails';

function EmployeePage () {
    const [value, onChange] = useState(new Date());

    return (
      <div className="bg-[#E2E8F0] flex flex-row w-full h-screen">
        <SideNav />
        <div className='flex flex-col w-full p-5'>
          <Navbar />
          <div className='grid grid-cols-3'>
            <CoverageCard />
            <CoverageCard />
            <CoverageCard />
          </div>
          <div className='bg-[#2D3B41] text-white mt-10 p-10 rounded-xl'>
            <ClaimDetails />
          </div>
        </div>
      </div>
    );
}

export default EmployeePage;
