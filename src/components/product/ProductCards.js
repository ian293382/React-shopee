import React from 'react'
import { Card } from 'antd';
import styled from 'styled-components';

//發現不是正方形的image
const SquareImage = styled.div`
    padding-top: 100%;
    background-position: center;
    background-image: ${ (props) => `url(${props.src})` };
    background-size: cover;
    background-repeat: no-repeat;
`
const ListPricesLabel = styled.span`
    color: #777;
    text-decoration-line: line-through;
    margin-right: 4px;
`

const SalePricesLabel = styled.span`
    color: #ee4c2d;

`

const ProductCard = ({coverUrl, 
                      title,
                      listPrices,
                      salePrices,
                      discountPercentage,
                      saleNumber,
                      rating,
                      isLike} ) => {
    return  (<Card
                hoverable

                cover={<SquareImage src={coverUrl} />}
            >
                <Card.Meta title={title} description={<div>
                    {listPrices && listPrices.length > 0 && (
                        <ListPricesLabel>${listPrices[0]}</ListPricesLabel>
                    ) }
                    {salePrices && salePrices.length > 0 && (
                        <SalePricesLabel>${salePrices[0] } </SalePricesLabel>
                    ) }
                </div>}  />
            </Card>
    );
}


export default ProductCard;