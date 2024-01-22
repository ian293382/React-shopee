
import React from 'react';
import styled, { css } from 'styled-components';
import Container from '../common/Container';

const StyledFooter = styled.div`
    background-color: #fbfbfb;
    padding: 40px 0;
`;

const Footer = () => {
    return <StyledFooter>
            <Container>
                This is footer
             </Container>
        </StyledFooter>;
};

export default Footer;