import React from 'react';
import styled from 'styled-components';

type PropsT = {
    text: string | null
}

const ContentWrapper = styled('div')`
   padding: 0px 15px;
   margin-bottom: 20px;
   & p{
        text-align: justify;
   }
`;

const ContentText = ({text}: PropsT) => {
    return(
        <ContentWrapper>
            <p>{text}</p>
        </ContentWrapper>
    );
};

export default ContentText;