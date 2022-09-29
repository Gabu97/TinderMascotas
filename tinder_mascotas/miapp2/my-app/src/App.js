import "./App.css";
import NavUsuario from "./componentes/iniciasesion";
//import Footer from "./componentes/footer";
import NavUsuarioNo from "./componentes/yahasiniciado";
import { useAuth0 } from "@auth0/auth0-react";
import Footer from "./componentes/footer";
import Inicio from "./componentes/inicio";
import Video from "./componentes/video";
import Paralax from "./componentes/paralax";
import Search from "./componentes/Search";
import {People} from "./componentes/People";
//import Registrate from "./componentes/registrate";

function App() {
  const { isAuthenticated , user} = useAuth0();
  let checked = false;

  People.map((person) => {
  if(user.email == person.correoElectronico){
    checked=true
  }
}); 
  return (
    <div>
      {isAuthenticated ? (
        <>
          <NavUsuarioNo />
          <Search />
          <Footer />
        </>
      ) : (
        <>
        <NavUsuario />
        <Paralax />
        <Inicio />
         <Video />
         <Footer />
         </>
      )}
     

    </div>

  );
}

export default App;
//      <Registrate /> <Footer /> <Navbar />
