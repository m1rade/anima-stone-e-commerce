import styled from "styled-components";
import logoImg from "../../assets/img/logo.png";
import { Icon } from "../../components/icon/Icon";
import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/styled/Container";
import { theme } from "../../styles/theme";
import { Navlinks } from "./navlinks/Navlinks";
import { SearchBar } from "./search-bar/SearchBar";

const headerLinks = ["Каталог", "Акции", "Блог", "Сотрудничество", "Оплата и доставка"];

export const Header = () => {
    return (
        <StyledHeader>
            <HeaderContainer>
                <Logo
                    src={logoImg}
                    styles={{
                        display: "inline-block",
                        width: "289px",
                        height: "115px",
                        gridArea: "1/1 / span 2",
                        alignSelf: "center",
                    }}
                />
                <ContactUs>
                    <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer">
                        <Icon iconId="whatsapp" width="20" height="20" viewBox=" 0 0 20 20" />
                    </a>
                    <a href="#" target="_blank" rel="noreferrer">
                        <Icon iconId="phone" width="20" height="20" viewBox="0 0 20 20" />
                    </a>
                    <span>+7 (499) 258-625-33</span>
                    <SearchBar />
                </ContactUs>
                <Navlinks items={headerLinks} />
            </HeaderContainer>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: ${theme.colors.secondaryBg};
    height: 130px;
    width: 100%;

    position: fixed;
    z-index: 99;
    top: 0;
    right: 0;
    left: 0;
`;

const HeaderContainer = styled(Container)`
    display: grid;
    grid-template-columns: 1fr 3fr;
`;

const ContactUs = styled.div`
    align-self: start;

    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    column-gap: 20px;
    margin: auto 0;

    color: ${theme.colors.fontLight};

    font-size: 19px;
    font-family: Raleway, sans-serif;
    font-weight: 400;
`;
