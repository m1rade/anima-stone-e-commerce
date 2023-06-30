import styled from "styled-components";
import logoImg from "../../assets/img/logo-footer.png";
import { Logo } from "../../components/logo/Logo";
import { FlexContainer } from "../../components/styled/FlexContainer";
import { Menu } from "../../components/menu/Menu";
import { Socials } from "./socials/Socials";

const MenuItems = ["Delivery & returns", "FAQ", "Contacts", "Blog"];
const catalogueItems = ["New arrivals", "Trending now", "Sales", "Brands"];
const socialsItems = ["Facebook", "Instagram", "Twitter", "Youtube", "Pinterest"];

export const Footer = () => {
    return (
        <FooterContainer>
            <Logo src={logoImg} styles={{ height: "108px" }} />
            <FlexContainer direction="column" justifyContent="flex-start" gap="4px">
                <NavHeader>Меню</NavHeader>
                <Menu items={MenuItems} />
            </FlexContainer>
            <FlexContainer direction="column" justifyContent="flex-start" gap="4px">
                <NavHeader>Каталог</NavHeader>
                <Menu items={catalogueItems} />
            </FlexContainer>
            <FlexContainer direction="column" justifyContent="flex-start" gap="4px">
                <NavHeader>Контакты для связи</NavHeader>
                <NavItem>
                    Телефон: <span>(405) 555-0128</span>
                </NavItem>
                <NavItem>
                    Почта: <span>hello@createx.com</span>
                </NavItem>
                <Socials socials={socialsItems} />
            </FlexContainer>
            <Address>
                <small>674 Gonzales Drive. Washington, PA 15301</small>
            </Address>
        </FooterContainer>
    );
};

const FooterContainer = styled.footer`
    max-height: 50vh;

    background-color: #000;
    color: #fff;

    display: grid;
    grid-template-rows: 5fr 3fr;
    grid-template-columns: 5fr repeat(3, 3fr);

    justify-items: center;
    align-items: start;
    grid-row-gap: 30px;

    padding-top: 40px;
`;

const Address = styled.div`
    grid-column: span 4;
    width: 100%;
    text-align: center;

    padding: 20px 0;
    
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    
    small {
        color: #fff;
        font-size: 16px;
        font-weight: 400;
    }
`;

const NavHeader = styled.span`
    color: #fff;

    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;

    margin-bottom: 12px;
`;

const NavItem = styled.span`
    color: #fff;
    font-size: 16px;
    font-weight: 400;

    span {
        opacity: 0.6;
    }
`;
