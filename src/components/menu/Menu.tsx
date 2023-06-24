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
    width: 80%;

    ul {
        list-style: none;
        
        display: flex;
        justify-content: space-between;
    }

    a {
        text-decoration: none;
        color: black;
    }
`;
