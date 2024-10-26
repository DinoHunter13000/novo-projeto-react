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
    path: "contato/:contatoId/editar",
    element: <EditarContato/>
  },
  {
    path: "contato/:contatoId",
    element: <Contato/>
  },
]

const router = createBrowserRouter(
  createRoutesFromElements(
    (routes.map((route, index) => {
      return (
        <Route>
          <Route path="/" element={<Home/>}> </Route>
        <Route path="/admin/" element={<Root/>}>
          <Route path={route.path} element={route.element} />
        </Route>
        </Route>
      )
    }))
  )
);
export default router;