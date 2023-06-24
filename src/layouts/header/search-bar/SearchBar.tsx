import { useState } from "react";
import styled, { css } from "styled-components";
import { Icon } from "../../../components/icon/Icon";

export const SearchBar = () => {
    const [show, setShow] = useState(false);

    const handleShowSearchBar = () => {
        setShow(!show);
    };

    return (
        <StyledButton show={show}>
            {show && <Search />}
            <Icon onClick={handleShowSearchBar} iconId="search" width="30" height="30" viewBox="0 0 30 30"></Icon>
        </StyledButton>
    );
};

type ButtonProps = {
    show?: boolean;
};

const StyledButton = styled.button<ButtonProps>`
    border: none;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;

    padding-left: 10px;

    svg {
        fill: white;
    }

    ${props =>
        props.show &&
        css<ButtonProps>`
            border: 1px solid rgba(255, 255, 255, 0.81);
            box-shadow: 20px 4px 100px 0px rgba(0, 0, 0, 0.1);

            ${Search} {
                border-right: none;
            }
        `}
`;

const Search = styled.input.attrs(() => ({
    type: "search",
    placeholder: "Поиск...",
}))`
    background: transparent;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;

    color: #9c9c9c;
`;
