import { useState } from "react";
import { useEffect } from "react";

export default function FirstName() {
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    fetch("https://level-up-do.web.app/user")
    // fetch('http://localhost:5785/user')
      .then((results) => results.json())
      .then((results) => setFirstName(results.firstName))
      .catch((err) => console.error(err));
  }, []);
  return <p>{firstName}</p>
}
