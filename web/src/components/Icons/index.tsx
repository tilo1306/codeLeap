import { Container, EditIcon, PenIcon, TrashIcon, UnionImg } from './style'
import TrashImg from '../../assets/Trash.svg'
import EditImg from '../../assets/Edit.svg'
import PenImg from '../../assets/Pen.svg'
interface Props {
  activeModalDelete: () => void
  activeModalUpdate: () => void
}

export function Icons({ activeModalDelete, activeModalUpdate }: Props) {
  return (
    <Container>
      <TrashIcon src={TrashImg} onClick={activeModalDelete} />
      <UnionImg onClick={activeModalUpdate}>
        <EditIcon src={EditImg} />
        <PenIcon src={PenImg} />
      </UnionImg>
    </Container>
  )
}
