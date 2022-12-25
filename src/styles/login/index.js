import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const ContentRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #e0e0e0;
  background-position: center;
`;

export const StyleImg = styled.img`

`

export const ContentLeft = styled.div`
  width: 50%;
  padding-right: 250px;
  background: #e0e0e0;
`;

export const FormLogin = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const StyleLogin = styled.div`
  padding: 0 70px;
  text-align: center;
  width: 100%;
  max-width: 400px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 50px;
  background: #e0e0e0;
  box-shadow: inset 20px 20px 60px #bebebe, inset -20px -20px 60px #ffffff;
`;

export const LoginDiv = styled.div`
  margin-bottom: 40px;
  font-weight: bold;
  height: 50px;
  font-size: 35px;
  color: #000;
  -webkit-box-reflect: below -10px linear-gradient(transparent, rgba(0, 0, 0, 0.3));
  letter-spacing: 0.1em;
`;

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
`;

export const Heading = styled.div`
  padding: 15px 0;
`;

export const LabelLogin = styled.div`
  display: block;
  font-size: 17px;
  color: #000;
  font-weight: 500;
  text-align: left;
`;
export const ContentInput = styled.div`
  white-space: nowrap;
  position: relative;
`;
export const Input = styled.input`
  padding: 5px;
  width: 100%;
  border: none !important;
  border-bottom: 2px solid #000 !important;
  outline: none;
  font-size: 15px;
  text-align: left;
  background: transparent !important;
`;

export const SpanEye = styled.p`
  position: absolute;
  z-index: 1;
  left: 90%;
  top: -10px;
  cursor: pointer;
  svg {
    height: 17px;
  }
`;

export const Button = styled.button`
  margin: 25px auto;
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 10px 0;
  color: #000;
  font-size: 24px;
  letter-spacing: 1px;
  background-color: #004e9a;
  cursor: pointer;
  border-radius: 50px;
  font-weight: bold;
  letter-spacing: 0.08em;
  transition: all 500ms ease-in-out;
  background: linear-gradient(145deg, #cacaca, #f0f0f0);
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  &:hover {
    color: #fff;
    background: linear-gradient(145deg, #000, #ffffff);
  }
`;

export const Error = styled.p`
  display: block;
  color: red;
  font-size: 14px;
  margin: 5px 0;
  text-align: left;
  white-space: normal;
`