import { useNavigate } from "react-router-dom";
import Button from "@restart/ui/esm/Button";
import { useContext } from "react";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

const LoginScreen = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    const action = {
      type: types.login,
      payload: { name: "Marcos" },
    };

    dispatch(action);

    navigate("/marvel", {
      replace: true,
    });
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <Button className="btn-primary" onClick={handleLogin}>
        Login
      </Button>
    </div>
  );
};

export default LoginScreen;
