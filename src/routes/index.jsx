import {
  BrowserRouter,
  Routes as Switch,
  Route,
  Outlet,
} from "react-router-dom";

import Home from "pages/Home";
import NewContact from "pages/NewContact";
import EditContact from "pages/EditContact";

import Header from "components/Header";
import { Container } from "components/Container";

import * as paths from "./paths";

export default function Routes() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Switch>
          <Route path={paths.home} element={<Home />} />
          <Route path={paths.add} index element={<NewContact />} />
          <Route path={paths.edit} element={<EditContact />} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}
