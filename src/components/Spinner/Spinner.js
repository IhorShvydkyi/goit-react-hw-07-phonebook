import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Spiner = () => {
  return (
    <Loader
      type="ThreeDots"
      color=" #3f51b5"
      height={100}
      width={100}
      timeout={4000}
    />
  );
};
export default Spiner;
