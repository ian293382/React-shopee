import React from 'react';
import styled, { css } from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import Container from '../common/Container';

const PageHeader = styled.div`
    ${(props) => 
    props.fixed &&
    css`
        position: fixed;
    `}
`;

const DefaultLayout = ({ fixHeader, children }) => {
    return (
        <div>
            <PageHeader fixed={fixHeader}>
                <Header />
            </PageHeader>
            <Container>
                {children}
            </Container>
          
            <Footer />
        </div>
    );
};

export default DefaultLayout;
