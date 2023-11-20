import styled from "styled-components";
import Modal from "react-modal";
import { Link } from "react-router-dom";

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
  background-color: #fff;
  max-width: 80%;
  max-width: 541px;
  height: auto;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(18, 20, 23, 0.5);
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
  color: #3470ff;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
`;

export const Description = styled.div`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 14px;
`;

export const CarDescription = styled.p`
  color: #121417;
  line-height: 20px;
  width: 461px;
  margin-bottom: 24px;
`;

export const ModalTitle = styled.h3`
  color: #121417;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 8px;
`;

export const CarAccessories = styled.div`
  display: flex;
  width: 461px;
  height: 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 24px;
`;

export const StyledLinkRental = styled(Link)`
  display: flex;
  width: 168px;
  height: 44px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  font-weight: 600;
  line-height: 20px;
  color: white;
  background: #3470ff;
  transition: 250ms ease;

  &:hover {
    background: #3470ff;
  }
`;

export const ConditionsList = styled.div`
  display: flex;
  padding: 7px 14px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 35px;
  background: #f9f9f9;
  color: #363535;
  font-size: 12px;
  line-height: 18px;
`;
