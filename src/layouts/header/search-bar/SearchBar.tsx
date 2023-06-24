import React, { useState } from "react";
import { Icon } from "../../../components/icon/Icon";
import styled from "styled-components";

export const SearchBar = () => {
    const [show, setShow] = useState(false);

    const handleShowOnClick = () => {
        setShow(!show);
    }

    return (
        <StyledButton onClick={handleShowOnClick}>
            {show && <input type="text" />}
            <Icon onClick={handleShowOnClick} iconId="search" width="30" height="30" viewBox="0 0 30 30"></Icon>
        </StyledButton>
    );
};

const StyledButton = styled.button`
    border: none;
    background: transparent;
`;
