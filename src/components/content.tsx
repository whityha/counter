import { useState } from 'react'
import { CircleComponent } from './circle'
import { Title, Layout } from './styled'
import { Buttons } from './buttons'
import { Slider } from './slider/slider'
import { DATA } from '../mocks'

export const Content = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [currentDATA, setCurrentData] = useState(DATA);
  return (
    <Layout>
      <select defaultValue={6} onChange={(e) => setCurrentData(DATA.slice(Number(-e.target.value)))}>
        {Array(5).fill(0).map((_, i) => <option value={i + 2}>{i + 2}</option>)}
      </select>
      <Title>Исторические даты</Title>
      <CircleComponent 
        data={currentDATA}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex} />
      <Buttons data={currentDATA} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <Slider data={currentDATA} activeIndex={activeIndex} />
    </Layout>
  )
}
