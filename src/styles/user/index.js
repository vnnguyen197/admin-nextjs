import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  padding: 20px 0 20px;
  width: 100%;
  display: flex;
  background-color: #d9ecf2;
`;
export const SliderBar = styled.div`
  width: 15%;
  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);
  border-radius: 20px;
  margin-left: 20px;
  background-color: #fafafa;
`;
export const ContentTable = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  margin: 0 15px;
  background-repeat: no-repeat;
  width: 85%;
  padding: 10px 0;
  box-shadow: 0 2px 8px rgb(0 0 0 / 25%);
  border-radius: 15px;
  overflow-y: auto;
`;

export const StyleTable = styled.div`
    margin: 45px 15px;
`;
export const StyleTitle = styled.div`
  border-bottom: 0.0625rem solid #efefef;
  padding: 10px 0;
  margin-left: 30px;
`;

export const Title = styled.h1`
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 1.5rem;
  color: rgb(51, 51, 51);
`;

export const TextInfo = styled.div`
  font-size: 14px;
  line-height: 1.0625rem;
  color: #888;
`;
