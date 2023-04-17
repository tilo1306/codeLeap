import { Route, Routes } from "react-router-dom"
import { MainScreen } from "../pages/MainScreen"
import { SignUp } from "../pages/SignUp"


export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainScreen />} />
            <Route path="/signup" element={<SignUp />} />

        </Routes>
    )
}