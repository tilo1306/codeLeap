import {
  Container,
  EditIcon,
  PenIcon,
  TrashIcon,
  TrashIconArea,
  UnionImg
} from './styles'
import TrashImg from '@assets/Trash.png'
import EditImg from '@assets/Edit.png'
import PenImg from '@assets/Pen.png'
import { useAppDispatch } from '@redux/hooks/useAppSelector'
import { setModalDelete, setModalId, setModalUpdate } from '@actions/modal'
interface Props {
  postId: number
}

export function Icons({ postId }: Props) {
  const dispatch = useAppDispatch()

  const handleDeletepost = () => {
    dispatch(setModalId(postId))
    dispatch(setModalDelete(true))
  }

  const handleUpdatepost = () => {
    dispatch(setModalId(postId))
    dispatch(setModalUpdate(true))
  }

  return (
    <Container>
      <TrashIconArea onPress={handleDeletepost}>
        <TrashIcon source={TrashImg} />
      </TrashIconArea>
      <UnionImg onPress={handleUpdatepost}>
        <EditIcon source={EditImg} />
        <PenIcon source={PenImg} />
      </UnionImg>
    </Container>
  )
}
