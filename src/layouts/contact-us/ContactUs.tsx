import styled from "styled-components";
import bgImage from "../../assets/img/contact-us.webp";
import { Container } from "../../components/styled/Container";
import { FlexContainer } from "../../components/styled/FlexContainer";
import { Button } from "../../components/styled/buttons/Button";
import { theme } from "../../styles/theme";

export const ContactUs = () => {
    return (
        <SectionContactUs id="contact-us">
            <Container>
                <FormContainer>
                    <Title>
                        Остались вопросы? <br /> свяжитесь с нами, мы вам поможем!
                    </Title>
                    <Subtitle>Заполните форму и мы свяжемся с Вами в ближайшее время</Subtitle>
                    <FlexContainer gap="20px">
                        <Field type="text" name="name" placeholder="Ваше имя" required />
                        <Field type="tel" name="phone_number" placeholder="Ваш телефон" required />
                        <FormButton btnStyle="send">Отправить</FormButton>
                    </FlexContainer>
                    <label htmlFor="eula_accepted">
                        <Checkbox id="eula_accepted" name="eula_accepted" required />
                        Согласен на обработку персональных данных
                    </label>
                </FormContainer>
            </Container>
        </SectionContactUs>
    );
};

const SectionContactUs = styled.section`
    background-image: linear-gradient(
            87deg,
            rgba(0, 0, 0, 1) 12.11%,
            rgba(0, 0, 0, 0.8) 59.96%,
            rgba(255, 255, 255, 0) 100%
        ),
        url(${bgImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 30%;

    padding: 70px 0;
`;

const Title = styled.h3`
    color: ${theme.colors.fontLight};

    font-size: 28px;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 1.4em;
`;

const Subtitle = styled.p`
    color: ${theme.colors.fontLight};

    font-size: 18px;
    font-weight: 400;

    margin-top: -10px;
`;

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 20px;

    label {
        color: #f3f3f3;
        font-size: 14px;
        font-weight: 400;
    }
`;

const Field = styled.input`
    background-color: transparent;
    color: #f3f3f3;

    padding: 15px 20px;
    min-width: 240px;

    border: 1px solid rgba(243, 243, 243, 0.7);
    outline: none;

    font-size: 14px;
    font-weight: 400;
`;

const Checkbox = styled.input.attrs(props => ({
    type: "checkbox",
}))`
    width: 14px;
    height: 14px;

    border-radius: 2px;
    border: 1px solid #fff;
    background: #fff;

    margin-right: 10px;
`;

const FormButton = styled(Button).attrs(props => ({
    type: "submit",
}))`
    min-width: 240px;

    color: #000;
    font-size: 15px;
    font-weight: 700;
`;
