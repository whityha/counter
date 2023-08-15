import { TransitionStatus } from "react-transition-group";
import { styled } from "styled-components";

const opacityStyles = {
    'entering': "opacity: 0; transform: translateY(10px);",
    'entered': 'opacity: 1; transform: translateY(0px);',
    'exiting': 'opacity: 1; transform: translateY(0px);',
    'exited': 'opacity: 0; transform: translateY(10px);',
    'unmounted': 'opacity: 0'
}

export const SliderContainer = styled.div<{state: TransitionStatus}>`
    display: flex;
    align-items: center;
    margin-top: 56px;
    transition: .5s;
    ${(props) => `${opacityStyles[props.state]}`}
`

const ButtonPosition = {
    prev: `
        transform: translate(-60px);
    `,
    next: `
        transform: translate(60px);
    `
}

export const Button = styled.button<{type: 'prev' | 'next'}>`
    ${(props) => ButtonPosition[props.type]}
    width: 40px;
    aspect-ratio: 1;
    color: #42567A;
    background: #F4F5F9;
    box-shadow: 0px 0px 15px 0px #3877EE1A;
    border: none;
    border-radius: 50%;
    transition: .3s;
    &:focus {
        outline: none;
    }
    &:disabled {
        opacity: 0;
        cursor: auto;
    }
`

export const Icon = styled.svg`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const SlideTitle = styled.h5`
    text-align: left;
    font-size: 25px;
    line-height: 30px;
    color: #3877EE;
    margin-bottom: 15px;
`

export const Text = styled.p`
    text-align: left;
    color: #42567A;
    font-size: 20px;
    line-height: 30px;
`