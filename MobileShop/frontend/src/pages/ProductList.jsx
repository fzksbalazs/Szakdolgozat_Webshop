import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router";
import { useState } from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option`

`;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

 
  return (
    <Container>
       <Announcement />
      <Navbar />
     
      <Title>{cat.toUpperCase()}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>TERMÉKEK SZŰRÉSE:</FilterText>
          <Select name="brand" onChange={handleFilters} >
            <Option disabled>Válasszon márkát</Option>
            <Option>Összes</Option>
            <Option>Samsung</Option>
            <Option>Apple</Option>
                    
          </Select>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Válasszon színt</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>blue</Option>   
            <Option>green</Option>   
            <Option>gold</Option>   
          </Select>
        </Filter>
        <Filter>
          <FilterText>RENDEZÉSI KRITÉRIUM:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            {/* <Option value="newest">Newest</Option> */}
            <Option disabled >Válasszon</Option>
            <Option value="asc">Ár szerint növekvő</Option>
            <Option value="desc">Ár szerint csökkenő</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
