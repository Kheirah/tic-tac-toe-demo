import { Fragment, useState } from "react";
import "./App.css";

const initialState = [
  {
    id: 0,
    player: undefined,
  },
  {
    id: 1,
    player: undefined,
  },
  {
    id: 2,
    player: undefined,
  },
  {
    id: 3,
    player: undefined,
  },
  {
    id: 4,
    player: undefined,
  },
  {
    id: 5,
    player: undefined,
  },
  {
    id: 6,
    player: undefined,
  },
  {
    id: 7,
    player: undefined,
  },
  {
    id: 8,
    player: undefined,
  },
];

function App() {
  const [fieldState, setFieldState] = useState(initialState);
  return (
    <>
      <h1>Tic Tac Toe</h1>

      <div className="card">
        {fieldState.map((field, index) => (
          <Fragment key={field.id}>
            <button>{field.player || ""}</button>
            {index % 3 === 2 && <br />}
          </Fragment>
        ))}
      </div>

      <p className="read-the-docs">
        Click on a square to place your mark. The first player to get three in a
        row wins!
      </p>
    </>
  );
}

export default App;
