"use client";
import React, { useContext, useEffect, useState } from "react";
import {
    HiClipboardDocumentCheck,
    HiLightBulb,
    HiMiniSquares2X2,
} from "react-icons/hi2";
import { Button } from "@/components/ui/button"; // Ensure the correct path for the Button component
import SelectCategory from "./_components/SelectCategory";
import TopicDescription from "./_components/TopicDescription";
import SelectOption from "./_components/SelectOption";
import { UserInputContext } from "../_context/UserInputContext";
import { GenerateCourseLayout_AI } from "@/configs/AiModel";
import LoadingDialog from "./_components/LoadingDialog";
import uuid4 from "uuid4";
import { useUser } from "@clerk/nextjs";
import { db } from "@/configs/db";
import { CourseList } from "@/configs/schema";
import { useRouter } from "next/navigation";



function CreateCourse() {
    const stepperOptions = [
        { id: 1, name: "Category", icon: <HiMiniSquares2X2 /> },
        { id: 2, name: "Topic & Desc", icon: <HiLightBulb /> },
        { id: 3, name: "Options", icon: <HiClipboardDocumentCheck /> },
    ];

    const { userCourseInput, serUserInput } = useContext(UserInputContext); // Ensure UserInputContext is properly set up
    const [loading, setloading]= useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const {user} = useUser();
    const router = useRouter();

    useEffect(() => {
        console.log(userCourseInput);
    }, [userCourseInput]);

    const checkStatus = () => {
        // Validate inputs at each step
        if (!userCourseInput) return true;

        if (
            activeIndex === 0 &&
            (!userCourseInput?.category || userCourseInput?.category?.length === 0)
        ) {
            return true;
        }
        if (
            activeIndex === 1 &&
            (!userCourseInput?.topic || userCourseInput?.topic?.length === 0)
        ) {
            return true;
        }
        if (
            activeIndex === 2 &&
            (!userCourseInput?.level ||
                !userCourseInput?.duration ||
                !userCourseInput?.display ||
                !userCourseInput?.noOfChapter)
        ) {
            return true;
        }
        return false;
    };

    const GenerateCourseLayout =async() => {
        setloading(true);
        const BASIC_PROMPT = "Generate A Course Tutorial on Following Detail With fields as Course Name, Description, Chapter Name, About, Duration: ";
        const USER_INPUT_PROMPT = `Category: ${userCourseInput?.category}, Topic: ${userCourseInput?.topic}, Level: ${userCourseInput?.level}, Duration: ${userCourseInput?.duration}, No Of Chapters: ${userCourseInput?.noOfChapter}, in JSON format.`;
        const FINAL_PROMPT = BASIC_PROMPT + USER_INPUT_PROMPT;
        console.log(FINAL_PROMPT);
        const result = await GenerateCourseLayout_AI.sendMessage(FINAL_PROMPT);
        console.log(result.response?.text());
        console.log(JSON.parse(result.response?.text()));
        setloading(false);
        SaveCourseLayoutIndb(JSON.parse(result.response?.text()))
        // Placeholder for any action to generate the course
    };

    const SaveCourseLayoutIndb=async(courseLayout)=>{
        var id = uuid4();
        setloading(true)
        const result = await db.insert(CourseList).values({
             courseId:id,//course id
             name:userCourseInput?.topic,
             level:userCourseInput?.level,
             category:userCourseInput?.category,
             courseOutput:courseLayout,
             createdBy:user?.primaryEmailAddress?.emailAddress,
             userName:user?.fullName,
             userProfileImage:user?.imageUrl

        })
        console.log("FINISH");
        setloading(false);
        router.replace('/create-course/'+id );
    }

    return (
        <div>
            {/* STEPPER */}
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-4xl text-primary font-medium">Create Course</h2>
                <div className="flex mt-10">
                    {stepperOptions.map((item, index) => (
                        <div key={item.id} className="flex items-center">
                            <div className="flex flex-col items-center">
                                <div
                                    className={`bg-gray-200 p-3 rounded-full text-white ${
                                        activeIndex >= index ? "bg-primary" : ""
                                    }`}
                                >
                                    {item.icon}
                                </div>
                                <h2 className="mt-2 text-sm text-gray-600">{item.name}</h2>
                            </div>
                            {index !== stepperOptions.length - 1 && (
                                <div
                                    className={`h-1 w-[50px] md:w-[100px] lg:w-[170px] bg-gray-300 mx-2 rounded-full ${
                                        activeIndex - 1 >= index ? "bg-purple-500" : ""
                                    }`}
                                ></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* COMPONENTS */}
            <div className="px-10 md:px-20 lg:px-44 mt-10">
                {activeIndex === 0 ? (
                    <SelectCategory />
                ) : activeIndex === 1 ? (
                    <TopicDescription />
                ) : (
                    <SelectOption />
                )}

                {/* NEXT AND PREVIOUS BUTTONS */}
                <div className="flex justify-between mt-10">
                    <Button
                        disabled={activeIndex === 0}
                        variant="outline"
                        onClick={() => setActiveIndex(activeIndex - 1)}
                    >
                        PREVIOUS
                    </Button>
                    {activeIndex < 2 && (
                        <Button disabled={checkStatus()} onClick={() => setActiveIndex(activeIndex + 1)}>
                            NEXT
                        </Button>
                    )}
                    {activeIndex === 2 && (
                        <Button disabled={checkStatus()} onClick={GenerateCourseLayout}>
                            Generate Course
                        </Button>
                    )}
                </div>
            </div>
            <LoadingDialog loading={loading}/>
        </div>
    );
}

export default CreateCourse;
