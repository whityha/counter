import { ButtonsContainer, Button, Container } from "./styled";
import { DATA } from "../mocks";
import { Dispatch, SetStateAction } from "react";



export const Buttons = ({data, activeIndex, setActiveIndex}: {data: typeof DATA; activeIndex: number; setActiveIndex: Dispatch<SetStateAction<number>>}) => {
  return (
    <Container>
        <div>0{activeIndex + 1} / 0{data.length}</div>
        <ButtonsContainer>
            <Button type='button' disabled={activeIndex === 0} onClick={() => setActiveIndex((i: unknown) => (i as number - 1))}>
                <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.49988 0.750001L2.24988 7L8.49988 13.25" stroke="#42567A" strokeWidth="2"/>
                </svg>
            </Button>
            <Button type='button'disabled={activeIndex === data.length - 1} onClick={() => setActiveIndex((i: unknown) => (i as number + 1))}>
                <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.50012 0.750001L7.75012 7L1.50012 13.25" stroke="#42567A" strokeWidth="2"/>
                </svg>
            </Button>
        </ButtonsContainer>
    </Container>
  )
}
