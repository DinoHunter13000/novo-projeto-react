import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import Root from "../pages/root";
import EditarContato from "../pages/editar-contato";
import Contato from "../pages/contato";
import Home from "../pages/home";
const routes = [
  {
    path: "/",
    element: <Root/>
  },
  {
    path: "contato/:contatoId/editar",
    element: <EditarContato/>
  },
  {
    path: "contato/:contatoId",
    element: <Contato/>
  },
  {
    path: "home",
    element: <Home/>
  }
]

const router = createBrowserRouter(
  createRoutesFromElements(
    (routes.map((route, index) => {
      return <Route path={route.path} element={route.element} />
    }))
  )
);
export default router;