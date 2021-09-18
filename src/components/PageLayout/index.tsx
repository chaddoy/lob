import React from 'react'
import Card, { CardWrapper } from '../Card'

const LETTERS = Array.from('abcdefg'.toUpperCase())

const PageLayout: React.FC = () => {
  const [oneKey, setOneKey] = React.useState<number | null>(null)
  const [letters, setLetters] = React.useState<string[]>(LETTERS)
  const [orders, setOrders] = React.useState<string[]>([])
  const [flips, setFlips] = React.useState<string[]>([])
  const [showConfirm, setShowConfirm] = React.useState<string | null>(null)
  const fullOrders = orders.length === LETTERS.length
  const oneLetter = oneKey !== null ? letters[oneKey] : null

  const handleReset = () => {
    localStorage.removeItem('lob_1key')
    setLetters(LETTERS)
    setOrders([])
    setFlips([])
    setShowConfirm(null)
    setOneKey(null)
  }

  React.useEffect(() => {
    const key = parseInt(localStorage.getItem('lob_1key') || '-1', 10)
    setOneKey(key >= 0 ? key : null)
  }, [])

  return (
    <div className="flex h-screen">
      <div className="w-8/12 flex flex-column items-center justify-center">
        {oneKey !== null ? (
          <>
            <div className="flex flex-row max-h-max">
              {orders.map((letter, index) => (
                <CardWrapper key={index}>
                  <Card
                    key={index}
                    label={letter}
                    value={letter === oneLetter ? 1 : 0}
                    status={fullOrders ? 'selected' : 'default'}
                    flipped={flips.some((flip) => flip === letter)}
                    onFlipped={() => {
                      const twoLeft = flips.length === LETTERS.length - 2

                      if (orders[0] !== letter && fullOrders && !twoLeft) {
                        setFlips([...flips, letter])
                      }

                      if (twoLeft) {
                        setShowConfirm(letter)
                      }

                      if (flips.length >= LETTERS.length - 1) {
                        setFlips([...flips, letter])
                      }
                    }}
                  />
                </CardWrapper>
              ))}

              {Array.from(Array(LETTERS.length - orders.length).keys()).map((_key, index) => (
                <CardWrapper key={index}>
                  <Card key={index} label="?" value={0} status="default" />
                </CardWrapper>
              ))}
            </div>

            {!!showConfirm && (
              <>
                <div className="py-4"></div>
                <div className="flex items-center justify-center">
                  <button
                    className="bg-blue-600 px-4 py-2 border-2 border-blue-600 rounded text-white max-w-max"
                    onClick={() => {
                      setFlips([...flips, showConfirm])
                      setShowConfirm(null)
                    }}
                  >
                    REVEAL
                  </button>
                </div>
              </>
            )}

            {!fullOrders && (
              <>
                <div className="py-4"></div>
                <div className="flex flex-row max-h-max">
                  {letters.map((letter, index) => {
                    const isSelected = orders.some((item) => item === letter)

                    return (
                      <CardWrapper key={index}>
                        {!isSelected && (
                          <Card
                            label={letter}
                            status="selected"
                            onSelect={() => {
                              setOrders([...orders, letter])
                            }}
                          />
                        )}
                      </CardWrapper>
                    )
                  })}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-600 px-4 py-2 border-2 border-blue-600 rounded text-white max-w-max"
              onClick={() => {
                handleReset()
                const key = Math.floor(Math.random() * LETTERS.length)
                localStorage.setItem('lob_1key', key.toString())
                setOneKey(key)
              }}
            >
              START
            </button>
          </div>
        )}
      </div>

      <div className="w-4/12 border-l-2 flex justify-center items-center">
        <div className="w-full flex flex-column justify-center items-center py-6">
          <div className="text-3xl">Controls</div>
          <br />

          <div className="flex">
            {orders.map((letter, index) => (
              <div
                key={index}
                className={`rounded-xl shadow-md max-h-max w-12 h-12 text-red-600 text-2xl font-semibold bg-yellow-100 border-2 border-yellow-400 ml-1 mr-1 flex items-center justify-center ${
                  letter === oneLetter ? 'bg-yellow-300' : ''
                }`}
              >
                {letter === oneLetter ? 1 : 0}
              </div>
            ))}
            {LETTERS.filter((letter) => !orders.includes(letter)).map((_letter, index) => (
              <div
                key={index}
                className={`rounded-xl shadow-md max-h-max w-12 h-12 border-2 ml-1 mr-1 flex items-center justify-center text-gray-500 bg-gray-50 border-gray-300 font-bold hover:bg-gray-300 hover:border-gray-500 cursor-help`}
              >
                ?
              </div>
            ))}
          </div>

          <br />

          <button
            className="bg-blue-600 px-4 py-2 border-2 border-blue-600 rounded text-white"
            onClick={() => handleReset()}
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  )
}

export default PageLayout
