import { useEffect, useRef, useState } from 'react'
import { FlatList, Platform } from 'react-native'
import { Post } from '@components/Post'
import { Comment } from '@components/Comment'

import {
  AreaButton,
  ArearForm,
  Container,
  Header,
  KeyboardArea,
  Title
} from './styles'

import { useAppDispatch, useAppSelector } from '@redux/hooks/useAppSelector'
import { ListEmpty } from '@components/ListEmpty'
import { ModalDelete } from '@components/ModalDelete'
import { ModalUpdate } from '@components/ModalUpdate'
import { getAllPost, paginationPost } from '@redux/thunks/postThunks'
import { Button } from '@components/Button'

export function MainScreen() {
  const dispatch = useAppDispatch()

  const { data, isLoading } = useAppSelector((state) => state.posts)

  const flatListRef = useRef<FlatList>(null)

  const goToTop = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({ animated: true, offset: 0 })
    }
  }

  const handleFirstPage = () => {
    dispatch(getAllPost())
    goToTop()
  }

  const handleNextPagination = () => {
    if (data.next) {
      dispatch(paginationPost(data.next))
      goToTop()
    }
  }

  const handlePreviousPagination = () => {
    if (data.previous) {
      dispatch(paginationPost(data.previous))
      goToTop()
    }
  }

  const handleLastPage = () => {
    if (data.next) {
      const numberPage = Math.floor(Number(data.count) / 10) * 10

      const lastPage = data.next.slice(0, -2) + numberPage

      dispatch(paginationPost(lastPage))

      goToTop()
    }
  }

  useEffect(() => {
    dispatch(getAllPost())
  }, [dispatch])

  return (
    <KeyboardArea behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ModalDelete />
      <ModalUpdate />

      <Container>
        <ArearForm>
          <FlatList
            ref={flatListRef}
            data={data.results}
            keyExtractor={(item) => item.id.toString()}
            ListEmptyComponent={() => <ListEmpty />}
            renderItem={({ item }) => (
              <Comment
                id={item.id}
                content={item.content}
                created_datetime={item.created_datetime}
                title={item.title}
                username={item.username}
              />
            )}
            ListHeaderComponent={() => (
              <>
                <Header>
                  <Title>MainScreen</Title>
                </Header>
                <Post />
              </>
            )}
            ListFooterComponent={() => (
              <AreaButton>
                <Button
                  title="<<"
                  onPress={handleFirstPage}
                  disabled={data.previous === null || isLoading}
                  style={
                    data.previous === null || isLoading
                      ? [{ opacity: 0.5 }]
                      : [{ opacity: 1 }]
                  }
                  styleType="senary"
                />

                <Button
                  title="Back"
                  onPress={handlePreviousPagination}
                  disabled={data.previous === null || isLoading}
                  style={
                    data.previous === null || isLoading
                      ? [{ opacity: 0.5 }]
                      : [{ opacity: 1 }]
                  }
                  styleType="senary"
                />
                <Button
                  title="Next"
                  onPress={handleNextPagination}
                  disabled={data.next === null || isLoading}
                  style={
                    data.next === null || isLoading
                      ? [{ opacity: 0.5 }]
                      : [{ opacity: 1 }]
                  }
                  styleType="senary"
                />
                <Button
                  title=">>"
                  onPress={handleLastPage}
                  disabled={data.next === null || isLoading}
                  style={
                    data.next === null || isLoading
                      ? [{ opacity: 0.5 }]
                      : [{ opacity: 1 }]
                  }
                  styleType="senary"
                />
              </AreaButton>
            )}
          />
        </ArearForm>
      </Container>
    </KeyboardArea>
  )
}
