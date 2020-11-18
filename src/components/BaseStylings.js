import styled from '@xstyled/styled-components'
import { flexDirection } from '@xstyled/system'

export const BigTitle = styled.h1`
  font-family: title;
  font-size: 3em;
  letter-spacing: 0.15em;
  color: primary;
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
