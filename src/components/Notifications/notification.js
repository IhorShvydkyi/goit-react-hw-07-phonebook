import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function toastNotification(value) {
  return toast.warn(`You have already had ${value} in your contacts`, {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
