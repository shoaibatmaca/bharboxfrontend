import { renderToStaticMarkup } from "react-dom/server";
import OrderConfirmationEmail from "../utils/OrderConfirmationEmail";
import WelcomeEmail from "./WelcomeEmail";

export const getEmailHtml = (type, data) => {
  switch (type) {
    case "welcome":
      return renderToStaticMarkup(<WelcomeEmail {...data} />);
    case "order_confirmation":
      return renderToStaticMarkup(<OrderConfirmationEmail {...data} />);
    default:
      return "";
  }
};
