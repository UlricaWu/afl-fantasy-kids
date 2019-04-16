import React, { Component } from 'react';
import styled from 'styled-components';
import variables from '../Assets/variables';

const Container = styled.div`
  
  padding-top: 30px;
  min-height: 100%;
`;

//for centering
const InnerContainer = styled.div`
  width: 1000px;
  margin: 0 auto;
  display: flex;
`; 
 

const LoginSide = styled.div`
  width: 49.5%;
  margin-right: 1%;
  background-color: white;
  margin-top: 20px;
  padding: 30px;
`;
const RegisterSide = styled.div`
  width: 49.5%;
  background-color: white;
  margin-top: 20px;
  padding: 30px;
`;

const Heading = styled.h1`
  font-family: ${variables.headerFont};
  font-size: 26px;
  text-align: center;
`;


const Form = styled.form`
  padding: 20px 40px;
`;

const InputBox = styled.div`
  > label {
    display: block;
    font-family: ${variables.secondaryFont}
    font-size: 24px;
    margin-bottom: 3px;
  }
  > input {
    border: 1px solid ${variables.lightNavy};
    border-radius: 3px;
    padding: 3px;
    font-family: ${variables.secondaryFont}
    font-size: 18px;
    width: 100%;
    
  }
`;

const SubmitButton = styled.div`
  background-color: ${variables.aflRed};
  border-radius: 3px;
  border: 3px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  width: 80px;
  margin-top: 20px;
  cursor: pointer;

  > span {
    font-family: ${variables.headerFont}
    color: white;
  }
`




export class LoginRegister extends Component {
  render() {
    return (
      <Container>
        <InnerContainer>
          <LoginSide>
            <Heading>Sign in with your AFL Fantastic account</Heading>
            <Form id='sign-in' name='sign-in' autocomplete='off'> 
              <InputBox>
                <label for='sign-in-username'>username</label>
                <input id='sign-in-username' name='sign-in-username'></input>
              </InputBox>
              <InputBox>
                <label for='sign-in-password'>password</label>
                <input id='sign-in-password' name='sign-in-password'></input>
              </InputBox>
              <SubmitButton>
                <span>Login</span>
              </SubmitButton>
            </Form>
          </LoginSide>
          <RegisterSide>
            <Heading>Create an account</Heading>
            <Form>
              <InputBox>
                  <label for='register-username'>username</label>
                  <input id='register-username' name='register-username'></input>
              </InputBox>
              <InputBox>
                  <label for='register-dob'>date of birth:</label>
                  <input id='register-dob' name='register-dob'></input>
              </InputBox>
              <InputBox>
                  <label for='register-username'>username</label>
                  <input id='register-username' name='register-username'></input>
              </InputBox>
              <InputBox>
                  <label for='register-team-name'>team name</label>
                  <input id='register-team-name' name='register-team-name'></input>
              </InputBox>
              <InputBox>
                  <label for='register-email'>email</label>
                  <input id='register-email' name='register-email'></input>
              </InputBox>
              <InputBox>
                  <label for='register-password'>password</label>
                  <input id='register-password' name='register-password'></input>
              </InputBox>
              <InputBox>
                  <label for='register-retype-password'>retype password</label>
                  <input id='register-retype-password' name='register-retype-password'></input>
              </InputBox>
              <SubmitButton>
                <span>Register</span>
              </SubmitButton>
            </Form>
          </RegisterSide>
        </InnerContainer>
      </Container>
    )
  }
}

export default LoginRegister
