import * as React from 'react'
import Navbar from './Validator/Navbar';
import SideNav from './Validator/SideNav';
import Calendar from 'react-calendar';
import { useState } from 'react';
import MapChart from './Validator/MapChart';
import ClaimDetails from './Validator/ClaimDetails';

function ValidatorPage () {
    const [value, onChange] = useState(new Date());

    return (
      <div className="bg-[#F5F7F8] flex flex-row w-full h-screen">
        <SideNav />
        <div className='flex flex-col w-full p-5'>
          <Navbar />
          <div className='flex w-full gap-32'>
            <div className='bg-[#2D3B41] text-white pt-14 pl-6 rounded-xl w-1/2 h-[300px]'>
              <Calendar className="font-medium" onChange={onChange} value={value} />
            </div>
            <div className='w-1/3 h-[150px]'>
              <MapChart />
            </div>
          </div>
          <div className='bg-[#2D3B41] text-white mt-10 p-10 rounded-xl'>
            <ClaimDetails />
          </div>
        </div>
      </div>
    );
}

export default ValidatorPage;
