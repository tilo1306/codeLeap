import { Post } from '@components/Post'
import { Comment } from '@components/Comment'

import {
  AreaButton,
  ArearForm,
  Button,
  ButtonText,
  Container,
  Header,
  KeyboardArea,
  Title
} from './style'

import { FlatList, Platform } from 'react-native'
import { useEffect, useRef, useState } from 'react'
import { api } from '@utils/axios'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '@redux/hooks/useAppSelector'
import { ListEmpty } from '@components/ListEmpty'
import { ModalDelete } from '@components/ModalDelete'
import { ModalUpdate } from '@components/ModalUpdate'

export interface Posts {
  id: number
  username: string
  created_datetime: string
  title: string
  content: string
}

export interface ResponseApi {
  count: string
  next: string | null
  previous: string | null
  results: Posts[]
}

export function MainScreen() {
  const [data, setData] = useState<ResponseApi>()
  const [listPost, setListPost] = useState<Posts[]>([])
  const [page, setPage] = useState(0)
  const [idPost, setIdPost] = useState(0)
  const user = useAppSelector((state) => state.user)
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false)
  const [modalUpdateOpen, setModalUpdateOpen] = useState(false)

  const flatListRef = useRef<FlatList>(null)

  const goToTop = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({ animated: true, offset: 0 })
    }
  }
  const loadApi = async (): Promise<void> => {
    const json = (await api.allPosts()) as ResponseApi
    setListPost(json.results)
    setData(json)
  }

  const pagination = async (): Promise<void> => {
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

  const handleClickCreatePost = async (title: string, content: string) => {
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
    goToTop()
  }

  const handleUpdatePost = async (title: string, content: string) => {
    await api.updatePost(idPost, title, content)
    await loadApi()
    setModalUpdateOpen(false)
    goToTop()
  }

  useEffect(() => {
    try {
      void loadApi()
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    void pagination()
    goToTop()
  }, [page])

  return (
    <KeyboardArea behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ModalDelete
        activeModal={modalDeleteOpen}
        cancelModelClosed={handleCancelModel}
        deletePost={handleDeletePost}
      />
      <ModalUpdate
        activeModal={modalUpdateOpen}
        cancelModelClosed={handleCancelModel}
        updatePost={handleUpdatePost}
      />

      <Container>
        <ArearForm>
          <FlatList
            ref={flatListRef}
            data={listPost}
            keyExtractor={(item) => item.id.toString()}
            ListEmptyComponent={() => <ListEmpty message="Load Post" />}
            renderItem={({ item }) => (
              <Comment
                id={item.id}
                content={item.content}
                created_datetime={item.created_datetime}
                title={item.title}
                username={item.username}
                modalDeleteActive={handleModalDeleteOpen}
                modalUpdateActive={handleModalUpdateOpen}
              />
            )}
            ListHeaderComponent={() => (
              <>
                <Header>
                  <Title>MainScreen</Title>
                </Header>
                <Post createPost={handleClickCreatePost} />
              </>
            )}
            ListFooterComponent={() => (
              <AreaButton>
                <Button
                  onPress={() => setPage((old) => Math.max(old - 10, 0))}
                  disabled={page < 10}
                  style={page < 10 ? [{ opacity: 0.5 }] : [{ opacity: 1 }]}
                >
                  <ButtonText>Back</ButtonText>
                </Button>
                <Button
                  onPress={() => setPage((old) => old + 10)}
                  disabled={data?.next === null}
                  style={
                    data?.next === null || listPost.length === 0
                      ? [{ opacity: 0.5 }]
                      : [{ opacity: 1 }]
                  }
                >
                  <ButtonText>next</ButtonText>
                </Button>
              </AreaButton>
            )}
          />
        </ArearForm>
      </Container>
    </KeyboardArea>
  )
}
