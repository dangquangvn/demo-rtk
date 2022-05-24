import React from "react";
import { useContactsQuery } from "../../services/contactsApi";

const Home = () => {
  const { data } = useContactsQuery();
  console.log("🚀TCL: ~ file: Home.js ~ line 6 ~ Home ~ data", data);
  return <div>Home</div>;
};

export default Home;
