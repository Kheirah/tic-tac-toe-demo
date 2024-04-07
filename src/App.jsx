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
  const [currentPlayer, setCurrentPlayer] = useState("X");

  function checkWinState() {
    // check rows
    if (
      allThreeTheSame(0, 1, 2) ||
      allThreeTheSame(3, 4, 5) ||
      allThreeTheSame(6, 7, 8)
    ) {
      return true;
    }

    // check columns
    if (
      allThreeTheSame(0, 3, 6) ||
      allThreeTheSame(1, 4, 7) ||
      allThreeTheSame(2, 5, 8)
    ) {
      return true;
    }

    // check diagonals
    if (allThreeTheSame(0, 4, 8) || allThreeTheSame(2, 4, 6)) {
      return true;
    }

    return false;

    function allThreeTheSame(fieldA, fieldB, fieldC) {
      return (
        fieldState[fieldA].player &&
        fieldState[fieldB].player &&
        fieldState[fieldC].player &&
        fieldState[fieldA].player === fieldState[fieldB].player &&
        fieldState[fieldB].player === fieldState[fieldC].player
      ); // making use of associative property
    }
  }

  function restartGame() {
    setFieldState(initialState);
    setCurrentPlayer("X");
  }

  const didWin = checkWinState();

  return (
    <>
      <h1>{didWin ? "YOU WON!" : "Tic Tac Toe"}</h1>

      <div className="card">
        {fieldState.map((field, index) => (
          <Fragment key={field.id}>
            <button
              disabled={field.player || didWin}
              onClick={() => {
                setFieldState(
                  fieldState.map((state) =>
                    state.id === field.id
                      ? { ...state, player: currentPlayer }
                      : state
                  )
                );
                setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
              }}
            >
              {field.player || ""}
            </button>
            {index % 3 === 2 && <br />}
          </Fragment>
        ))}

        {didWin && (
          <p>Player {currentPlayer === "X" ? "O" : "X"} won the game!</p>
        )}
      </div>

      <button className="restart" onClick={restartGame}>
        Restart
      </button>

      <p className="read-the-docs">
        Click on a square to place your mark. The first player to get three in a
        row wins!
      </p>
    </>
  );
}

export default App;
