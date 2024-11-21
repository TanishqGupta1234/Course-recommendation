"use client"
import { UserInputContext } from '@/app/_context/UserInputContext';
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React, { useContext } from 'react'

function TopicDescription() {
    const {userCourseInput ,serUserInput} =useContext(UserInputContext);

    const handleInputChange =(fieldName,value)=>{
        serUserInput(prev=>({
            ...prev,
            [fieldName]:value
        }))

    }
  

  return (
    <div className='mx-20 '>
       {/* TOPIC */}
       <div className='m-5'>
        <label>
            Write the topic for which you want the course and what you want.....
            <Input placeholder={'Topic '} className='h-14 text-xl' 
            defaultValue={userCourseInput?.topic}
            onChange={(e)=>handleInputChange('topic',e.target.value)}
            /> 
        </label>
       </div>
       <div className='m-5 '>
        <label >Tell us more about your course...</label>
        <Textarea placeholder="Course description" className="h-24 text-xl"
           defaultValue={userCourseInput?.description}
        onChange={(e)=>handleInputChange('description',e.target.value)}
        />
       </div>

       {/* TOPIC DESCRIPTION  */}
    </div>
  )
}

export default TopicDescription