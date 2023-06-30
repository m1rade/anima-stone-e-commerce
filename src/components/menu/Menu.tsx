import styled from "styled-components";

type Props = {
    items: string[];
};

export const Menu: React.FC<Props> = ({ items }) => {
    return (
        <StyledNav>
            <ul>
                {items.map((item, i) => {
                    return (
                        <li key={i}>
                            <a href="#">{item}</a>
                        </li>
                    );
                })}
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    /* width: 100%;
    height: 50%;
    padding-left: 40px; */
    /* ul {
        list-style: none;

        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 100%;
        height: 100%;
    } */

    a {
        text-decoration: none;
        color: inherit;
        font-family: inherit;
        font-size: inherit;
        font-weight: inherit;
    }
`;
