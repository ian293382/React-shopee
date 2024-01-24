import React from 'react';
import DefaultLayout from "../components/layout/DefaultLayout";
import styled from 'styled-components';
import Container from '../components/common/Container';
import LoginImage from '../components/image/LoginImage.JPG';
import LoginForm from '../components/auth/LoginForm';



const StyledLoginBox = styled.div`
    background-color: white;
`;
const StyledLoginContianer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding: 48px 0;

`;

const StyledLoginImage = styled.div`
    width: 100px;
    margin: 0 auto;

`;


const LoginPage = () => {
    return (
        <DefaultLayout>
            <StyledLoginBox>
                <StyledLoginContianer>
                
                    <div>
                        <StyledLoginImage>
                            <img src={LoginImage}alt="LoginImage" width={250} />
                        </StyledLoginImage>
                        <LoginForm>


                        </LoginForm>
                    </div>
                </StyledLoginContianer>
            </StyledLoginBox>
    </DefaultLayout>
    ) 
    
}


export default LoginPage;