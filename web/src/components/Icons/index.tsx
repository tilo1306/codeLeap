import { Container, EditIcon, PenIcon, TrashIcon, UnionImg } from './styles'
import TrashImg from '@assets/Trash.svg'
import EditImg from '@assets/Edit.svg'
import PenImg from '@assets/Pen.svg'
import { useAppDispatch } from '@redux/hooks/useAppSelector'
import { setModalId, setModalDelete, setModalUpdate } from '@actions/modal'
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
      <TrashIcon src={TrashImg} onClick={handleDeletepost} />
      <UnionImg onClick={handleUpdatepost}>
        <EditIcon src={EditImg} />
        <PenIcon src={PenImg} />
      </UnionImg>
    </Container>
  )
}
