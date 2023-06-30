import styled from "styled-components";
import interiorImg from "../../../../assets/img/interior.webp";
import { Title } from "../../../../components/title/Title";

export const Advantages = () => {
    return (
        <AdvantagesSection>
            <Title name="наши преимущества - " coloredSegment="ваш результат" />
            <ol style={{ margin: "100px" }}>
                <li>Новейшее итальянское оборудование Donatoni</li>
                <li>Собственное произодство</li>
                <li>Широкий ассортимент разнообразных камней</li>
                <Img src={interiorImg} alt="stones" />
                <li>Изделия из наличия</li>
                <li>Работаем под ключ</li>
                <li>Консультации по уходу за иделием из камня</li>
            </ol>
        </AdvantagesSection>
    );
};

const AdvantagesSection = styled.section``;

const Img = styled.img`
    object-fit: cover;
    width: 23em;
    height: 36.6em;
`;
