import React from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';
import styled from 'styled-components';

import { Carousel } from 'antd';

import Banner1 from '../components/image/banner/banner1.png';

import Banner2 from '../components/image/banner/banner2.png';

import Banner3 from '../components/image/banner/banner3.png';

const BannerBox = styled.div`
    display: flex;
    padding-top: 30px;
    flex-direction: column;
    flex-wrap: wrap;
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
    /* width: 33%; */
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
`

const HomePage = () => {
    return (
        <DefaultLayout fixHeader>
           
           <BannerBox>
                <BannerCaruselContainer>
                    <Carousel autoplay>
                        <Image height={200} url={Banner1} />
                        <Image height={200} url={Banner2} />
                        <Image height={200} url={Banner3} />
                    </Carousel>
                </BannerCaruselContainer>
                <BannerSection>
                    <BannerContainer>
                         <Image height={100} url={Banner1} />
                    </BannerContainer>
                   <BannerContainer>
                        <Image height={100} url={Banner3} />
                   </BannerContainer>
                 
                </BannerSection>
           </BannerBox>
          
        </DefaultLayout>
    );
}

export default HomePage;
