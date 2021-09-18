import React from 'react'

interface ICard {
  className?: string
  status: 'default' | 'selected'
  label: string
  value?: number
  flipped?: boolean
  onSelect?: () => void
  onFlipped?: () => void
}

export const CardWrapper: React.FC = ({ children }) => (
  <div className="relative rounded-xl max-h-max w-24 h-32 font-semibold text-7xl ml-2 mr-2">{children}</div>
)

const Card: React.FC<ICard> = ({
  className = '',
  status = 'default',
  label,
  value,
  flipped,
  onSelect = () => {},
  onFlipped = () => {},
}) => {
  const states = {
    default: 'text-gray-500 bg-gray-50 border-gray-300 hover:bg-gray-300 hover:border-gray-500 cursor-help',
    selected:
      'text-red-400 bg-yellow-50 border-yellow-300 hover:text-red-500 hover:bg-yellow-100 hover:border-yellow-400 cursor-pointer',
    flipped: 'text-red-600 bg-yellow-200 border-yellow-500',
  }
  const stateClass = flipped ? states.flipped : states[status]
  const itemClass = `absolute max-h-max w-24 h-32 rounded-xl flex items-center justify-center h-full border-2 ${stateClass} ${className}`

  return (
    <div
      className={`lob-card relative rounded-xl shadow-md max-h-max w-24 h-32 font-semibold text-7xl ${
        flipped ? 'is-flipped' : ''
      }`}
    >
      <div
        className={`lob-card__face lob-card__face--front ${itemClass}`}
        onClick={() => {
          onSelect()
          !flipped && onFlipped()
        }}
      >
        {label}
      </div>

      <div className={`lob-card__face lob-card__face--back ${itemClass}`} onClick={onSelect}>
        {value}
      </div>
    </div>
  )
}

export default Card
