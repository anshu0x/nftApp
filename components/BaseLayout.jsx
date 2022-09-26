import BottomNav from "./BottomNav";
import Navbar from "./Navbar";
import useWindowSize from "../Hooks/WindowResize";
const BaseLayout = () => {
  const size = useWindowSize();
  return <>{size.width > 600 ? <Navbar /> : <BottomNav />}</>;
};

export default BaseLayout;
