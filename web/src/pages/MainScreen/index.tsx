import { Container, Image } from "./style";
import Logo from '../../assets/logo.svg'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function MainScreen() {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate('/signup')
        }, 5000)
    }, [])

    return (
        <Container>
            <Image src={Logo} />
        </Container>
    )
}