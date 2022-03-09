import React, { useEffect } from "react";
import SendIcon from '@mui/icons-material/Send';
import styled from "styled-components";
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}

`;

const InputContainer = styled.div`
  width: 50%;
  justify-content: space-between;
  ${mobile({ width: "80%" })}
`;




const Button = styled.button`
  
  background-color: teal;
  color: white;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
 <InputContainer>
         <FormControl fullWidth >
          <InputLabel htmlFor="outlined-adornment-amount">Email</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            endAdornment={<InputAdornment position="end"><IconButton style={{backgroundColor:'teal', color: 'white'}}><SendIcon/> </IconButton></InputAdornment>}
            label="Email"
          />
        </FormControl>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
