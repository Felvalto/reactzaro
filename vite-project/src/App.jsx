import { useState } from "react";
import Panel from "./Panel";

const szinek = [
  { nev: "Piros", rgb: "rgb(255, 0, 0)" },
  { nev: "Zöld", rgb: "rgb(0, 128, 0)" },
  { nev: "Kék", rgb: "rgb(0, 0, 255)" },
  { nev: "Sárga", rgb: "rgb(255, 255, 0)" },
  { nev: "Lila", rgb: "rgb(128, 0, 128)" },
];

function App() {
  const [valasztott, setValasztott] = useState(null);

  function valtozas(e) {
    const nev = e.target.value;
    const talalt = szinek.find((szin) => szin.nev === nev);
    setValasztott(talalt || null);
  }

  return (
    <div>
      <h1>Kedvenc szín választó</h1>

      <select onChange={valtozas} defaultValue="">
        <option value="" disabled>
          Válassz színt!
        </option>
        {szinek.map((szin) => (
          <option key={szin.nev} value={szin.nev}>
            {szin.nev}
          </option>
        ))}
      </select>

      {valasztott && <p>A választott szín: {valasztott.nev}</p>}
      {valasztott && <Panel szin={valasztott} />}
    </div>
  );
}

export default App;
