"use client";
import React, { useState } from 'react';
import Header from '../dashboard/_components/Header';
import { UserInputContext } from '../_context/UserInputContext';


function CreateCourseLayout({ children }) {
  const [userCourseInput, serUserInput] = useState([]);
  return (

    <div className="flex flex-col min-h-screen">
      <UserInputContext.Provider value={{ userCourseInput, serUserInput }}>
        <>
      {/* Header Section */}

      <header>
       <Header/>
      </header>

      {/* Main Content Section */}
      <main className="flex-grow">
        {children}
      </main>
      </>
      
      </UserInputContext.Provider>
    </div>
  );
}

export default CreateCourseLayout;
