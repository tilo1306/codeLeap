import { IPostProps } from './interfaces/IPosts'

export const postInitialState: IPostProps = {
  isLoading: false,
  data: {
    count: '',
    next: '',
    previous: '',
    results: [],
  },
}
