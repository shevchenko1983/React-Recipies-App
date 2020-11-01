import styled from 'styled-components';
import SearchInput from "./SearchInput";


const HeaderWrapper = styled('div')`
    padding: 10px 20px;
    border-bottom: 2px solid #cfa4bf;
    box-shadow: 0px 5px 7px #c571b76b;
    margin-bottom: 25px;
`;

const Header = () => {

    return(
        <HeaderWrapper className={"header"}>
            <SearchInput/>
        </HeaderWrapper>
    );
};

export default Header;

