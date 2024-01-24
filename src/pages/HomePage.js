import React from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Carousel } from 'antd';
import Banner1 from '../components/image/banner/banner1.png';
import Banner2 from '../components/image/banner/banner2.png';
import Banner3 from '../components/image/banner/banner3.png';
import Banner4 from '../components/image/banner/banner4.JPG';
import ProductCard from '../components/product/ProductCards';



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

const CustomerContainer = styled.div`
    margin-bottom: 64px;
`
const ProductContainer = styled.div`
    padding: 4px;
    width: 100%;
    @media (min-width: 577px){
        width: calc(50% - 8px);
        
    }
    @media (min-width: 769px){ /* 內部有card設定padding 4px要用負 magin的回推 */
        width: calc(20% - 8px); /* 考慮 padding 的影響，減去 2*4px */
    }
`;


const ProductCollectionContainer = styled.div`
    margin-bottom: 48px;
    width:100%; //最外層沒有設定多寬會跑掉
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;

`
const MallTextContainer = styled.div`
    display:flex;
    flex-direction:column;
    padding-bottom: 1.875rem;
    border-top: 4px solid #ee4d2d;
    border-bottom: 1px solid #aaaaaa;
`
const MallTextBox = styled.div`
    margin: 30px 50px;

`
const MallTitle = styled.div`
    font-size:20px;
    font-family:Arial;
    line-height: 1.7;
    font-weight: 700;
`

const MallText = styled.div`
    font-family:Arial;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7;
    margin-bottom: 12px;
`
const HomePage = () => {
    return (
        <DefaultLayout fixHeader>
           
           <BannerBox>
                <BannerCaruselContainer>
                    <Carousel autoplay>
                        <Link to='/P001'>
                             <Image height={200} url={Banner1}  />
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
            <CustomerContainer>
                <Link to="/advertising">
                    <Image height={100} url={Banner2} />
                </Link>
            </CustomerContainer>
                <ProductCollectionContainer>
                    <ProductContainer>
                        <Link to='/P005'>
                            <ProductCard title="Banner4"
                                        coverUrl={Banner4}
                                        listPrices="200"
                                        salePrices="100"/>
                        </Link>
                    </ProductContainer>
                    <ProductContainer>
                        <Link to='/P004'>
                             <ProductCard title="Banner3"
                                          coverUrl={Banner3}
                                          listPrices="200"
                                        salePrices="100"/> 
                        </Link>
                      
                    </ProductContainer>
                    <ProductContainer>
                        <Link to='/P002'>
                            <ProductCard title="foo"
                                         coverUrl={Banner1}
                                         listPrices={[100,200]}
                                         salePrices={[200,299]} />
                        </Link>
                       
                    </ProductContainer>
                    <ProductContainer>
                        <Link to='/P005'>
                            <ProductCard title="Banner4"
                                        coverUrl={Banner4}
                                        listPrices="200"
                                        salePrices="100"/>
                        </Link>
                    </ProductContainer>
                    <ProductContainer>
                        <Link to='/P004'>
                             <ProductCard title="Banner3"
                                          coverUrl={Banner3}
                                          listPrices="200"
                                        salePrices="100"/> 
                        </Link>
                      
                    </ProductContainer>
                    <ProductContainer>
                        <Link to='/P002'>
                            <ProductCard title="foo"
                                         coverUrl={Banner1}
                                         listPrices={[100,200]}
                                         salePrices={[200,299]} />
                        </Link>
                       
                    </ProductContainer>
                    <ProductContainer>
                        <Link to='/P005'>
                            <ProductCard title="Banner4"
                                        coverUrl={Banner4}
                                        listPrices="200"
                                        salePrices="100"/>
                        </Link>
                    </ProductContainer>
                    <ProductContainer>
                        <Link to='/P004'>
                             <ProductCard title="Banner3"
                                          coverUrl={Banner3}
                                          listPrices="200"
                                        salePrices="100"/> 
                        </Link>
                      
                    </ProductContainer>
                    <ProductContainer>
                        <Link to='/P002'>
                            <ProductCard title="foo"
                                         coverUrl={Banner1}
                                         listPrices={[100,200]}
                                         salePrices={[200,299]} />
                        </Link>
                       
                    </ProductContainer>
                    <ProductContainer>
                        <Link to='/P005'>
                            <ProductCard title="Banner4"
                                        coverUrl={Banner4}
                                        listPrices="200"
                                        salePrices="100"/>
                        </Link>
                    </ProductContainer>
                    <ProductContainer>
                        <Link to='/P004'>
                             <ProductCard title="Banner3"
                                          coverUrl={Banner3}
                                          listPrices="200"
                                        salePrices="100"/> 
                        </Link>
                      
                    </ProductContainer>
                    <ProductContainer>
                        <Link to='/P002'>
                            <ProductCard title="foo"
                                         coverUrl={Banner1}
                                         listPrices={[100,200]}
                                         salePrices={[200,299]} />
                        </Link>
                       
                    </ProductContainer>
                    <ProductContainer>
                        <Link to='/P005'>
                            <ProductCard title="Banner4"
                                        coverUrl={Banner4}
                                        listPrices="200"
                                        salePrices="100"/>
                        </Link>
                    </ProductContainer>
                    <ProductContainer>
                        <Link to='/P004'>
                             <ProductCard title="Banner3"
                                          coverUrl={Banner3}
                                          listPrices="200"
                                        salePrices="100"/> 
                        </Link>
                      
                    </ProductContainer>
                    <ProductContainer>
                        <Link to='/P002'>
                            <ProductCard title="foo"
                                         coverUrl={Banner1}
                                         listPrices={[100,200]}
                                         salePrices={[200,299]} />
                        </Link>
                       
                    </ProductContainer>
                    <ProductContainer>
                        <Link to='/P005'>
                            <ProductCard title="Banner4"
                                        coverUrl={Banner4}
                                        listPrices="200"
                                        salePrices="100"/>
                        </Link>
                    </ProductContainer>
                    <ProductContainer>
                        <Link to='/P004'>
                             <ProductCard title="Banner3"
                                          coverUrl={Banner3}
                                          listPrices="200"
                                        salePrices="100"/> 
                        </Link>
                      
                    </ProductContainer>
                    <ProductContainer>
                        <Link to='/P002'>
                            <ProductCard title="foo"
                                         coverUrl={Banner1}
                                         listPrices={[100,200]}
                                         salePrices={[200,299]} />
                        </Link>
                       
                    </ProductContainer>
                    <MallTextContainer>
                        <MallTextBox>
                            <MallTitle>花得更少買得更好，全新網路購物體驗</MallTitle>
                            <MallText>
                                蝦皮購物是台灣首屈一指的電商平台，多樣服務包括蝦皮商城、蝦皮超市、蝦皮直送等，
                                更陸續設立蝦皮店到店，提供取貨新選擇，服務更升級！簡易操作介面、清楚的商品評價讓你輕鬆選好物。
                                在蝦皮下單後，透過訂單詳情可以隨時進行包裹查詢，無需擔心收不到你所訂購的商品！蝦皮更承諾保障你的交易安全，
                                提供多種安全可靠的付款方式，街口支付、等行動支付超方便！趕快到蝦皮購物使用多到不行的運費折抵優惠券，
                                並且訂閱蝦拼Plus享$並且訂閱蝦拼Plus享$199起免運吃到飽，開啟全新的購物體驗！
                            </MallText>
                        </MallTextBox>
                        <MallTextBox>
                            <MallTitle>愛上蝦皮購物，馬上找尋線上好物</MallTitle>
                            <MallText>
                                每日的「限時特賣」專區，各種好物限時下殺，還有「品牌旗艦店」專區超優惠折扣，錯過不再有，趕快看看今天的蝦皮精選商品是什麼，把握時間下單！
                                蝦皮超市日用品、零食甜點直送你家，不出門也能一次買齊，超人氣OATLY燕麥奶、白蘭氏雞精、中衛醫療口罩一應俱全！
                            </MallText>
                            <MallText>
                                蝦皮商城網羅國內外各大知名品牌進駐，正品保障、種類繁多、品牌齊全，包括dyson戴森、Levi’s、 Häagen-Dazs哈根達斯、SAMSUNG三星、msi微星、CONVERSE、Logitech羅技、 Xiaomi小米等，
                                月月國際大牌超級品牌日更是讓你買得開心省得更開心！
                            </MallText>
                        </MallTextBox>
                        <MallTextBox>
                            <MallTitle>月月購物節盛典，免運折扣享不完</MallTitle>
                            <MallText>
                                每月 18 號的 18 會員日以及 25 號的商城狂購節定期優惠必跟！遇上月月盛典還有多重優惠、
                                蝦皮運費折抵優惠券大放送！每年一、二月的農曆新年蝦皮年貨節，蝦皮發紅包讓你便宜買年貨，除舊佈新添好運；六月蝦皮 618 年中慶，用最划算折扣開啟炎炎夏日；九月蝦皮 99 購物節，全台灣最大網購盛典，眾多優惠好禮全台瘋搶；十一月的 1111 蝦皮雙 11 購物節，不論單身或死會，
                                都該趁機入手高品質的商品犒賞自己；十二月雙 12 優惠揪你一起狂歡慶祝，聖誕禮物與新年禮物隨你挑。2.2、3.3、4.4、5.5、7.7、8.8、10.10月月有盛典
                                ，最多的折扣優惠活動盡在蝦皮購物
                            </MallText>
                        </MallTextBox>

                     
                    </MallTextContainer>
              
      
                
                </ProductCollectionContainer>
        </DefaultLayout>
    );
}

export default HomePage;
