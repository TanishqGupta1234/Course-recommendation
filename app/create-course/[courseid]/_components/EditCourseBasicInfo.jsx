import React, { useState } from 'react';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { HiMiniPencilSquare } from 'react-icons/hi2';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

function EditCourseBasicInfo({ course }) {
    const [name, setName] = useState(course?.name || '');
    const [description, setDescription] = useState(course?.courseOutput?.Description || '');

    const onUpdateHandler = async () => {
        // Here you should handle the update logic, e.g., sending the updated data to your API
        const updatedCourse = {
            ...course,
            name,
            courseOutput: {
                ...course.courseOutput,
                Description: description,
            },
        };

        // Example of an API call (replace with your actual update logic)
        // await updateCourseAPI(updatedCourse);

        console.log(updatedCourse); // For debugging
    };

    return (
        <Dialog>
            <DialogTrigger>
                <HiMiniPencilSquare />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Course Title</DialogTitle>
                    <DialogDescription>
                        <div className='mt-3'>
                            <label htmlFor="course-title">Course Title</label>
                            <Input
                                id="course-title"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                            />
                        </div>
                        <div className='mt-3'>
                            <label htmlFor="course-description">Course Description</label>
                            <Input
                                id="course-description"
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}
                            />
                        </div>
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button onClick={onUpdateHandler}>Update</Button>
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default EditCourseBasicInfo;