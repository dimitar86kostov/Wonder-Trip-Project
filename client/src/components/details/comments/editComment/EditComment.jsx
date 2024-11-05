import { useParams } from "react-router-dom";
import { useEditComment, useGetCommentById } from "../../../../hooks/useComments";
import { useNavigate } from 'react-router-dom'
import { Input } from "@material-tailwind/react";
import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import useForm from "../../../../hooks/useForm";

export default function EditComment({
    setTrip
}) {
    const { tripId, commentId } = useParams();
    const { comment } = useGetCommentById(commentId);
    const editComment = useEditComment();
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    const editHandler = async (val, changes) => {
        console.log(val);

        const content = val.text
        const data = await editComment(commentId, { content })
        setTrip(data)
    }

    const { values, changeHandler, submitHandler } = useForm(comment.text, editHandler)




    return (
        <>
        <form onSubmit={submitHandler}>
            <DialogHeader>Edit.</DialogHeader>
            <div className="w-72">
                <Input label="Edit your comment" onChange={changeHandler} value={comment.text} />
            </div>
        </form>
            {/* <Button onClick={handleOpen} variant="gradient">
                Open Dialog
            </Button>
            <Dialog open={open} handler={handleOpen}>
                
                <DialogBody>
                    
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button variant="gradient" color="green" onClick={handleOpen}>
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog> */}
        </>
    );
}