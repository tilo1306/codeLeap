/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Comment } from '../../components/Comment'
import { Post } from '../../components/Post'
import {
  Button,
  Container,
  Header,
  Title,
  AreaButton,
  ArearForm,
} from './styles'
import {
  useAppDispatch,
  useAppSelector,
} from '../../redux/hooks/useAppSelector'
import { ModalDelete } from '@components/ModalDelete'
import { ModalUpdate } from '@components/ModalUpdate'
import { getAllPost, paginationPost } from '@redux/thunks/postThunks'
import { setName } from '@actions/user'
import { Loading } from '@components/Loading'

export function MainScreen() {
  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const localStorageUsername = localStorage.getItem('username')

  const { name } = useAppSelector((state) => state.user)
  const { data, isLoading } = useAppSelector((state) => state.posts)
  const { isModalDelete, isModalUpdate } = useAppSelector(
    (state) => state.modal,
  )

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const handleNextPagination = () => {
    if (data.next) {
      dispatch(paginationPost(data.next))
      scrollToTop()
    }
  }

  const handlePreviousPagination = () => {
    if (data.previous) {
      dispatch(paginationPost(data.previous))
      scrollToTop()
    }
  }

  useEffect(() => {
    if (name === '' && localStorageUsername === null) {
      navigate('/signup')
    } else {
      dispatch(setName(localStorageUsername))
      dispatch(getAllPost())
    }
  }, [dispatch])

  return (
    <Container>
      <ArearForm>
        <Header>
          <Title>CodeLeap Network</Title>
        </Header>
        <Post />
        {isLoading && <Loading />}
        {!isLoading &&
          data.results.map((post) => (
            <Comment
              key={post.id}
              id={post.id}
              content={post.content}
              created_datetime={post.created_datetime}
              title={post.title}
              username={post.username}
            />
          ))}
        <AreaButton>
          <Button
            onClick={handlePreviousPagination}
            disabled={data.previous === null}
          >
            back
          </Button>
          <Button
            onClick={handleNextPagination}
            disabled={data?.next === null || isLoading}
          >
            next
          </Button>
        </AreaButton>
      </ArearForm>
      {isModalDelete && <ModalDelete />}
      {isModalUpdate && <ModalUpdate />}
    </Container>
  )
}
