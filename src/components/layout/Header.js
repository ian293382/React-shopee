import React from 'react';
import styled from 'styled-components';
import Container from '../common/Container';
import Logo from '../image/Shopee.png';

const StyledHeader = styled.header`
    background-color: #E95204;
    width: 100vw;
    height: 200px;
`;

const StyledHeaderSection = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 8px;
`

const Navigator = styled.div`
   a{
        margin: 0px 4px;
        color: white;
        text-decoration: none;
    }
    
`;
const ToolBar = styled.div`
    a{
        margin: 0px 6px;
        color: white;
    }
`;


const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <StyledHeaderSection>
                    <Navigator>
                        <a href="#">蝦皮購物</a>
                        <a href='#'>下載</a>
                        <a href='#'>追蹤我們</a>
                        <a href='#'>部落格</a>
                    </Navigator>
                    <ToolBar>
                        <a href="#">通知</a>
                        <a href='#'>幫助中心</a>
                        <a href='#'>帳號</a>
                    </ToolBar>
                </StyledHeaderSection>
                <StyledHeaderSection>
                    <a href='/'>
                         <img src={Logo} alt="logo" height={64} />
                    </a>
               
             
                    <div>
                        <span>Search</span>
                        <span>Cart</span>
                    </div> 
                </StyledHeaderSection>
            </Container>
        </StyledHeader>
    );
};

export default Header;
