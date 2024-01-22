import React from 'react'
import styled, { css } from 'styled-components';
import Header  from './Header';


const PageHeader = styled.div`
    ${(props) => 
    props.fixed &&
    css`
        position: fixed;
    `}

`;

const DefaultLayout = ({ fixHeader, children}) => {
    return (
        <div>
            <PageHeader fixed={fixHeader}>
                <Header />
            </PageHeader>
            

            {children}
            <footer>This is footer</footer>
        </div>
    );
};

export default DefaultLayout;