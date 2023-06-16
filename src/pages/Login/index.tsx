import { ChangeEvent, useContext, useState } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };
  const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    console.log("esta logando");
    if (email && password) {
      const isLogged = await auth.signin(email, password);

      if (isLogged) {
        navigate("/private");
      } else {
        alert("Não foi possível fazer login");
      }
    }
  };

  return (
    <div>
      <h2>Página fechada</h2>
      <input
        type="text"
        value={email}
        onChange={handleEmailInput}
        placeholder="Digite o seu email"
      />
      <input
        type="password"
        value={password}
        onChange={handlePasswordInput}
        placeholder="Digite a sua senha"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
