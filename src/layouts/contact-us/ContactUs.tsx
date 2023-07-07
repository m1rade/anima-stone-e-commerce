import styled, { css } from "styled-components";
import bgImage from "../../assets/img/contact-us.webp";
import { FlexContainer } from "../../components/styled/FlexContainer";
import { Button } from "../../components/styled/buttons/Button";

export const ContactUs = () => {
    return (
        <SectionContactUs id="contact-us" bgImage={bgImage}>
            <FormContainer>
                <Title>
                    Остались вопросы? <br /> свяжитесь с нами, мы вам поможем!
                </Title>
                <Subtitle>Заполните форму и мы свяжемся с Вами в ближайшее время</Subtitle>
                <FlexContainer gap="20px">
                    <Field type="text" name="name" placeholder="Ваше имя" required />
                    <Field type="tel" name="phone_number" placeholder="Ваш телефон" required />
                    <FormButton type="submit" btnStyle="send">
                        Отправить
                    </FormButton>
                </FlexContainer>
                <label htmlFor="eula_accepted">
                    <Checkbox id="eula_accepted" name="eula_accepted" type="checkbox" required />
                    Согласен на обработку персональных данных
                </label>
            </FormContainer>
        </SectionContactUs>
    );
};

type SectionPropsType = {
    bgImage?: string;
};
const SectionContactUs = styled.section<SectionPropsType>`
    min-height: 50vh;
    background: linear-gradient(
        87deg,
        rgba(0, 0, 0, 0.93) 12.11%,
        rgba(0, 0, 0, 0.7) 59.96%,
        rgba(255, 255, 255, 0) 100%
    );
    /* ${props =>
        props.bgImage &&
        css<SectionPropsType>`
            background-image: url(${props.bgImage}) no-repeat contain center;
        `} */

    padding: 70px 100px;
`;

const Title = styled.h3`
    color: #fff;

    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 1.4em;
`;

const Subtitle = styled.p`
    color: #fff;

    font-size: 18px;
    font-style: normal;
    font-weight: 400;

    margin-top: -10px;
`;

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
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

const Checkbox = styled.input`
    width: 14px;
    height: 14px;

    border-radius: 2px;
    border: 1px solid #fff;
    background: #fff;

    margin-right: 10px;
`;

const FormButton = styled(Button)`
    min-width: 240px;

    color: #000;
    font-size: 15px;
    font-weight: 700;
`;
