import { styled } from "styled-components"

export const Title = styled.h2`
    position: relative;
    font-size: 56px;
    font-weight: 700;
    color: #42567A;
    width: 25%;
    text-align: left;
    line-height: 62px;
    &:after {
        content: '';
        position: absolute;
        width: 5px;
        height: 100%;
        background: linear-gradient(180deg, #3877EE -5%, #EF5DA8 85%);
        left: -80px;
        top: 0;
    }
`                

export const Label = styled.label<{
    corner: number;
    index: number;
}>`
    width: 100%;
    display: flex;
    position: absolute;
    height: 1px;
    top: 50%;
    left: 50%;
    transform-origin: left center;
    ${(props) => `transform: translate(0%, -50%) rotate(${300 + props.corner * props.index}deg)`};
`

export const List = styled.ul<{
    total: number;
    active: number;
    corner: number;
}>`
    position: absolute;
    width: 265px;
    top: 49.7%;
    left: 50%;
    transform-origin: center center;
    transform: translateX(-50%);
    transition: 1s;
    z-index: 10;
    ${(props) => `transform: translateX(-50%) rotate(-${props.active * props.corner}deg)`};
`

export const Span = styled.p`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 1px solid #42567A20;
    background-color: #42567A;
    transition: .4s;
    transform: scale(0.15);
    color: #42567A;
    font-size: 24px;
    cursor: pointer;
    &:hover {
        transform: scale(1);
        background-color: #F4F5F9;
    };
    &:after {
        content: ${'attr(title)'};
        position: absolute;        
        font-weight: bold;
        top: 50%;
        left: calc(100% + 15px);
        transform: translateY(-50%);
        opacity: 0;
    };
`

export const CircleItem = styled.div<{
    corner: number;
    index: number;
    total: number;
}>`        
    display: flex;
    width: 70px;
    height: 70px;
    margin-left: auto;
    transition: 1s;
`

export const Input = styled.input<{
    corner: number;
    index: number;
    total: number;
    active: number;
}>`
    display: none;

    ${(props) => {
        return `&:checked ~ ${List} ${Label}:nth-child(${props.index + 1}) ${Span} {
            transform: scale(1);
            background-color: #F4F5F9;
            &:after {
                opacity: 1;
                transition: .5s .7s;
            }
        }`
    }}

    ${({corner, total, index}) => {
        let styles = ``
        for(let i = 0; i <= total; i++) {
            styles += `
            &:checked ~ ${List} ${Label}:nth-child(${i}) ${CircleItem} {
                transform: translate(50%, -50%) rotate(${(60 + corner) - corner * i + corner * (index)}deg);
            };
            `
        }
        return styles
    }} 
`



export const Circle = styled.div`
    position: relative;
    margin: 0 auto;
    margin-top: -50px;
    &:after {
        content: '';
        position: absolute;
        bottom: 50%;
        left: 0;
        width: 100%;
        height: 1px;
        background: #42567A20;
        z-index: 0
    }

`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    margin-top: -55px;
`


export const ButtonsContainer = styled.div`
    display: flex;
    gap: 20px;
`

export const Button = styled.button`
    width: 50px;
    aspect-ratio: 1;
    background: #F4F5F9;
    border: 1px solid #42567A;
    border-radius: 50%;
    padding: 0px;
    &:focus {
        outline: none;
    }
    &:disabled {
        opacity: .3;
        cursor: auto;
    }
`

export const DateShowContainer = styled.div`
    position: absolute;
    display: flex;
    font-size: 200px;
    font-weight: bold;
    gap: 100px;
    left: 50%;
    top: 50%;
    z-index: 5;
    transform: translate(-50%, -55%);
    & > div:nth-child(2) {
        user-select: none;
        color: #EF5DA8;
    }
    & > div:nth-child(1) {
        user-select: none;
        color: #5D5FEF;
    }
`

export const Layout = styled.div`
    position: relative;
    width: 1440px;
    margin: 0 auto;
    min-height: 100vh;
    padding: 0 80px;
    padding-top: 80px;
    border-left: 1px solid #42567A20;
    border-right: 1px solid #42567A20;
    &:after {
        content: '';
        position: absolute;
        width: 1px;
        height: 100%;
        background: #42567A20;
        top: 0;
        left: 50%;
    }
`