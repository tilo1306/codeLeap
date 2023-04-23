interface Post {
  id: number
  username: string
  created_datetime: string
  title: string
  content: string
}

export interface IDataProps {
  count: string
  next: string | null
  previous: string | null
  results: Post[]
}

export interface IPostProps {
  isLoading: boolean
  data: IDataProps
}
