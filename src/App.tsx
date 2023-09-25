import { RouterProvider } from "react-router-dom";
import "assets/scss/pages/home.scss";

import router from 'routes';
import { ParallaxProvider } from "react-scroll-parallax";


function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
