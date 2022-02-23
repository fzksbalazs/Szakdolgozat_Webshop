import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    background-color: #E5E4E2;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px ;
    font-weight: 500;

`





const Announcement = () => {
  return (
    <Container>
        Mobil telefonok akciósan kizárólag a hónapban!

    </Container>
  )
}

export default Announcement