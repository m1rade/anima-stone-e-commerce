import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

type Props = {
    items: string[];
};

export const Navlinks: React.FC<Props> = ({ items }) => {
    return (
        <HeaderNav>
            <HeaderList>
                {items.map((items, i) => {
                    return (
                        <HeaderListItem key={i}>
                            <HeaderLink href="#">{items}</HeaderLink>
                        </HeaderListItem>
                    );
                })}
            </HeaderList>
        </HeaderNav>
    );
};

const HeaderNav = styled.nav`
    width: 100%;
    grid-area: 2 / 2;
    align-self: start;
`;

const HeaderList = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const HeaderListItem = styled.li`
    position: relative;

    &::after {
        content: "";
        display: inline-block;
        height: 2px;
        background: ${theme.colors.fontLight};
        position: absolute;
        left: 100%;
        right: 100%;
        bottom: -15px;
        transition: 0.3s all ease;
    }

    &:hover::after {
        right: -20%;
        left: -20%;
        transition: 0.3s all ease;
    }
`;

const HeaderLink = styled.a`
    color: ${theme.colors.fontLight};

    font-size: 18px;
    font-family: Raleway, sans-serif;
    font-weight: 400;
    text-transform: uppercase;
`;
