import React from 'react';

function ChapterList({ course }) {
  return (
    <div className="mt-3">
      <h2 className="text-xl font-bold">Chapters</h2>
      <div className="mt-2">
        {course?.courseOutput?.Chapters?.map((chapter, index) => (
            <div className='border p-5 rounded-lg '>
          <div key={index} className="flex gap-4 items-center mb-3">
            {/* Chapter Number */}
            <h2 className="bg-primary h-10 w-10 flex items-center justify-center text-white rounded-full text-lg font-semibold">
              {index + 1}
            </h2>
            
            {/* Chapter Details */}
            <div>
              <h2 className="text-lg font-medium">{chapter?.ChapterName || "Unnamed Chapter"}</h2>
              <p className='text-sm text-gray-500'>{chapter?.About}</p>
              <p className='flex gap-2 text-primary'>{chapter?.Duration}</p>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChapterList;
