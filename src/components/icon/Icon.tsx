import styled from "styled-components";
import icons from "../../assets/icons-sprite.svg";

type Props = {
    iconId: string;
    width?: string;
    height?: string;
    viewBox?: string;
    color?: string;
    onClick?: () => void;
};

export const Icon = (props: Props) => {
    return (
        <ColoredSvg
            width={props.width || "50"}
            height={props.height || "50"}
            viewBox={props.viewBox || "0 0 50 50"}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color={props.color && props.color}
            onClick={() => props.onClick && props.onClick()}
            >
            <use xlinkHref={`${icons}#${props.iconId}`} />
        </ColoredSvg>
    );
};


const ColoredSvg = styled.svg<Pick<Props, 'color'>>`
    fill: ${props => props.color || "white"};
`