import React from "react";
import { FlexContainer } from "../../../components/styled/FlexContainer";
import styled from "styled-components";
import { Icon } from "../../../components/icon/Icon";

type Props = {
    socials: string[];
};

export const Socials: React.FC<Props> = ({ socials }) => {
    return (
        <SocialsContainer gap="12px">
            {socials.map((s, i) => {
                return (
                    <LinkIcon href="#" key={i}>
                        <Icon iconId={s} width="16" height="16" viewBox="0 0 16 16" color="#fff" />
                    </LinkIcon>
                );
            })}
        </SocialsContainer>
    );
};

const SocialsContainer = styled(FlexContainer)`
    margin-top: 25px;
`;

const LinkIcon = styled.a`
    width: 32px;
    height: 32px;

    display: flex;
    justify-content: center;
    align-items: center;
    
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.2);
`;
