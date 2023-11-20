import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import CarModal from "../CarModal/CarModal";
import { List } from "./CarList.styled";
import CarCard from "../CarCard/CarCard";
import { selectCars } from "../../redux/selectors";
import { selectFavoriteCars } from "../../redux/selectors";
import { addFavoriteCar, deleteFavoriteCar } from "../../redux/operations";

const CarList = () => {
  const cars = useSelector(selectCars);
  const favorites = useSelector(selectFavoriteCars);
  const dispatch = useDispatch();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const openModal = (car) => {
    setSelectedCar(car);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedCar(null);
    setModalIsOpen(false);
  };

  const isFavorite = (car) =>
    !!favorites.find((favorite) => favorite.id === car.id);

  const toggleFavorite = (car) => {
    if (isFavorite(car)) {
      dispatch(deleteFavoriteCar(car.id));
    } else {
      dispatch(addFavoriteCar(car));
    }
  };

  return (
    <>
      <List>
        {cars.map((car) => (
          <CarCard
            key={car.id}
            car={car}
            isFavorite={isFavorite(car)}
            toggleFavorite={() => toggleFavorite(car)}
            openModal={() => openModal(car)}
          />
        ))}
      </List>
      <CarModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        car={selectedCar}
      />
    </>
  );
};

export default CarList;

// const CarList = () => {
//   const cars = useSelector(selectCars);
//   const favorites = useSelector(selectFavoriteCars);
//   const dispatch = useDispatch();

//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [selectedCar, setSelectedCar] = useState(null);

//   const openModal = (car) => {
//     setSelectedCar(car);
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setSelectedCar(null);
//     setModalIsOpen(false);
//   };

//   const isFavorite = (car) =>
//     !!favorites.find((favorite) => favorite.id === car.id);

//   const toggleFavorite = (car) => {
//     if (isFavorite(car)) {
//       dispatch(deleteFavoriteCar(car.id));
//     } else {
//       dispatch(addFavoriteCar(car));
//     }
//   };

//   return (
//     <>
//       <List>
//         {cars.map((car) => {

//           return (

//           );
//         })}
//       </List>
//       <CarModal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         car={selectedCar}
//       />
//     </>
//   );
// };

// export default CarList;
