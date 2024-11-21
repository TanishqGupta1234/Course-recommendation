"use client"
import { UserInputContext } from '@/app/_context/UserInputContext';
import CategoryList from '@/app/_shared/CategoryList';
import Image from 'next/image';
import React, { useContext } from 'react';

function SelectCategory() {
    const {userCourseInput ,serUserInput} =useContext(UserInputContext);
    const handleCategoryChange=(category)=>{
        serUserInput(prev=>({
            ...prev,
            category:category
        }))
        

    }
  return (
    <div className='px-10 md:px-20'>
        <h2 className='my-5'>Select the Course Category
        </h2>
    <div className='grid grid-cols-3 gap-10 '>
       
      {CategoryList.map((item, index) => (
        <div 
          key={item.id || index} // Use item.id if available, otherwise fallback to index
          className={`flex flex-col p-5 border items-center rounded-xl hover:border-primary
           hover:bg-blue-50 cursor-pointer
            ${userCourseInput?.category==item.name&&'border-primary bg-blue-50'}
           `}
        onClick={()=>handleCategoryChange(item.name)}   >
          <Image alt='imagess' src={item.icon} width={50} height={50} />
          <h2>{item.name}</h2>
        </div>
      ))}
    </div>
    </div>
  );
}

export default SelectCategory;