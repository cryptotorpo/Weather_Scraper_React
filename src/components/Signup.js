import * as React from 'react'
import '../css/project.css'
import '../css/animations.css';
import Register from './Register';

function Landing () {
    return (
      <div className="bg-[#EBEFFF] flex flex-row w-full h-screen">\
        <div className='relative flex justify-center w-1/2'>
            <img src="../img/rectangle61.png" className='absolute top-0 w-[600px]'></img>
            <div className='absolute top-0 flex justify-center'><img className="h-[700px] w-[500px]" src="../img/rectangle7.png"></img></div>   
            <img src="../img/weatherchain.png" className='abolute top-0 mt-[30px] w-[220px] h-[220px] z-[100]'></img>        
            <img src="../img/other7.png" className='absolute ml-[400px] top-[30%] w-[600px] h-[600px] z-[200]'></img>    
        </div>
        <div className='w-1/2 mt-10'>
          <div className='flex justify-center'><Register /></div>
        </div>
      </div>
    );
}

export default Landing;
