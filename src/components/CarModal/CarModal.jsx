import PropTypes from "prop-types";

import {
  CarCardWrapper,
  CarInfoWrapper,
  CarTitle,
  CarModel,
  Description,
} from "../CarList/CarList.styled";
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

  return (
    <>
      {isOpen && (
        <ModalWrapper>
          <StyledModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Car Details"
          >
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
              <CarAccessories>{car.accessories}{car.functionalities}</CarAccessories>
              <ModalTitle>Rental Conditions:</ModalTitle>
              <ConditionsList>
                {car.rentalConditions}
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
