import { useNavigate } from 'react-router-dom';
import Button from "@restart/ui/esm/Button";

const LoginScreen = () => {

    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/marvel', {
            replace: true
        });
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <Button className="btn-primary" onClick={ handleLogin }>
                Login
            </Button>
        </div>
    )
}

export default LoginScreen
