export interface Post {
  id?: number
  username?: string
  created_datetime?: string
  title: string
  content: string
}

export interface Request {
  count: string
  next: string | null
  previous: string | null
  results: Post[]
}
