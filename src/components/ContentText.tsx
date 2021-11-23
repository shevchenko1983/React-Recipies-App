import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled('div')`
   padding: 0px 15px;
   margin-bottom: 20px;
   & p{
        text-align: justify;
   }
`;

const ContentText = ({text}) => {
    return(
        <ContentWrapper>
            <p>{text}</p>
        </ContentWrapper>
    );
};

export default ContentText;