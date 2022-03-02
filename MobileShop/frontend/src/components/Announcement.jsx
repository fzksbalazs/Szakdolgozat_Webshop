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
    background: #00c6ff;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #0072ff, #00c6ff);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #0072ff, #00c6ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */



`





const Announcement = () => {
  return (
    <Container>
        Mobil telefonok akciósan kizárólag a hónapban!

    </Container>
  )
}

export default Announcement