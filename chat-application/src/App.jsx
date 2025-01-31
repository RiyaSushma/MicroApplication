import { Outlet } from "react-router-dom";
import { Header } from "./Components/Header";
import { Sidebar } from "./Components/Sidebar";
import { Container } from "./Components/Container";

function App() {
  

  return (
    <div className="h-screen w-screen max-w-full max-h-full flex bg-gradient-to-b from-sky-500 to-indigo-800 p-3">
      <div className="w-12">
        {/* Sidebar */}
        <Sidebar />
      </div>

      <div className="relative flex flex-1 rounded-2xl h-full w-full bg-white max-h-full">
        <div className="flex flex-col absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#e5e7eb_100%)] p-2.5">
          {/* Header */}
          <Header />
          {/* Main Container*/}
          <div className="relative p-2 flex-1">
          <Container background="bg-white">
            <Outlet />
          </Container>
          </div>
          {/* Footer */}
        </div>
      </div>
    </div>
  );
}

export default App;
