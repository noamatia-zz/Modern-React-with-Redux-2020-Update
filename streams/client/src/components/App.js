import React from "react";
import { useRoutes, BrowserRouter } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./header";

const Routes = () => {
  const routes = useRoutes([
    { path: "/", element: <StreamList /> },
    { path: "/streams/new", element: <StreamCreate /> },
    { path: "/streams/edit", element: <StreamEdit /> },
    { path: "/streams/delete", element: <StreamDelete /> },
    { path: "/streams/show", element: <StreamShow /> },
  ]);

  return routes;
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </div>
  );
};

export default App;
