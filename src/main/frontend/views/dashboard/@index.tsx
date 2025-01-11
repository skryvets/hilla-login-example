import {ViewConfig} from "@vaadin/hilla-file-router/types.js";

export default function Dashboard() {

  return (
    <>
      <h1>Dashboard</h1>
    </>
  );
}

export const config: ViewConfig = {
    loginRequired: true,
};