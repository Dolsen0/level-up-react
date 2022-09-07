import { useState } from "react";
import Button from "react-bootstrap/Button";

export default function LogoutButton() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(false);
  const handleClose = () => setShow(true);

  return (
    <>
      <Button
        id="logoutButton"
        onClick={() => {
          console.log("will be created soon");
        }}
      >
        Logout
      </Button>
    </>
  );
}
