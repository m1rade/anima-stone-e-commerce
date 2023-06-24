import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Icon } from "../../components/icon/Icon";
import { SearchBar } from "./search-bar/SearchBar";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <div className="header-container">
                <div className="contacts">
                    <Icon iconId="whatsapp" width="20" height="20" viewBox=" 0 0 20 20" />
                    <Icon iconId="phone" width="20" height="20" viewBox="0 0 20 20" />
                    <span>+7 (499) 258-625-33</span>
                    <SearchBar />
                </div>
                <Menu />
            </div>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #8ad507;
    height: 140px;
    width: 100vw;
    padding: 20px 75px;

    display: flex;

    .header-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        
    }

    .contacts {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        column-gap: 20px;
    }
`;
