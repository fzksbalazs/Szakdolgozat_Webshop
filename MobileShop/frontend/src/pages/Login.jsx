import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://www.teahub.io/photos/full/55-552795_wallpaper-laptop-macbook-iphone-apple-journal-laptop-hd.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  text-align: center;
`;

const Error = styled.span`
  color: red;
`;

const Middle = styled.div`
  text-align: center;
  padding: 1px;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.user);
  const handleClick = (e) => {
    e.preventDefault(); //ne refreshelje az oldalt
    login(dispatch, { username, password });
  };

  return (
    <Container>
      <Wrapper>
        <Title>BEJELENTKEZÉS</Title>
        <Form>
          <Input
            required
            placeholder="felhasználónév"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            required
            type={"password"}
            placeholder="jelszó"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Middle>
            <Button onClick={handleClick}>BEJELENTKEZÉS</Button>
          </Middle>
          {error && <Error>Something went wrong...</Error>}
          <Link>ELFELEJTETTE A JELSZAVÁT?</Link>

          <Link href="/register">FIÓK LÉTREHOZÁSA</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
