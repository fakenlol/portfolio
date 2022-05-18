import { Presentation } from "./Presentation";
import { Encabezado } from "./NavBar";
import '../stylesheets/Principal.css';

export function Principal() {
  return (
    <div className="principal-display">
      <Encabezado />
      <Presentation />
    </div>
  );
}