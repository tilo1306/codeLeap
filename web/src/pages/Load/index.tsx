import { Container, Image } from "./style";
import Logo from '../../assets/logo.svg'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAppSelector } from "../../redux/hooks/useAppSelector";
import { useDispatch } from "react-redux";
import { setName } from "../../redux/reducers/userReducer";

export function Load() {
    const dispatch = useDispatch()

    const user = useAppSelector(state => state.user)
    const localStorageUsername = localStorage.getItem("username");

    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            if (user.name === '' && localStorageUsername === null) {
                navigate('/signup')
            } else {
                dispatch(setName(localStorageUsername))
                navigate('/mainscreen')
            }
        }, 5000)
    }, [])

    return (
        <Container>
            <Image src={Logo} />
        </Container>
    )
}