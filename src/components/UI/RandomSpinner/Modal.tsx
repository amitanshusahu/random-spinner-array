export default function Modal({ item, showModal, setShowModal }: { item: { id: string; name: string; question: string; } | null, showModal: boolean, setShowModal: React.Dispatch<React.SetStateAction<boolean>> }) {
  if (showModal)
    return (
      <div className="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center z-[100]">

        <div className="absolute bg-white p-4 rounded-lg shadow-lg w-screen h-screen">
          <div className="flex justify-between mb-4">
            <h1 className="font-bold text-xl">{item?.name}</h1>
            <button onClick={() => setShowModal(false)} className="text-red-500">X</button>
          </div>
          <div className="text-xl ">
            {item?.question}
          </div>
        </div>

      </div>
    )
}