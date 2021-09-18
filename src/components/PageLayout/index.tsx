import React from "react";
import Card, { CardWrapper } from "../Card";

const LETTERS = Array.from("abcdefg".toUpperCase());

const PageLayout: React.FC = () => {
  const [oneKey, setOneKey] = React.useState<number | null>(null);
  const [letters, setLetters] = React.useState<string[]>(LETTERS);
  const [orders, setOrders] = React.useState<string[]>([]);
  const [flips, setFlips] = React.useState<string[]>([]);
  const [showConfirm, setShowConfirm] = React.useState<string | null>(null);
  const fullOrders = orders.length === LETTERS.length;
  const oneLetter = oneKey !== null ? letters[oneKey] : null;

  const handleReset = () => {
    setLetters(LETTERS);
    setOrders([]);
    setFlips([]);
    setShowConfirm(null);
  };

  React.useEffect(() => {
    const key = parseInt(localStorage.getItem("lob_1key") || "-1", 10);
    setOneKey(key >= 0 ? key : null);
  }, []);

  return (
    <div className="flex h-screen">
      <div className="w-8/12 flex flex-column items-center justify-center">
        <div className="flex flex-row max-h-max">
          {orders.map((letter, index) => (
            <CardWrapper key={index}>
              <Card
                key={index}
                label={letter}
                value={letter === oneLetter ? 1 : 0}
                status={fullOrders ? "selected" : "default"}
                flipped={flips.some((flip) => flip === letter)}
                onFlipped={() => {
                  const twoLeft = flips.length === 5;

                  if (orders[0] !== letter && fullOrders && !twoLeft) {
                    setFlips([...flips, letter]);
                  }

                  if (twoLeft) {
                    setShowConfirm(letter);
                  } else {
                    setFlips([...flips, letter]);
                  }
                }}
              />
            </CardWrapper>
          ))}

          {Array.from(Array(LETTERS.length - orders.length).keys()).map(
            (_key, index) => (
              <CardWrapper key={index}>
                <Card key={index} label="?" value={0} status="default" />
              </CardWrapper>
            )
          )}
        </div>

        {!!showConfirm && (
          <>
            <div className="py-4"></div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-600 px-4 py-2 border-2 border-blue-600 rounded text-white max-w-max"
                onClick={() => {
                  setFlips([...flips, showConfirm]);
                  setShowConfirm(null);
                }}
              >
                Reveal?
              </button>
            </div>
          </>
        )}

        {!fullOrders && (
          <>
            <div className="py-4"></div>
            <div className="flex flex-row max-h-max">
              {letters.map((letter, index) => {
                const isSelected = orders.some((item) => item === letter);

                return (
                  <CardWrapper key={index}>
                    {!isSelected && (
                      <Card
                        label={letter}
                        status="selected"
                        onSelect={() => {
                          setOrders([...orders, letter]);
                        }}
                      />
                    )}
                  </CardWrapper>
                );
              })}
            </div>
          </>
        )}
      </div>

      <div className="w-4/12 border-l-2 flex justify-center items-center">
        <div className="w-full flex flex-column justify-center items-center py-6">
          <div className="text-3xl">Controls</div>
          <br />

          <div className="flex">
            {[
              ...orders,
              ...letters.filter((letter) => !orders.includes(letter)),
            ].map((letter, index) => (
              <div
                key={index}
                className={`rounded-xl shadow-md max-h-max w-12 h-12 text-red-600 font-semibold bg-yellow-50 border-2 border-yellow-500 ml-1 mr-1 flex items-center justify-center ${
                  letter === oneLetter ? "bg-yellow-300" : ""
                }`}
              >
                {letter === oneLetter ? 1 : 0}
              </div>
            ))}
          </div>

          <br />

          <button
            className="bg-blue-600 px-4 py-2 border-2 border-blue-600 rounded text-white"
            onClick={() => {
              const key = Math.floor(Math.random() * 7);
              localStorage.setItem("lob_1key", key.toString());
              handleReset();
              setOneKey(key);
            }}
          >
            Randomize
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
