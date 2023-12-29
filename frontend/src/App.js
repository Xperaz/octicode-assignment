import Users from "./components/Users";

function App() {
  return (
    <div className="flex flex-col items-center w-full gap-10 text-white my-10">
      <h1 className="font-bold text-[1.5em] text-[#404040]">Octicode Community</h1>
      <Users />
    </div>
  );
}

export default App;
