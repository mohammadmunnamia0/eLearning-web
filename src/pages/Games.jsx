import React, { useEffect, useState } from "react";

const Games = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [currentAlphabet, setCurrentAlphabet] = useState("");
  const [life, setLife] = useState(5);
  const [score, setScore] = useState(0);
  const [finalScore, setFinalScore] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const randomAlphabets = () => {
    const alphabetsString =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const alphabets = alphabetsString.split("");
    const randomNum = Math.random() * 51;
    const index = Math.round(randomNum);
    return alphabets[index];
  };

  const handleKeyPress = (event) => {
    if (event.key === "Escape") {
      handleGameOver();
      return;
    }

    if (event.key === currentAlphabet) {
      setScore((prev) => prev + 1);
      setCurrentAlphabet(randomAlphabets());
      setErrorMessage("");
    } else if (event.key.toLowerCase() === currentAlphabet.toLowerCase()) {
      setErrorMessage("Wrong case! Press the exact case shown.");
      setLife((prev) => {
        const newLife = prev - 1;
        if (newLife === 0) {
          handleGameOver();
        }
        return newLife;
      });
    } else {
      setErrorMessage("Wrong key! Try again.");
      setLife((prev) => {
        const newLife = prev - 1;
        if (newLife === 0) {
          handleGameOver();
        }
        return newLife;
      });
    }
  };

  const handleGameOver = () => {
    setIsGameOver(true);
    setIsGameStarted(false);
    setFinalScore(score);
  };

  const startGame = () => {
    setIsGameStarted(true);
    setIsGameOver(false);
    setLife(5);
    setScore(0);
    setErrorMessage("");
    setCurrentAlphabet(randomAlphabets());
  };

  useEffect(() => {
    if (isGameStarted) {
      window.addEventListener("keyup", handleKeyPress);
      return () => {
        window.removeEventListener("keyup", handleKeyPress);
      };
    }
  }, [isGameStarted, currentAlphabet]);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        {!isGameStarted && !isGameOver && (
          <div className="flex justify-center items-center min-h-[60vh]">
            <button
              onClick={startGame}
              className="btn btn-primary text-xl px-8 py-4"
            >
              Click To Start Game
            </button>
          </div>
        )}

        {isGameStarted && (
          <div className="space-y-8">
            <div className="border-2 border-gray-950 p-4 mx-auto max-w-2xl rounded-md bg-white shadow-xl flex justify-center items-center">
              <div className="text-9xl font-extrabold">{currentAlphabet}</div>
            </div>

            {errorMessage && (
              <div className="text-center text-red-500 font-bold text-xl mt-4">
                {errorMessage}
              </div>
            )}

            <div className="flex justify-center gap-1 my-1 w-full">
              {["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"].map((key) => (
                <kbd
                  key={key}
                  className={`kbd ${
                    currentAlphabet.toLowerCase() === key ? "bg-orange-400" : ""
                  }`}
                >
                  {currentAlphabet.toLowerCase() === key
                    ? currentAlphabet
                    : key}
                </kbd>
              ))}
            </div>
            <div className="flex justify-center gap-1 my-1 w-full">
              {["a", "s", "d", "f", "g", "h", "j", "k", "l"].map((key) => (
                <kbd
                  key={key}
                  className={`kbd ${
                    currentAlphabet.toLowerCase() === key ? "bg-orange-400" : ""
                  }`}
                >
                  {currentAlphabet.toLowerCase() === key
                    ? currentAlphabet
                    : key}
                </kbd>
              ))}
            </div>
            <div className="flex justify-center gap-1 my-1 w-full">
              {["z", "x", "c", "v", "b", "n", "/"].map((key) => (
                <kbd
                  key={key}
                  className={`kbd ${
                    currentAlphabet.toLowerCase() === key ? "bg-orange-400" : ""
                  }`}
                >
                  {currentAlphabet.toLowerCase() === key
                    ? currentAlphabet
                    : key}
                </kbd>
              ))}
            </div>

            <div className="grid  justify-center items-center">
              <div className="stats gap-6 grid justify-between mt-10  px-40 ">
                <div className="stat bg-red-500 rounded-xl">
                  <div className="stat-desc text-center font-bold text-xl">
                    Life: {life}
                  </div>
                </div>
                <div className="stat bg-lime-500 rounded-xl">
                  <div className="stat-desc text-center font-bold text-xl">
                    Point: {score}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {isGameOver && (
          <div className="flex justify-center items-center min-h-[60vh]">
            <div className="stats shadow bg-red-600">
              <div className="stat text-center">
                <div className="stat-value text-center">Game Over</div>
                <div className="stat-value text-center">
                  Score: {finalScore}
                </div>
                <div className="stat-desc text-center">
                  Better Luck Next Time Buddy
                </div>
                <button onClick={startGame} className="btn mt-4">
                  Play Again
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Games;
