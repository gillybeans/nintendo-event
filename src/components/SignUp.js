import styled from 'styled-components';
import React, { useState } from 'react';
import EventInfo from './EventInfo';

const Wrapper = styled.div`
    width: 100%;
    height: 755px;
    color: #ff0000;
`;
const EventInfoWrapper = styled.div`
    padding: 64px 32px;
    border: 1px solid red;
`;

const Header = styled.h2`
    text-transform: uppercase;
    text-align: center;
    font-weight: 400;
    font-size: 40px;
`;

const Strong = styled.strong`
    font-weight: 800;
    font-size: 46px;
`;

const SignUp = () => {
    return (
        <Wrapper>
            <EventInfoWrapper>
                <Header>
                    New <Strong>Super Mario 3D</Strong> World
                </Header>
                <EventInfo />
            </EventInfoWrapper>
            <p>lol</p>
        </Wrapper>
    );
};

export default SignUp;
