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
  justify-content: center;
  background-image: url("https://mega.com.vn/media/news/1706_hinh-nen-phi-hanh-gia50.jpg");
  /* background-image: url('https://mega.com.vn/media/news/1706_hinh-nen-phi-hanh-gia107.jpg'); */
  background-position: center;
`;

export const ContentLeft = styled.div`
  width: 50%;
  background-color: #000;
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
  box-shadow:  20px 20px 80px #bebebe;
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
  border-radius: 50px;
  background: linear-gradient(145deg, #e6e6e6, #ffffff);
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
  border: 1px solid #fff;
  &:hover {
    color: blue;
  }
`;
