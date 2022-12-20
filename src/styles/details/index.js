import styled from "styled-components";

export const Info = styled.div`
  width: 100%;
  margin-top: 10px;
  height: 100%;
  /* background: #e0e0e0; */

`;
export const StyleImage = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px 0;
`;

export const Bolder = styled.div``;

export const Name = styled.span`
  font-weight: bold;
  color: #000000;
  font-size: 20px;
  white-space: nowrap;
  width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const EditProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5px;
`;
export const Text = styled.span`
  font-size: 12px;
  padding-left: 5px;
`;
export const Edit = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #777e90;
  transition: all 400ms ease-in-out;
  &:hover {
    color: red;
  }
`;

export const Account = styled.div`
  background-color: #d9ecf2;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition: all 600ms ease-in-out;
  margin: 5px 0;
  border-radius: 20px;
  background: linear-gradient(145deg, #cacaca, #f0f0f0);
  &:hover {
    background: linear-gradient(145deg, #000, #ffff);
    color: #fff;
    border-top: 0;
  }
`;
export const TextAcc = styled.div`
  font-weight: 600;
  padding-left: 5px;
  font-size: 15px;
`;
export const ContentBottom = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0 20px;
`;

export const ButtonImg = styled.button`
  border: none;

  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
  transition: all 200ms;
  &:hover {
    opacity: 0.3;
    transform: scale(1.1);
  }
`;
