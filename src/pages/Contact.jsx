import { useEffect } from "react";
import ComingSoon from "../ui/ComingSoon";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <ComingSoon />
    </div>
  );
}

export default Contact;
