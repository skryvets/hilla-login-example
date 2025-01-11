import {NavLink} from "react-router-dom";

export default function MainView() {

  return (
    <>
      <h1>Awesome Landing Page</h1>
      <NavLink to="/login">Login</NavLink>
    </>
  );
}
