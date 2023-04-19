import { useEffect, useState } from "react";
import { Comment } from "../../components/Comment";
import { Post } from "../../components/Post";
import { api } from "../../utils/axios";
import { Button, Container, Header, Title, AreaButton, ArearForm } from "./style";
import { useAppSelector } from "../../redux/hooks/useAppSelector";
import { ModalDelete } from "../../components/ModalDelete";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setName } from "../../redux/reducers/userReducer";
import { ModalUpdate } from "../../components/ModalUpdate";

export interface Posts {
    id: number;
    username: string;
    created_datetime: string;
    title: string;
    content: string;
}

export interface ResponseApi {
    count: string;
    next: string | null;
    previous: string | null;
    results: Posts[]
}

export function MainScreen() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user = useAppSelector(state => state.user)
    const localStorageUsername = localStorage.getItem("username");

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<ResponseApi>()
    const [listPost, setListPost] = useState<Posts[]>([])
    const [page, setPage] = useState(0)
    const [modalDeleteOpen, setModalDeleteOpen] = useState(false)
    const [modalUpdateOpen, setModalUpdateOpen] = useState(false)
    const [idPost, setIdPost] = useState(0)



    const loadApi = async (): Promise<void> => {
        const json = (await api.allPosts()) as ResponseApi
        setListPost(json.results)
        setData(json)
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const pagination = async (): Promise<void> => {
        scrollToTop()
        if (page < 10) {
            const json = (await api.allPosts()) as ResponseApi
            setListPost(json.results)
            setData(json)

        } else {
            const json = (await api.pagination(page)) as ResponseApi
            setListPost(json.results)
            setData(json)

        }
    }

    const handleClickPost = async (title: string, content: string) => {
        await api.createPost(user.name, title, content)
        await loadApi()
    }

    const handleModalDeleteOpen = (id: number) => {
        setModalDeleteOpen(true)
        setIdPost(id)

    }
    const handleModalUpdateOpen = (id: number) => {
        setModalUpdateOpen(true)
        setIdPost(id)
    }

    const handleCancelModel = () => {
        setModalDeleteOpen(false)
        setModalUpdateOpen(false)

    }
    const handleDeletePost = async () => {
        await api.deletePost(idPost)
        await loadApi()
        setModalDeleteOpen(false)

    }

    const handleUpdatePost = async (title: string, content: string) => {
        await api.updatePost(idPost, title, content)
        await loadApi()
        setModalUpdateOpen(false)
    }

    useEffect(() => {
        if (user.name === '' && localStorageUsername === null) {
            navigate('/signup')
        } else {
            dispatch(setName(localStorageUsername))
        }
    }, [])

    useEffect(() => {
        try {
            setLoading(true);
            setTimeout(() => {
                void loadApi();
            }, 1000);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }, [])

    useEffect(() => {
        pagination()
    }, [page])

    return (
        <Container>
            <ArearForm>
                <Header>
                    <Title>CodeLeap Network</Title>
                </Header>
                <Post createPost={handleClickPost} />
                {loading && <div>Loading..</div>}
                {!loading && listPost?.map((post) =>
                    <Comment
                        key={post.id}
                        id={post.id}
                        content={post.content}
                        created_datetime={post.created_datetime}
                        title={post.title}
                        username={post.username}
                        modalDeleteActive={handleModalDeleteOpen}
                        modalUpdateActive={handleModalUpdateOpen}
                    />)}
                <AreaButton>
                    <Button onClick={() => setPage((old => Math.max(old - 10, 0)))} disabled={page < 10}>back</Button>
                    <Button onClick={() => setPage((old => old + 10))} disabled={data?.next === null}>next</Button>
                </AreaButton>
            </ArearForm>
            {modalDeleteOpen && <ModalDelete cancelModelClosed={handleCancelModel} deletePost={handleDeletePost} />}
            {modalUpdateOpen && <ModalUpdate cancelModelClosed={handleCancelModel} updatePost={handleUpdatePost} />}
        </Container>
    )
}