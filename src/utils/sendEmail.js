import axios from "axios";
import { getEmailHtml } from "../emails/renderEmail";
export const sendEmail = async (emailType, toEmail, templateData) => {
  const html = getEmailHtml(emailType, templateData);
  await axios.post(
    "https://bharbhoxbackend-production.up.railway.app/api/send-email/",
    {
      to: toEmail,
      subject: "Your BarkBox Order Confirmation",
      html,
    }
  );
};
