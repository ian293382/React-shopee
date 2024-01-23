import React from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Carousel } from 'antd';

import Banner1 from '../components/image/banner/banner1.png';

import Banner2 from '../components/image/banner/banner2.png';

import Banner3 from '../components/image/banner/banner3.png';

import Banner4 from '../components/image/banner/banner4.JPG';


const BannerBox = styled.div`
    display: flex;
    padding-top: 30px;
    flex-direction: column;
    flex-wrap: wrap;
    box-sizing: border-box;
    @media (min-width: 769px) {
        flex-direction: row;
        flex-wrap: nowrap;
    }

`
const BannerCaruselContainer = styled.div`
    width: 100%;
    padding: 4px;
    @media (min-width: 769px) {
        width: 66.67%;
    }
    
`

const BannerContainer = styled.div`
    width: 100%;
    
`


const Image = styled.div`
    height: ${(props) => props.height}px;
    width: 100%;
    background-image: ${(props) => `url(${props.url})`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    
`;

const BannerSection = styled.div`
    width:100%;
    padding: 4px;
    box-sizing: border-box;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    @media (min-width: 769px) {
            width: 33.3%;
        }
`

const BannerFeatureContainer = styled.div`
    width: 100%; //要設定外層
    padding: 1px;
    display: flex;
    background-color: white;
    padding: 8px 0;
    margin-bottom:24px;
    border-bottom: 1px solid #aaa ;
    border-left: 1px solid  #aaa;
    border-right: 1px solid  #aaa;
`

const BannerFeatureColumn = styled.div`
    width: 33%;  //才知道要展開三個
    padding: 1px;
    text-align: center;
`


const HomePage = () => {
    return (
        <DefaultLayout fixHeader>
           
           <BannerBox>
                <BannerCaruselContainer>
                    <Carousel autoplay>
                        <Link to='/P001'>
                             <Image height={200} url={Banner1} />
                        </Link>
                        <Link to='/P002'>
                            <Image height={200} url={Banner4} />
                        </Link>
                        <Link to='/P003'>
                             <Image height={200} url={Banner3} />
                        </Link>
                    </Carousel>
                </BannerCaruselContainer>
                <BannerSection>
                    <BannerContainer>
                        <Link to='/P004'>
                            <Image height={100} url={Banner3} />
                        </Link>
                    </BannerContainer>
                    <BannerContainer>
                        <Link to='/P005'>
                             <Image height={100} url={Banner4} />
                        </Link>     
                    </BannerContainer>
                   
                </BannerSection>
       
           </BannerBox>
           <BannerFeatureContainer>
                        <BannerFeatureColumn> 十五天鑑賞期</BannerFeatureColumn>
                        <BannerFeatureColumn> 退貨無負擔</BannerFeatureColumn>
                        <BannerFeatureColumn> 假一賠二</BannerFeatureColumn>
            </BannerFeatureContainer>
            <Link to="/advertising">
                <Image height={100} url={Banner2} />
            </Link>
        </DefaultLayout>
    );
}

export default HomePage;
