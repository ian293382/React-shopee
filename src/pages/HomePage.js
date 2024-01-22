import React from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';
import styled from 'styled-components';
import ClearFix from '../components/common/ClearFix';


const HomePage = () => {
    return (
        <DefaultLayout fixHeader>
           <ClearFix />
            Homepage
            <p>lorem</p>
        </DefaultLayout>
    );
}

export default HomePage;
