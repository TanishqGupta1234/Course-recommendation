"use client";
import React, { useContext } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { UserInputContext } from "@/app/_context/UserInputContext";

function SelectOption() {
  const { userCourseInput, serUserInput } = useContext(UserInputContext);

  const handleInputChange = (fieldName, value) => {
    serUserInput((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  return (
    <div className="px-10 md:px-20 lg:px-44">
      <div className="grid grid-cols-2 gap-10">
        {/* Difficulty Level */}
        <div>
          <label className="text-sm font-medium mb-2 block">Difficulty Level</label>
          <Select
            value={userCourseInput?.level || ""}
            onValueChange={(value) => handleInputChange("level", value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advance">Advance</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Course Duration */}
        <div>
          <label className="text-sm font-medium mb-2 block">Course Duration</label>
          <Select
            value={userCourseInput?.duration || ""}
            onValueChange={(value) => handleInputChange("duration", value)}
            
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1 hr">1 hr</SelectItem>
              <SelectItem value="2 hr">2 hr</SelectItem>
              <SelectItem value="More than 3 hr">More than 3 hr</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Add a Video */}
        <div>
          <label className="text-sm font-medium mb-2 block">Add a Video</label>
          <Select
            value={userCourseInput?.display || ""}
            onValueChange={(value) => handleInputChange("display", value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="YES">Yes</SelectItem>
              <SelectItem value="NO">No</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Number of Chapters */}
        <div>
          <label className="text-sm font-medium mb-2 block">Number of Chapters</label>
          <Input
            type="number"
            className="h-14 text-lg"
            value={userCourseInput?.noOfChapter || ""}
            onChange={(event) =>
              handleInputChange("noOfChapter", Number(event.target.value))
            }
            placeholder="Enter number"
          />
        </div>
      </div>
    </div>
  );
}

export default SelectOption;
