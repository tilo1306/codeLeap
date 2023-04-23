/* eslint-disable camelcase */
import { useAppSelector } from '@redux/hooks/useAppSelector'
import { Icons } from '../Icons'
import {
  Container,
  ContextArea,
  Header,
  HeaderContext,
  HeaderTitle,
  Text,
  TextContext,
  Time,
  AreaTextContext,
} from './styles'
import { format, formatDistanceToNow } from 'date-fns'

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
  username,
}: Props) {
  const user = useAppSelector((state) => state.user)
  const publishedDateFormatted = format(
    Date.parse(created_datetime as string),
    "d 'in' LLLL 'to the' HH:mm'h'",
    {},
  )

  const publishedDateRelativeToNow = formatDistanceToNow(
    Date.parse(created_datetime as string),
    {
      addSuffix: true,
    },
  )

  return (
    <Container>
      <Header>
        <HeaderTitle>{title}</HeaderTitle>
        {user.name === username ? <Icons postId={id} /> : null}
      </Header>
      <ContextArea>
        <HeaderContext>
          <Text>@{username}</Text>
          <Time
            title={publishedDateFormatted}
            dateTime={new Date(created_datetime as string).toISOString()}
          >
            {publishedDateRelativeToNow}
          </Time>
        </HeaderContext>
        <AreaTextContext>
          <TextContext>{content}</TextContext>
        </AreaTextContext>
      </ContextArea>
    </Container>
  )
}
