import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import "./Home.scss";

export default function Home() {
  const navigate = useNavigate();
  if (!Cookies.get("user")) {
    setTimeout(() => {
      navigate("/login");
    }, 10);
  }

  return (
    <div>
      <Header />
    </div>
  );
}
