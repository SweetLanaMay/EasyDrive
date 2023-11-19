import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
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

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

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
      <StyledLink>Load more</StyledLink>
    </Container>
    </>
  );
};

export default CatalogPage;
