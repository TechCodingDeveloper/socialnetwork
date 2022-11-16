import PropagateLoader from "react-spinners/PropagateLoader";
import "./ActivateForm.scss";
import { useEffect } from "react";
export default function ActivateForm({ type, header, text, loading }) {
 
  useEffect(() => {
     activateAccount();
  }, []);

  const activateAccount = async () => {
    try {
      
    } catch (error) {
      
    } 
  };
  return (
    <div className="blur">
      <div className="activate__form">
        <div className="activate__form__header">
          Accont verification succeded
        </div>
        <div className="activate__form__body"></div>
        <PropagateLoader color="#1876f2" size={30} loading={true} />
      </div>
    </div>
  );
}
