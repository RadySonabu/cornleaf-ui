"use client";
import React from 'react'
import MyNavbar from '@/components/Navbar';
 
export default function page() {

  return (

    <div>
    
 <MyNavbar/>
    

<div className="text-gray-900 pt-8 pr-0 pb-14 pl-0 bg-white">
        <div>
            <div className="relative flex flex-col items-center rounded-[20px] w-[400px] mx-auto p-4 bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none">
                <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover" >
                    <div className="absolute -bottom-12 flex h-[200px] w-[200px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
                        <img className="h-full w-full rounded-full" src='https://www.theventuretours.com/wp-content/uploads/2020/03/avatar-icon-png-1-600x600.png' alt="" />
                    </div>
                </div> 
                <div className="mt-16 flex flex-col items-center">
                    <h4 className="text-xl font-bold text-navy-800 dark:text-white">
                    Adela Parkson
                    </h4>
                    <p className="text-base font-normal text-gray-800">adelaparkson01@gmail.com</p>
                </div> 
               
            </div>  
        </div>
    

  <div className="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16
      max-w-7xl">
    <div className="flex flex-col items-center sm:px-5 md:flex-row">
      <div className="flex flex-col items-start justify-center w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2">
        <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16
            md:space-y-5">
  
  <div class="sm:block hidden">
        <button
          type="button"
          className="flex -mt-12 w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 transition hover:border-gray-300 focus:border-gray-300 focus:outline-none focus:ring-0"
        >
          Edit profile
        </button>
  </div> 
    
        <div className='flex space-x-40'>

        <a className="text-2xl font-bold leading-none lg:text-2xl xl:text-2xl">Recent Post</a>
          
          <div className="w-full mt-6">
                  <a className="flex text-center items-center justify-center w-full pt-4 pr-10 pb-4 pl-10 text-base
                      font-medium text-white bg-indigo-600 rounded-xl transition duration-500 ease-in-out transform
                      hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add Post</a>
          </div>
        </div>
       </div>
      </div>
    </div>

    <div className="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16">
      <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
        <img
            src="https://images.unsplash.com/photo-1626318305863-bb23d0297c0b?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"/>
       
        <a className="text-lg font-bold sm:text-xl md:text-2xl">My man</a>
        <p className="text-sm text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
        <div className="pt-2 pr-0 pb-0 pl-0">
          <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">Adela Parkson</a>
          <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">· 23rd, March 2023 ·</p>
          <p className="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1">1hr 20min. ago</p>
        </div>
      </div>
      <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
        <img
            src="https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"/>
       
        <a className="text-lg font-bold sm:text-xl md:text-2xl">My cutie puppy!</a>
        <p className="text-sm text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
        <div className="pt-2 pr-0 pb-0 pl-0">
          <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">Adela Parkson</a>
          <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">· 23rd, March 2023 ·</p>
          <p className="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1">2hrs 30min. ago</p>
        </div>
      </div>
      <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
        <img
            src="https://images.unsplash.com/photo-1626197031507-c17099753214?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzR8fHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"/>
       
        <a className="text-lg font-bold sm:text-xl md:text-2xl">Dessert, Sweets!</a>
        <p className="text-sm text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
        <div className="pt-2 pr-0 pb-0 pl-0">
          <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">Adela Parkson</a>
          <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">· 23rd, March 2023 ·</p>
          <p className="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1">4hrs 40min. ago</p>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>

    
  )
}

