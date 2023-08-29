import * as React from 'react'
import Navbar from './Validator/Navbar';
import SideNav from './Employee/SideNav';
import { useState } from 'react';
import CoverageCard from './Employee/CoverageCard';

function EmployeePage () {
    const [value, onChange] = useState(new Date());

    return (
      <div className="bg-[#E2E8F0] flex flex-row w-full h-screen">
        <SideNav />
        <div className='flex flex-col w-full p-5'>
          <Navbar />
          <div className='grid grid-cols-2'>
            <CoverageCard />
            <CoverageCard />
            <CoverageCard />
            <CoverageCard />
          </div>
        </div>
      </div>
    );
}

export default EmployeePage;
