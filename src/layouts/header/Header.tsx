import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Icon } from "../../components/icon/Icon";
import { SearchBar } from "./search-bar/SearchBar";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <Menu />
            <Icon iconId="whatsapp" />
            <Icon iconId="phone" />
            <span>+7 (499) 258-625-33</span>
            <SearchBar />
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: #8ad507;
  display: flex;
  align-items: flex-end;
  height: 130px;
`