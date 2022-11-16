import { useParams } from "react-router-dom";

export default function Activate() {
  const { token } = useParams();
  return <div>{token}</div>;
}
