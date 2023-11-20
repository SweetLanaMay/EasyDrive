import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Header } from "src/components/Header/Header";
import CarList from "src/components/CarList/CarList";
import { selectError, selectIsLoading } from "../../redux/selectors";
import { fetchCars } from "../../redux/operations";
import Container from "src/components/Container/Container";
import { StyledLink } from "./CatalogPage.styled";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [loadedCars, setLoadedCars] = useState(12)

  useEffect(() => {
    dispatch(fetchCars(loadedCars));
  }, [dispatch, loadedCars]);

  const handleLoadMore = () => {
    setLoadedCars((prevLoadedCars) => prevLoadedCars + 12);
  };

  if (isLoading) {
    return "Loading...";
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <>
      <Header />
      <Container>
      <CarList />
      <StyledLink onClick={handleLoadMore}>Load more</StyledLink>
    </Container>
    </>
  );
};

export default CatalogPage;
