import { useState } from "react";
import SpinnerWheelRing from "./SpinnerWheelRing";
import SpinWheel from "./SpinWheel";
import SpinWheelCenter from "./SpinWheelCenter";

export default function RandomSpinner({ items }: { items: string[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);

  const getRandomIndexAndRotation = (items: string[]) => {
    const randomIndex = Math.floor(Math.random() * items.length);
    const anglePerItem = 360 / items.length;
    const centerAngle = anglePerItem * randomIndex + anglePerItem / 2;
    const rotation = 360 - centerAngle;
    return { randomIndex, rotation };
  };

  const startSpin = () => {
    if (spinning) return;
    setSpinning(true);

    const { randomIndex, rotation } = getRandomIndexAndRotation(items);

    if (randomIndex % 2 == 0) {
      setRotation(rotation + 720);
    } else {
      setRotation(rotation);
    }
    setTimeout(() => {
      setSelectedIndex(randomIndex);
      setSpinning(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className="w-[380px] h-[380px] rounded-full flex items-center justify-center relative"
        // style={{ boxShadow: "0 0 30px #996eff" }}
      >
        <SpinWheelCenter text={selectedIndex !== null ? items[selectedIndex] : null} isSpinning={spinning} />
        <SpinnerWheelRing />
        <SpinWheel items={items} rotation={rotation} isSpinning={spinning} />
      </div>
      <button
        onClick={startSpin}
        disabled={spinning}
        className="mt-11 border-2 text-white p-2 px-8 rounded-lg font-bold"
      >
        {spinning ? "Spinning..." : "Spin"}
      </button>
    </div>
  );
}
