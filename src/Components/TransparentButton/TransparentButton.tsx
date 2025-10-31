import styled from 'styled-components';
import type { FC, ReactNode } from 'react';

const BaseButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: start;
    border-radius: 16px;
    color: white;
    outline: none;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
    padding: 16px;

    transition: 0.3s;

    &:hover {
        transform: scale(0.98);
    }
    &:active {
        transform: scale(0.95);
    }
`;

const TransparentButtonWhite = styled(BaseButton)`
    border: 1px solid rgba(255, 255, 255, 0.25);
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.2);
`;

const TransparentButtonRed = styled(BaseButton)`
    border: 1px solid rgba(251, 100, 182, 0.5);
    background: rgba(246, 51, 154, 0.2);
    box-shadow: 0px 10px 15px rgba(246, 51, 154, 0.2);
`;

const TransparentButtonBlue = styled(BaseButton)`
    border: 1px solid rgba(81, 162, 255, 0.4);
    background: rgba(43, 127, 255, 0.2);
    box-shadow: 0px 10px 15px rgba(43, 127, 255, 0.2);
`;

export const EColor = {
    Red: 'Red',
    White: 'White',
    Blue: 'Blue',
} as const;

export type EColor = (typeof EColor)[keyof typeof EColor];

interface IProps {
    color: EColor;
    children: ReactNode;
    onClick: () => void;
}

const TransparentButton: FC<IProps> = ({ color, children, onClick }) => {
    switch (color) {
        case EColor.Blue:
            return <TransparentButtonBlue onClick={onClick}>{children}</TransparentButtonBlue>;
        case EColor.Red:
            return <TransparentButtonRed onClick={onClick}>{children}</TransparentButtonRed>;
        case EColor.White:
            return <TransparentButtonWhite onClick={onClick}>{children}</TransparentButtonWhite>;
    }
};

export default TransparentButton;
