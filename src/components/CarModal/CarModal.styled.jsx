import styled from "styled-components";
import Modal from "react-modal";

export const StyledModal = styled(Modal)`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  border-radius: 24px;
  background-color: #FFF;
  max-width: 80%;
  width: 541px;
  height: 752px;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(18, 20, 23, 0.50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CarCardWrapper = styled.li`
display: flex;
flex-direction: column;
`;

export const CarModalPhoto = styled.img`
width: 461px;
height: 248px;
margin-bottom: 14px;
`;

export const CarInfoWrapper = styled.div`
display: flex;
justify-content: space-between;
width: 277px;
`;

export const CarTitle = styled.p`
display: flex;
color: #121417;
font-size: 18px;
font-weight: 500;
line-height: 24px;
margin-bottom: 8px;

`;

export const CarModel = styled.span`
color: #3470FF;
font-size: 18px;
font-weight: 500;
line-height: 24px;
`;

export const Description = styled.div`
color: rgba(18, 20, 23, 0.50);
font-size: 12px;
line-height: 18px;
margin-bottom: 14px;
`;

export const CarDescription = styled.p`
color: #121417;
line-height: 20px; 
`;
