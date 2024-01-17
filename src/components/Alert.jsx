import "../App.css";
import { useAlert } from "./context/AlertContext";

const Alert = () => {
    const { alert } = useAlert();
  
    if (!alert) {
      return null; // If there's no alert, don't render anything
    }
  
    const { type, message } = alert;
  
    let bgColor, textColor;
  
    // Choose colors based on the alert type
    switch (type) {
      case "success":
        bgColor = "bg-green-500";
        textColor = "text-white";
        break;
      case "warning":
        bgColor = "bg-yellow-500";
        textColor = "text-black";
        break;
      case "error":
        bgColor = "bg-red-500";
        textColor = "text-white";
        break;
      default:
        bgColor = "bg-blue-500";
        textColor = "text-white";
    }
  
    return (
      <div
        className={`p-4 mb-4 text-sm rounded-lg ${bgColor} ${textColor} w-full h-auto`}
        role="alert"
      >
        {message}
      </div>
    );
  };
  
  export default Alert;