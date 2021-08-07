import { useState } from 'react'
import styled from 'styled-components'

const MainWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`

export default function Main() {
  const [highlight, setHighlight] = useState('squirtle')

  return (
    <MainWrapper>
      <section>
        <h1>This week's highlight: {highlight}</h1>
      </section>
    </MainWrapper>
  )
}
