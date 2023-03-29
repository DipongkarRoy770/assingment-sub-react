import React, { useEffect, useState } from 'react';

const Sidemenu = ({timer}) => {
  const [time,setTime] =useState(timer)
  const [breakTime,setBreakTime]=useState(0)
  useEffect(()=>{
   const getStorageFrom = localStorage.getItem('watchTime')
   setTime(getStorageFrom)
  },[timer])

 const breakBtn=(bt)=>{
  localStorage.setItem('breckTime',bt)
 }

  return (
    <div className=' bg-pink-100 mt-12 py-8 rounded hover:bg-slate-300'>
      <h3 className='text-center font-semibold text-2xl text-orange-400'>My Cart</h3>
      <p className='text-center font-semibold mt-8'>Total Watch time</p>
       <div className='text-center'>
       <input className='text-center' type="text" value={time} placeholder='watching time:0 '/>
       </div>
      <h2 className='text-center mt-5 font-medium text-1xl'>Add Break Time</h2> 
       <div className='flex ml-16 mt-3 gap-2'>
       <div onClick={()=>breakBtn(15)} className='bg-indigo-500 h-10 w-10 rounded-full text-center pt-2'><h2 className='text-white'>15</h2></div>
       <div className='bg-red-500 h-10 w-10 rounded-full text-center pt-2'><h2 className='text-white'>20</h2></div>
       <div className='bg-pink-700 h-10 w-10 rounded-full text-center pt-2'><h2 className='text-white'>30</h2></div> 
       </div>
       <div className='text-center mt-3'>
       <input className='text-center' type="text" placeholder='watching time '/>
       </div>
    </div>
  );
};

export default Sidemenu;