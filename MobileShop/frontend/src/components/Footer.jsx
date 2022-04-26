import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
  YouTube,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  background: #bdc3c7;
  background: linear-gradient(to top, #8b8b8b, #ffffff);
  border-top: 1px solid lightgray;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>MOBILE SHOP.</Logo>
        <Desc>
          Hozzáértő cég, hozzáértő emberei kinálják neked a lehető legjobb áron
          a mai legmodernebb eszközöket. Legújabb telefonoktól elkezdve a
          legújabb kiegészitőig itt mindent megtalálsz, ez a MOBILE SHOP.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
          <SocialIcon color="E60023">
            <YouTube />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Hasznos linkek</Title>
        <List>
          <ListItem>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Főoldal
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
              Kosár
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="/products/telefon"
              style={{ textDecoration: "none", color: "black" }}
            >
              Telefonok
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="/products/laptop"
              style={{ textDecoration: "none", color: "black" }}
            >
              Laptopok
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="/products/kiegészitők"
              style={{ textDecoration: "none", color: "black" }}
            >
              Kiegészitők
            </Link>
          </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Elérhetőségek</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Győr, Jeldik Ányos 23.
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> 06 20 555 5555
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />{" "}
          fazekas.balazs1@students.jedlik.eu
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
