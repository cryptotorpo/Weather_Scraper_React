import * as React from 'react'
import NavSelector from './NavSelector';

function SideNav () {
    return (
      <div className="bg-[#2D3B41] text-white flex flex-col w-[600px] h-[900px] rounded-xl m-5 mt-10 p-3">
        <NavSelector />
      </div>
    );
}

export default SideNav;
