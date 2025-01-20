import { useState } from "react";
import SpinnerWheelRing from "./SpinnerWheelRing";
import SpinWheel from "./SpinWheel";
import SpinWheelCenter from "./SpinWheelCenter";
import Modal from "./Modal";

export default function RandomSpinner({ items }: {
  items: {
    id: string;
    name: string;
    question: string;
  }[]
}) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [previous, setPrevious] = useState(0);
  const [newVar, setNewVar] = useState(0);

  const getRandomIndexAndRotation = (items: { id: string; name: string; question: string; }[]) => {
    const randomIndex = Math.floor(Math.random() * items.length);
    const anglePerItem = 360 / items.length;
    const centerAngle = anglePerItem * randomIndex + anglePerItem / 2;
    const rotation = 360 - centerAngle;
    setNewVar(rotation);
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

    if(previous %2 == 0 && newVar %2 == 0) {
      setRotation(rotation + 2160);
    }
    else if(previous %2 != 0 && newVar %2 != 0) {
      setRotation(rotation + 1440);
    }
    setTimeout(() => {
      setSelectedIndex(randomIndex);
      setSpinning(false);
      setShowModal(true)
      setPrevious(rotation);
      setRotation(0)
    }, 2000);
  };

  return (
    <>
      <Modal item={selectedIndex !== null ? items[selectedIndex] : null} showModal={showModal} setShowModal={setShowModal} />
      <div className="flex flex-col items-center relative">
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
    </>
  );
}
