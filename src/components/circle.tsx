import { DATA } from "../mocks";
import { DateShow } from "./date-show";
import { Circle, CircleItem, Label, List, Input, Span } from "./styled"

export const CircleComponent = ({data, activeIndex, setActiveIndex}: {data: typeof DATA; activeIndex: number; setActiveIndex: (index: number) => void}) => {
  const totalCount = data.length;
  const corner = 360 / totalCount;
  return (
    <Circle>
        {data.map((item, i) => 
          <Input 
            active={activeIndex} 
            total={totalCount} 
            checked={i === activeIndex} 
            onChange={() => setActiveIndex(i)} 
            index={i} 
            key={item.date[0]}
            corner={corner} 
            name='circle-input' 
            id={`circle-input-id-${i}`} 
            type='radio' 
          />)
        }
        <List 
          active={activeIndex} 
          corner={corner} 
          total={totalCount}>
            {data.map((item, i) => 
              <Label 
              key={item.title}  
              corner={corner} 
              index={i} 
              htmlFor={`circle-input-id-${i}`}>
                <CircleItem 
                  total={totalCount}
                  corner={corner} 
                  index={i}>
                    <Span title={item.title}>
                      {i + 1}
                    </Span>
                </CircleItem>    
              </Label>)}
        </List>
        <svg style={{
          position: 'relative',
          zIndex: 8
        }} width="530" height="530" viewBox="0 0 530 530" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.2" cx="265" cy="265" r="264.5" stroke="#42567A"/>
        </svg>
        <DateShow activeIndex={activeIndex} />
    </Circle>
  )
}

