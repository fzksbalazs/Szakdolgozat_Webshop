import { useState } from "react";
import styled from "styled-components";
import { userRequest } from "../requestMethods";
import { mobile } from "../responsive";
import { useHistory } from 'react-router-dom';
import { useSelector } from "react-redux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://wallpaperaccess.com/full/279547.jpg") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
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
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;


const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-top: 5px;
`;

const Error = styled.span`
  color: red;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const Middle = styled.div`
  text-align: center;
  padding: 2px;
`;



const Register = () => {

  const [data, setData] = useState({
    username: "",
		email: "",
		password: "",
  });
  const history = useHistory();
  const [error, setError] = useState("");
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  
  
    
  

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data: res } = await userRequest.post('/auth/register', data);
      console.log(res.message);
      history.push("/login");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (

    <Container>
      
      <Wrapper>
        <Title>FIÓK LÉTREHOZÁSA</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="felhasználónév"
            name="username"
            onChange={handleChange}
            value={data.username}
            required
            pattern="^[A-Za-z0-9]{3,16}$"
            onInvalid={e => e.target.setCustomValidity('A felhasználó név 3-16 karakterből állhat, és nem tartalmazhat speciális karaktereket!')}
            onInput={e => e.target.setCustomValidity('')}
                 
           
                     
          />
          <Error>{}</Error>
          <Input
            placeholder="email cím"
            name="email"
            type="email"
            onChange={handleChange}
            value={data.email}
            required
            onInvalid={e => e.target.setCustomValidity('Kérem valós emailt adjon meg!')}
            onInput={e => e.target.setCustomValidity('')}
          />
          <Error></Error>
          <Input
            placeholder="jelszó"
            name="password"
            onChange={handleChange}
            value={data.password}
            required
            pattern= "^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{5,20}$"
            onInvalid={e => e.target.setCustomValidity('A jelszó 5-20 karakterből állhat, és tartalmaznia kell számot!')}
            onInput={e => e.target.setCustomValidity('')}
           
            
          />
          <Error></Error>
          <Middle>
          <Agreement>
            A regisztrációval elfogadom az általános felhasználási feltételeket és tisztában vagyok a benne leirtakkal. 
            <b>
            <Link href="https://www.pirex.hu/vasarloi-informaciok/altalanos-szerzodesi-feltetelek?gclid=Cj0KCQjwr-SSBhC9ARIsANhzu16iLl-EPADqQne0khH9POJtPkPZGh9RhzrADa-Y3m14f2LnqhrglCwaAmEKEALw_wcB">Tudj meg többet</Link>
            </b>
          
          </Agreement>
          <Button  type="submit">LÉTREHOZÁS</Button>
          </Middle>
        </Form>
        <Middle>
        <Link href="/login">MÁR VAN FELHASZNÁLÓI FIÓKOM</Link>
        </Middle>
      </Wrapper>
      
    </Container>
  );
};

export default Register;
