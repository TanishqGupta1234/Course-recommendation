import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import { HiOutlinePuzzlePiece } from 'react-icons/hi2';
import EditCourseBasicInfo from './EditCourseBasicInfo';

function BasicCourseInfo({course}) {
  return (
    <div className="p-10 border rounded-xl shadow-sm mt-5">
      <h2 className='font-bold text-3xl'>{course?.name}<EditCourseBasicInfo course={course} /></h2> 
      <p>Health and programming intersect in innovative ways, as technology increasingly shapes the future of healthcare. Creative programming solutions enable the development of applications that promote wellness, track fitness, and manage chronic conditions. By harnessing data analytics and machine learning, programmers can create personalized health interventions that inspire individuals to adopt healthier lifestyles.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
        
         <p className='text-sm text-gray-400'>{course?.courseOutput?.Description}</p>
         <h2 className='font-medium mt-2 flex gap-2 items-center text-primary'><HiOutlinePuzzlePiece />{course?.category}</h2>
         <Button className="w-full mt-5 ">Start</Button>
        </div>
        <div>
            <Image alt='image' src={'/placeholder.png'} width={300} height={300} 
            className='w-full rounded-xl h-[250px] object-cover '/>
        </div>
       
      </div>
    </div>
  );
}

export default BasicCourseInfo;