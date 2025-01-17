export default function SpinWheel({items, rotation, isSpinning}: {items: string[], rotation: number, isSpinning: boolean}) {

  const getColor = (index: number) => {
    // const hue = (index * 137.5) % 360
    // return `hsl(${hue}, 70%, 50%)`
    if(index % 2 === 0) {
      return '#7236ff'
    }
    return '#ffd500'
  }

  return (
    <>
      <svg
        width="300"
        height="300"
        viewBox="0 0 100 100"
        // className='transition-transform duration-5000 ease-in-out'
        className="spin-wheel"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {items.map((item, index) => {
          const angle = (360 / items.length) * index
          const endAngle = (360 / items.length) * (index + 1)
          const midAngle = (angle + endAngle) / 2
          const largeArcFlag = endAngle - angle <= 180 ? "0" : "1"
          const startX = 50 + 50 * Math.cos((angle - 90) * (Math.PI / 180))
          const startY = 50 + 50 * Math.sin((angle - 90) * (Math.PI / 180))
          const endX = 50 + 50 * Math.cos((endAngle - 90) * (Math.PI / 180))
          const endY = 50 + 50 * Math.sin((endAngle - 90) * (Math.PI / 180))

          const textRadius = 35
          const textX = 50 + textRadius * Math.cos((midAngle - 90) * (Math.PI / 180))
          const textY = 50 + textRadius * Math.sin((midAngle - 90) * (Math.PI / 180))

          return (
            <g key={index}>
              <path
                d={`M50,50 L${startX},${startY} A50,50 0 ${largeArcFlag},1 ${endX},${endY} Z`}
                fill={getColor(index)}
              />
              <text
                x={textX}
                y={textY}
                dy="0.3em"
                textAnchor="middle"
                fontSize="4"
                fill="white"
                transform={`rotate(${midAngle}, ${textX}, ${textY})`}
                className="font-bold capitalize"
              >
                {item}
              </text>
            </g>
          )
        })}
      </svg>
    </>
  )
}