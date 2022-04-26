import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #e5e4e2;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  background: #00c6ff; 
  background: -webkit-linear-gradient(
    to right,
    #0072ff,
    #00c6ff
  ); 
  background: linear-gradient(
    to right,
    #0072ff,
    #00c6ff
  ); 
`;

const Announcement = () => {
  return <Container>Mobil telefonok akciósan kizárólag a hónapban!</Container>;
};

export default Announcement;
