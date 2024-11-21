import React from 'react';
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
    AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import Image from 'next/image';

function LoadingDialog({ loading }) {
    return (
        <AlertDialog open={loading}>
            {/* You may want to include a trigger for testing */}
            {/* <AlertDialogTrigger>Open</AlertDialogTrigger> */}
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Loading</AlertDialogTitle>
                    <AlertDialogDescription>
                        <div className='flex flex-col items-center py-10'>
                            <Image src={'/rocket.gif'} width={100} height={100} alt='Loading animation of a rocket' />
                            <p>Please Wait.... We are Generating the Course4U</p>
                        </div>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => {/* handle cancel logic if needed */}}>Cancel</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default LoadingDialog;