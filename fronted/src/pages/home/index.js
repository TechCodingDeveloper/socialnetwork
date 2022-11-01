import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  if (!Cookies.get("user")) {
    setTimeout(() => {
      navigate("/login");
    }, 10);
  }

  return <div>Home</div>;
}
