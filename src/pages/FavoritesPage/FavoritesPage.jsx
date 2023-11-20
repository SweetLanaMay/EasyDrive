import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import CarList from "../../components/CarList/CarList";
import { Header } from "src/components/Header/Header";
import { selectFavoriteCars } from '../../redux/selectors'
import { fetchFavoriteCars } from '../../redux/operations'

const FavoritesPage = () => {
  const favoriteCars = useSelector(selectFavoriteCars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteCars());
  }, [dispatch]);


  return (
    <>
      <Header />
      <CarList cars={favoriteCars} />
    </>
  );
};

export default FavoritesPage;
