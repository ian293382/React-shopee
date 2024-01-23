
import React from 'react';
import styled, { css } from 'styled-components';
import Container from '../common/Container';
import { Link } from 'react-router-dom';
import FourLogo from '../image/four-logo-top.png';
import Remark from '../image/remark.png';
import Qrcode from '../image/Qrcode.png';
import Appstore from '../image/Appstore.png';
import GooglePay from '../image/GooglePay.png';


const StyledFooter = styled.div`
    background-color: #fbfbfb;
    padding: 40px 0;
`;

const FootColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    width:33%;
    @media (min-width: 760px){
        width: 20%;
    }
    a {
        margin-bottom: 6px;
        color: rgba(0,0,0,0.54);
    }
`
const FooterColumntitle = styled.h4`
    font-weight: bold;
    margin-bottom: 12px;

`

const Box = styled.div`
display: flex;
flex-wrap: wrap;
`
const ListColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 12px;
    .img {
        margin: 12px;
        width: 100%;

    } 
`


const Footer = () => {
    return <StyledFooter>
            <Container>
               <Box>
                    <FootColumn>
                        <FooterColumntitle>客服中心</FooterColumntitle>
                        <Link to='#'>幫助中心</Link>
                        <Link to='#'>幫助中心</Link>
                        <Link to='#'>幫助中心</Link>
                    </FootColumn>

                    <FootColumn>
                        <FooterColumntitle>關於蝦皮</FooterColumntitle>
                        <Link to='#'>加入我們</Link>
                        <Link to='#'>加入我們</Link>
                        <Link to='#'>加入我們</Link>
                    </FootColumn>
                    <FootColumn>
                        <FooterColumntitle>物流合作</FooterColumntitle>
                        <img src={FourLogo} alt="FourLogo" width="80%" style={ {marginButtom: "8px"} }></img>
                        <FooterColumntitle>蝦皮24小時包裝簽章</FooterColumntitle>
                        <img src={Remark} alt="Remark" width="60px"></img>
                    </FootColumn>
                    <FootColumn>
                        <FooterColumntitle>關注我們</FooterColumntitle>
                        <Link to='#'>聯絡中心</Link>
                        <Link to='#'>聯絡中心</Link>
                        <Link to='#'>聯絡中心</Link>
                        <Link to='#'>聯絡中心</Link>
                        <Link to='#'>聯絡中心</Link>
                        <Link to='#'>聯絡中心</Link>
                        <Link to='#'>聯絡中心</Link>
                     
                    </FootColumn>
                    <FootColumn>
                        <FooterColumntitle>下載蝦皮</FooterColumntitle>
                        <Box>
                            <img src={Qrcode} alt="Qrcode" width='50%'></img>
                            <ListColumn>
                                <img src={Appstore} alt="Applestore"></img>
                                <img src={GooglePay} alt="GooglePay"></img>
                            </ListColumn>
                        </Box>
                     
                    </FootColumn>
               </Box>
             </Container>
        </StyledFooter>;
};

export default Footer;