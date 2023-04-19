import { useState } from "react";
import { AreaButton, Text, ButtomCancel, ButtomSave, Container, AreaModal, HeaderTitle, TextArea, Input } from "./style";

interface Props {
    cancelModelClosed: () => void
    updatePost: (title: string, content: string) => void
}

export function ModalUpdate({ cancelModelClosed, updatePost }: Props) {
    const [title, setTitle] = useState('')
    const [post, setPost] = useState('')

    const handleUpdatePost = () => {
        updatePost(title, post)
    }

    return (
        <Container>

            <AreaModal onSubmit={(e) => {
                e.preventDefault()
                handleUpdatePost()
            }}>
                <HeaderTitle>Edit item</HeaderTitle>
                <Text>Title</Text>
                <Input required placeholder="Hello world" value={title} maxLength={50} onChange={({ target }) => setTitle(target.value)} />

                <Text>Content here</Text>
                <TextArea required placeholder="Content here" maxLength={250} value={post} onChange={({ target }) => setPost(target.value)} />
                <AreaButton>
                    <ButtomCancel onClick={cancelModelClosed}>Cancel</ButtomCancel>
                    <ButtomSave disabled={title.length === 0 || post.length === 0 ? true : false} onClick={handleUpdatePost}>Save</ButtomSave>
                </AreaButton>
            </AreaModal>

        </Container >
    )
}