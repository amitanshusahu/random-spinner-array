import NavBar from "./components/UI/Layout/NavBar";
import SafeArea from "./components/UI/Layout/SafeArea";
import RandomSpinner from "./components/UI/RandomSpinner/RandomSpinner";

export default function App() {

  // TODO: make this dynamic before turning into a npm package, for now it's fucking waste of time
  const items = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10"]

  return (
    <main>
      <SafeArea>
        <NavBar />
        <div className="flex flex-col justify-center items-center h-[calc(100vh-200px)] ">
          <RandomSpinner items={items} />
        </div>
      </SafeArea>
    </main>
  )
}