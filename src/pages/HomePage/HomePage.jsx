import { Header } from "src/components/Header/Header";
import { HomePageComponents } from '../../components/HomePageComponents/HomePageComponents'
import Container from "../../components/Container/Container";

const HomePage = () => {
  return (
    <>
  <Header />
  <Container>
  <HomePageComponents />
  </Container>
  </>
  )
};

export default HomePage;
