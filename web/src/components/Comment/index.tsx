import { useAppSelector } from '../../redux/hooks/useAppSelector'
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
} from './style'
import { format, formatDistanceToNow } from 'date-fns'

interface Props {
  id: number
  username: string
  created_datetime: string
  title: string
  content: string
  modalDeleteActive: (id: number) => void
  modalUpdateActive: (id: number) => void
}

export function Comment({
  content,
  created_datetime,
  id,
  title,
  username,
  modalDeleteActive,
  modalUpdateActive,
}: Props) {
  const user = useAppSelector((state) => state.user)
  const publishedDateFormatted = format(
    Date.parse(created_datetime),
    "d 'in' LLLL 'to the' HH:mm'h'",
    {},
  )

  const publishedDateRelativeToNow = formatDistanceToNow(
    Date.parse(created_datetime),
    {
      addSuffix: true,
    },
  )

  const handleOpenModalDelete = () => {
    modalDeleteActive(id)
  }

  const HandleOpenModalUpdate = () => {
    modalUpdateActive(id)
  }

  return (
    <Container>
      <Header>
        <HeaderTitle>{title}</HeaderTitle>
        {user.name === username ? (
          <Icons
            activeModalDelete={handleOpenModalDelete}
            activeModalUpdate={HandleOpenModalUpdate}
          />
        ) : null}
      </Header>
      <ContextArea>
        <HeaderContext>
          <Text>@{username}</Text>
          <Time
            title={publishedDateFormatted}
            dateTime={new Date(created_datetime).toISOString()}
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
