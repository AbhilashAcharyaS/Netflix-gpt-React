import React from 'react'

const GPTSearchBar = () => {
  return (
    <div className='pt-[15%]'>
        <form className='bg-black w-1/2 flex justify-center items-center mx-auto p-4 rounded-full bg-opacity-50'>
            <input className='p-4 text-center w-3/4 rounded-l-full' type='text' placeholder='What you want to watch today?' />
            <button className='p-4 w-1/4 bg-red-600 font-bold text-white rounded-r-full'>Search</button>
        </form>
    </div>
  )
}

export default GPTSearchBar