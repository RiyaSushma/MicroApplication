import { useState, Suspense } from "react";
import React from "react";

const EmailApplication = React.lazy(() => import("emailApplication/EmailPage"));
const ChatApplication = React.lazy(() => import("chatApplication/ChatPage"));

function App() {
  const [activeApp, setActiveApp] = useState(null); // Track which app is open

  return (
    <div className="h-screen flex flex-col">
      {/* Buttons Section (Fixed at Top) */}
      <div className="p-4 bg-gray-800 text-white flex justify-center gap-4 shadow-md">
        <button
          onClick={() => setActiveApp(activeApp === "email" ? null : "email")}
          className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
        >
          Open Email App
        </button>
        <button
          onClick={() => setActiveApp(activeApp === "chat" ? null : "chat")}
          className="px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600 transition"
        >
          Open Chat App
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex p-4 bg-gray-100">
        {activeApp === "email" && (
          <div className="w-full h-full bg-white shadow-lg rounded-lg p-6 flex items-center justify-center">
            <Suspense fallback={<div>Loading Email...</div>}>
              <EmailApplication />
            </Suspense>
          </div>
        )}

        {activeApp === "chat" && (
          <div className="w-full h-full bg-white shadow-lg rounded-lg p-6 flex items-center justify-center">
            <Suspense fallback={<div>Loading Chat...</div>}>
              <ChatApplication />
            </Suspense>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
