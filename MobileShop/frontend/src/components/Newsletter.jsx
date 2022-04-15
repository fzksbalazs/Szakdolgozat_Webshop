import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 40vh;
  background: linear-gradient(to right, #ece9e6, #ffffff);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({fontSize: "40px", textAlign: "center"} )}
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:darkgreen;
    cursor: pointer;
    font-weight: 600;
    font-size: large;
    height: 5vh;
    width: 60vh;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Ne maradj le a legújabb termékünkről!</Title>
      <Link to='/product/625980bdf6766d75b191cfd7'>
      <Button>iPhone 13 Pro Green Edition</Button>
      </Link>
    </Container>
  );
};

export default Newsletter;
