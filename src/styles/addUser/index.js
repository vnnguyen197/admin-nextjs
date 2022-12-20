import styled from 'styled-components'
import { FormLogin, StyleLogin } from '../login'

export const FormRegister = styled(FormLogin)`
  height: 65vh;
`
export const StyleRegister = styled(StyleLogin)`
  padding: 50px;
`
export const LoginDiv = styled.div`
  font-weight: bold;
  height: 50px;
  font-size: 34px;
  color: #000;
  letter-spacing: 0.05em;
`
export const SpanLogin = styled.span`
  display: inline-block;
  animation: wave-anim 1s infinite;
  animation-delay: calc(0.1s * var(--item));
  @keyframes wave-anim {
    0%,
    40%,
    100% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(-20px);
    }
  }
`
export const Heading = styled.div`
  padding: 15px 0;
`
export const LabelLogin = styled.div`
  display: block;
  font-size: 17px;
  color: #000000;
  font-weight: 500;
  text-align: left;
  padding: 15px 0 3px 0;
`
export const ContentInput = styled.div`
  white-space: nowrap;
  position: relative;
`
export const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 2px solid #000000;
  outline: none;
  font-size: 13px;
  background-color: transparent;
  color: #000000;
  text-align: left;
`
export const Button = styled.button`
  margin: 15px auto;
  border: none;
  outline: none;
  width: 200px;
  height: 40px;
  text-align: center;
  padding: 5px 0;
  color: #ffffff;
  font-size: 20px;
  letter-spacing: 1px;
  background-color: #004e9a;
  cursor: pointer;
  border-radius: 50px;
  font-weight: bold;
  letter-spacing: 0.08em;
  transition: all 500ms ease-in-out;
  &:hover {
    background-color: #428cd4;
    color: #000;
  }
`

export const StyleIcons = styled.div`
  text-align: center;
  color: #000000;
`
export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
  margin: auto;
  width: 40px;
  height: 40px;
  text-align: center;
`

export const SignUp = styled.div`
  color: #000000;
  font-weight: bold;
  font-size: 18px;
  padding-bottom: 15px;
`

export const Error = styled.p`
  display: block;
  color: red;
  font-size: 14px;
  margin: 5px 0;
  text-align: left;
  white-space: normal;
`
export const SpanEyeConfirm = styled.p`
  position: absolute;
  z-index: 1;
  left: 90%;
  top: -15px;
  cursor: pointer;
  svg {
    height: 17px;
  }
`
export const SpanEyeRegister = styled.p`
  position: absolute;
  z-index: 1;
  left: 90%;
  top: -15px;
  cursor: pointer;
  svg {
    height: 17px;
  }
`
export const StyleInput = styled.div`
  display: flex;
`
export const BtnLogin = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const Option = styled.div`
  color: #000000;
  padding: 10px 0;
`

export const Question = styled.div`
  font-size: 13px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const P = styled.p`
  padding: 0 0 0 5px;
  margin: 0;
`

