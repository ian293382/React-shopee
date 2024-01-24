import React from 'react';
import DefaultLayout from "../components/layout/DefaultLayout";
import styled from 'styled-components';
import Container from '../components/common/Container';
import LoginImage from '../components/image/LoginImage.JPG';
import Input from 'antd/es/input/Input';
import { UserOutlined } from '@ant-design/icons';
import { Button } from 'antd/es/radio';



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
    background-size: cover;

`;

const LoginForm = () => {
    return  <div>
        <Input size="large" placeholder="請輸入帳號" prefix={<UserOutlined />} />
        <Input size="large" placeholder="請輸入密碼" prefix={<UserOutlined />} />
        <Button>登入</Button>
    </div>
}

const LoginPage = () => {
    return <DefaultLayout>
        <StyledLoginContianer>
            <StyledLoginBox>
                <div>
                    <StyledLoginImage>
                        <img src={LoginImage}alt="LoginImage" width={100} />
                    </StyledLoginImage>
                    <LoginForm>


                    </LoginForm>
                </div>
            </StyledLoginBox>
        </StyledLoginContianer>
 
    </DefaultLayout>
}


export default LoginPage;