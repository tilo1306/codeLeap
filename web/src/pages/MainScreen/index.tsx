/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Comment } from '../../components/Comment'
import { Post } from '../../components/Post'
import { Container, Header, Title, AreaButton, ArearForm } from './styles'
import {
  useAppDispatch,
  useAppSelector,
} from '../../redux/hooks/useAppSelector'
import { ModalDelete } from '@components/ModalDelete'
import { ModalUpdate } from '@components/ModalUpdate'
import { getAllPost, paginationPost } from '@redux/thunks/postThunks'
import { setName } from '@actions/user'
import { Loading } from '@components/Loading'
import { Button } from '@/components/Button'

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

  const handleFirstPage = () => {
    dispatch(getAllPost())
    scrollToTop()
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

  const handleLastPage = () => {
    if (data.next) {
      const numberPage = Math.floor(Number(data.count) / 10) * 10

      const lastPage = data.next.slice(0, -2) + numberPage

      dispatch(paginationPost(lastPage))

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
            type="button"
            styleType="senary"
            onClick={handleFirstPage}
            disabled={data.previous === null}
          >
            {'<<'}
          </Button>
          <Button
            type="button"
            styleType="senary"
            onClick={handlePreviousPagination}
            disabled={data.previous === null}
          >
            back
          </Button>
          <Button
            type="button"
            styleType="senary"
            onClick={handleNextPagination}
            disabled={data?.next === null || isLoading}
          >
            next
          </Button>
          <Button
            type="button"
            styleType="senary"
            onClick={handleLastPage}
            disabled={data?.next === null || isLoading}
          >
            {'>>'}
          </Button>
        </AreaButton>
      </ArearForm>
      {isModalDelete && <ModalDelete />}
      {isModalUpdate && <ModalUpdate />}
    </Container>
  )
}
