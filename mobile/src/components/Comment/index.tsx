import { Icons } from '@components/Icons'
import { useAppSelector } from '@redux/hooks/useAppSelector'
import {
  Container,
  ContextArea,
  Header,
  HeaderContext,
  HeaderTitle,
  TextContext,
  Time,
  AreaTextContext,
  Username
} from './styles'
import { formatDistanceToNow } from 'date-fns'

interface Props {
  id: number
  username: string
  created_datetime: string
  title: string
  content: string
}

export function Comment({
  content,
  created_datetime,
  id,
  title,
  username
}: Props) {
  const user = useAppSelector((state) => state.user)

  const publishedDateRelativeToNow = formatDistanceToNow(
    Date.parse(created_datetime),
    {
      addSuffix: true
    }
  )

  return (
    <Container>
      <Header>
        <HeaderTitle>{title}</HeaderTitle>
        {user.name === username ? <Icons postId={id} /> : null}
      </Header>
      <ContextArea>
        <HeaderContext>
          <Username>@{username}</Username>
          <Time>{publishedDateRelativeToNow}</Time>
        </HeaderContext>
        <AreaTextContext>
          <TextContext>{content}</TextContext>
        </AreaTextContext>
      </ContextArea>
    </Container>
  )
}
