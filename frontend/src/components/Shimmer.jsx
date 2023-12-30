import React from 'react'

const Shimmer = () => {
  return (
    <div className='relative flex flex-col items-center w-[100%] h-[100%] gap-10'>
        <div className=' relative w-[100%] h-[130px] bg-[#eeeeee] rounded-t-[1rem]' />

        <div className="bg-[#eeeeee] absolute h-[80px] w-[80px] rounded-full top-[30%] left-[50%] transform 
            translate-x-[-50%] translate-y-[-50%] hover:scale-110 hover:transition-all cursor-pointer profile-shadow shimmer-effect "
         />

        <div className='flex flex-col items-center mt-4 gap-2'>
          <div className='w-[150px] bg-[#eeeeee] h-[1rem] z-1 rounded-sm shimmer-effect'/>
          <div className='w-[100px] bg-[#eeeeee] h-[1rem] z-1 rounded-sm shimmer-effect'/>
        </div>


        <div className='flex justify-between gap-4'>
          <div className='flex flex-col items-center gap-2'>
            <div className='w-[80px] bg-[#eeeeee] h-[1rem] z-1 rounded-sm shimmer-effect'/>
            <div className='w-[60px] bg-[#eeeeee] h-[1rem] z-1 rounded-sm shimmer-effect'/>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <div className='w-[80px] bg-[#eeeeee] h-[1rem] z-1 rounded-sm shimmer-effect'/>
            <div className='w-[60px] bg-[#eeeeee] h-[1rem] z-1 rounded-sm shimmer-effect'/>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <div className='w-[80px] bg-[#eeeeee] h-[1rem] z-1 rounded-sm shimmer-effect'/>
            <div className='w-[60px] bg-[#eeeeee] h-[1rem] z-1 rounded-sm shimmer-effect'/>
          </div>

        </div>

        <div className='w-[80%] h-10 bg-[#eeeeee] rounded-full shimmer-effect' />


    </div>
  )
}

export default Shimmer