import {
  Container,
  EditIcon,
  PenIcon,
  TrashIcon,
  TrashIconArea,
  UnionImg
} from './style'
import TrashImg from '@assets/Trash.png'
import EditImg from '@assets/Edit.png'
import PenImg from '@assets/Pen.png'
import { TouchableHighlight } from 'react-native'
interface Props {
  activeModalDelete: () => void
  activeModalUpdate: () => void
}

export function Icons({ activeModalDelete, activeModalUpdate }: Props) {
  return (
    <Container>
      <TrashIconArea onPress={activeModalDelete}>
        <TrashIcon source={TrashImg} />
      </TrashIconArea>
      <UnionImg onPress={activeModalUpdate}>
        <EditIcon source={EditImg} />
        <PenIcon source={PenImg} />
      </UnionImg>
    </Container>
  )
}
