export default function SpinWheelCenter({text, isSpinning}: {text: string | null, isSpinning: boolean}) {
  return (
    <div className="absolute p-8 bg-white rounded-full aspect-square z-10 font-bold text-black capitalize transition-all">
      {
       isSpinning ? <span className="text-5xl"> 😵‍💫 </span>: text
      }
    </div>
  )
}