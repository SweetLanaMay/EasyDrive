import PropTypes from "prop-types";

import {
  CarCardWrapper,
  CarInfoWrapper,
  CarTitle,
  CarModel,
  Description,
} from "../CarCard/CarCard.styled";
import CarListSvg from "../CarListSvg/CarListSvg";
import {
  StyledModal,
  ModalWrapper,
  CarModalPhoto,
  CarDescription,
  ModalTitle,
  CarAccessories,
  ConditionsList,
  StyledLinkRental,
  CloseButton,
  ConditionItem,
  CarMileage,
  CarPrice,
  StyledCarMileage,
  StyledPrice,
} from "./CarModal.styled";

const CarModal = ({ isOpen, onRequestClose, car }) => {
  if (!car) {
    return null;
  }

  const address = car.address;
  const addressParts = address.split(",");
  const trimmedAddressParts = addressParts.map((part) => part.trim());
  const city = trimmedAddressParts[1];
  const country = trimmedAddressParts[2];

  const accessories = car.accessories;
  const randomIndex = Math.floor(Math.random() * accessories.length);
  const randomAccessory = accessories[randomIndex];

  const conditionsArray = car.rentalConditions.split("\n");

  return (
    <>
      {isOpen && (
        <ModalWrapper>
          <StyledModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Car Details"
          >
            <CloseButton onClick={onRequestClose}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="x">
                  <path
                    id="Vector"
                    d="M18 6L6 18"
                    stroke="#121417"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M6 6L18 18"
                    stroke="#121417"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </CloseButton>
            <CarCardWrapper key={car.id} data={car}>
              <CarModalPhoto src={car.img} alt={`Photo of ${car.make}`} />
              <CarInfoWrapper>
                <CarTitle>
                  {car.make}&nbsp;
                  <CarModel>{car.model}</CarModel>, {car.year}
                </CarTitle>
              </CarInfoWrapper>
              <Description>
                {city} <CarListSvg /> {country} <CarListSvg />{" "}
                {car.rentalCompany}
                <CarListSvg /> {car.type} <CarListSvg /> {car.make}{" "}
                <CarListSvg />
                {car.id} <CarListSvg /> {randomAccessory}
              </Description>
              <CarDescription>{car.description}</CarDescription>
              <ModalTitle>Accessories and functionalities:</ModalTitle>
              <CarAccessories>
                {car.accessories}
                {car.functionalities}
              </CarAccessories>
              <ModalTitle>Rental Conditions:</ModalTitle>
              <ConditionsList>
                {conditionsArray.map((condition, index) => (
                  <ConditionItem key={index}>{condition}</ConditionItem>
                ))} <CarMileage>Mileage: <StyledCarMileage>{car.mileage}</StyledCarMileage></CarMileage>
                <CarPrice>Price: <StyledPrice>{car.rentalPrice}</StyledPrice></CarPrice>
              </ConditionsList>
              <StyledLinkRental>Rental car</StyledLinkRental>
            </CarCardWrapper>
          </StyledModal>
        </ModalWrapper>
      )}
      ;
    </>
  );
};

CarModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  car: PropTypes.object,
};

export default CarModal;
