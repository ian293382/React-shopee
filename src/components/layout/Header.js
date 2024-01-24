import React, { useContext } from 'react';
import styled from 'styled-components';
import Container from '../common/Container';
import Logo from '../image/Shopee.png';
import { ShoppingCartOutlined } from '@ant-design/icons' 

import { Input } from 'antd';
import { Link } from 'react-router-dom';
import AuthContext from '../auth/AuthContext';
const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

const StyledHeader = styled.header`
    background-color: #E95204;
    width: 100vw;
    padding: 16px 0;
`;

const StyledHeaderSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

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
        margin: 0px 8px;
        color: white;
    }
`;


const FlexSearch = styled.div`
    display: flex;
    align-items: center;
`

const Header = () => {
    const { isAuthenticated, logout } = useContext(AuthContext)
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
                        {isAuthenticated ? (
                            <div>
                                <Link to='/login'>Kevin</Link>
                                <span onClick={() => logout()}>登出</span>
                            </div> 
                            ) : (
                            <Link to='/login'>帳號</Link>
                        )}
                      
                    </ToolBar>
                </StyledHeaderSection>
                <StyledHeaderSection>
                    <Link to='/'>
                         <img src={Logo} alt="logo" height={64} />
                    </Link>
               
             
                    <FlexSearch>
                        <Input.Search style={{marginRight: 8 }} placeholder="input search text" onSearch={onSearch} enterButton />
                       
                        <Link to='/cart'>
                             <ShoppingCartOutlined style={{fontSize: 32,color: 'white'}} />
                        </Link>
                    </FlexSearch> 
                </StyledHeaderSection>
            </Container>
        </StyledHeader>
    );
};

export default Header;
