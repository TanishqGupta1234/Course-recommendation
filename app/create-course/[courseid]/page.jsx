"use client" // Not needed here (explained below)

import { db } from '@/configs/db';
import { CourseList } from '@/configs/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import BasicCourseInfo from './_components/BasicCourseInfo';
import CourseDetail from './_components/CourseDetail';
import ChapterList from './_components/ChapterList';

function CourseLayout({ params }) {
  const { user } = useUser();
  const [course, setCourse] = useState([]);

  // Fetches course data on server-side render when params and user are available
  useEffect(() => {
    params && GetCourse();
  }, [params, user]);

  const GetCourse = async () => {
    const result = await db.select().from(CourseList)
      .where(eq(CourseList.courseId, params?.courseId))
      .where(eq(CourseList?.createdBy, user?.primaryEmailAddress?.emailAddress));
    setCourse(result[0]);
    console.log(result);
  };

  return (
    <div className="mt-10 px-7 md:px-20 lg:px-44">
      <h2 className="font-bold text-center text-2xl">Course Layout</h2>

      {/* BASIC INFO */}
      <BasicCourseInfo course={course} />

      {/* COURSE DETAIL */}
      <CourseDetail course={course} />

      {/* list of lessons */}
      <ChapterList course={course} />
    </div>
  );
}

export default CourseLayout;
