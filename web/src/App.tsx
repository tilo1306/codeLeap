import { RouterProvider } from "react-router-dom"
import { MainRoutes } from "./routes/MainRoutes"
import { Container } from "./styles"

function App() {
  return (
    <Container>
      <MainRoutes />
    </Container>
  )
}

export default App
