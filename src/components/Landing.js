import * as React from 'react'
import '../css/project.css'
import '../css/animations.css';
import Login from './Login';

function Landing () {
    return (
      <div className="bg-[#EBEFFF] flex flex-row w-full h-screen">
        <div className='relative flex flex-col w-2/3 mt-20'>
          <div className='flex justify-center'><Login /></div>
          <div className='absolute bottom-0'><img className="w-[300px]" src="../img/rectangle6.png"></img></div>
        </div>
        <div className='w-1/3 bg-[#040548] flex flex-col'>
          <div className='flex justify-center mt-10'><img className="h-auto w-[250px]" src="../img/weatherchain.png"></img></div>
          <div className=''><img src="../img/payment.png" className='ml-[0px] lg:ml-[-300px] w-[1300px] h-auto'></img></div>
        </div>
      </div>
    );
}

export default Landing;
