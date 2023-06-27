import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Icon } from "../../components/icon/Icon";
import { SearchBar } from "./search-bar/SearchBar";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <HeaderContainer>
                <ContactUs>
                    <Icon iconId="whatsapp" width="20" height="20" viewBox=" 0 0 20 20" />
                    <Icon iconId="phone" width="20" height="20" viewBox="0 0 20 20" />
                    <span>+7 (499) 258-625-33</span>
                    <SearchBar />
                </ContactUs>
                <Menu />
            </HeaderContainer>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #000;
    height: 150px;
    width: 100%;
    padding: 20px 100px 35px 75px;

    display: flex;
    color: #fff;

    position: sticky;
    z-index: 99;
    top: 0;
`;
const HeaderContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const ContactUs = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    column-gap: 20px;
`;
