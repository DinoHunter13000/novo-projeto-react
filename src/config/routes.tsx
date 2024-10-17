import {
    createRoutesFromElements,
    createBrowserRouter,
    Route,
    Outlet,
  } from "react-router-dom";
  
  export const Root = () => {
    return (
      <><h1>Página Root</h1> <Outlet /></>
    )
  }
  
  export const EditContact = () => {
    return (
      <><h1>Página Editar Contato</h1></>
    )
  }
  
  export const Contact = () => {
    return (
      <><h1>Página Contato</h1></>
    )
  }
  
  export const Index = () => {
    return (
      <><h1>Página Index</h1></>
    )
  }
  
  export const ErrorPage = () => {
    return (
      <><h1>Página de Error</h1></>
    )
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Root />}
      >
        <Route errorElement={<ErrorPage />}>
          <Route index element={<Index />} />
          <Route
            path="contacts/:contactId"
            element={<Contact />}
          />
          <Route
            path="contacts/:contactId/edit"
            element={<EditContact />}
          />
          <Route path="contacts/:contactId/destroy"/>
        </Route>
      </Route>
    )
  );
  export default router