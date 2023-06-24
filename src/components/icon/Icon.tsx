import icons from "../../assets/icons-sprite.svg";

type Props = {
    iconId: string;
    width?: string;
    height?: string;
    viewBox?: string;
    onClick?: () => void
};

export const Icon = (props: Props) => {
    return (
        <svg
            width={props.width || "50"}
            height={props.height || "50"}
            viewBox={props.viewBox || "0 0 50 50"}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => props.onClick && props.onClick()}
            >
            <use xlinkHref={`${icons}#${props.iconId}`} />
        </svg>
    );
};
