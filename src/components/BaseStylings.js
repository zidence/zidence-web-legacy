import styled from '@xstyled/styled-components'
import { flexDirection, height } from '@xstyled/system'

export const BigTitle = styled.h1`
  font-size: 4.5em;
  font-weight: 600;
  color: lighterBackground;
`
export const Title = styled.h2`
  font-family: title;
  font-size: 2.5em;
  color: lighterBackground;
`
export const CenterContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${flexDirection}
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`
export const Label = styled.label`
  margin-top: 0.5em;
  color: secondary;
`

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em 0;
`

export const BlankSpace = styled.div`
  ${height}
`
