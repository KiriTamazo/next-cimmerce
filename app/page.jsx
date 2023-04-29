import axios from "axios";
import ProductsList from "./products/page";
import ProgressBar from "./components/Navbar/ProgressBar";

const Home = async () => {
  return (
    <>
      <ProgressBar />
      <ProductsList />
    </>
  );
};
export default Home;
