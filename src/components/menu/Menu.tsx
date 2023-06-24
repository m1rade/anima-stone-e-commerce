import styled from "styled-components";

export const Menu = () => {
    return (
        <StyledNav>
            <ul>
                <li>
                    <a href="#">Каталог</a>
                </li>
                <li>
                    <a href="#">Акции</a>
                </li>
                <li>
                    <a href="#">Блог</a>
                </li>
                <li>
                    <a href="#">Сотрудничество</a>
                </li>
                <li>
                    <a href="#">Оплата и доставка</a>
                </li>
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    width: 100%;
    height: 50%;
    padding-left: 40px;
    ul {
        list-style: none;

        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 100%;
        height: 100%;
    }

    a {
        text-decoration: none;
        color: inherit;

        font-size: 1em;
        text-transform: uppercase;
    }
`;
