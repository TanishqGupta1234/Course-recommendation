import React from "react";
import { HiOutlineChartBar, HiOutlineClock, HiOutlinePlayCircle } from "react-icons/hi2";

function CourseDetail({ course }) {
  return (
    <div className="border p-6 rounded-xl shadow-sm mt-3">
      <div className="flex flex-col gap-6 ">
        {/* Skill Level */}
        <div className="flex items-center gap-4">
          <HiOutlineChartBar className="text-4xl text-primary" />
          <div>
            <h2 className="text-xs text-gray-500 font-bold">Skill Level</h2>
            <h2 className="text-lg font-medium">{course?.level || "N/A"}</h2>
          </div>
        </div>

        {/* Duration */}
        <div className="flex items-center gap-4">
          <HiOutlineClock className="text-4xl text-primary" />
          <div>
            <h2 className="text-xs text-gray-500 font-bold">Duration</h2>
            <h2 className="text-lg font-medium">
              {course?.courseOutput?.Duration || "N/A"}
            </h2>
          </div>
        </div>

        {/* Video Included */}
        <div className="flex items-center gap-4">
        <HiOutlinePlayCircle className="text-4xl text-primary" />
          <div>
            <h2 className="text-xs text-gray-500 font-bold">Video Included</h2>
            <h2 className="text-lg font-medium">
              {course?.includeVideo ? "Yes" : "No"}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;
 