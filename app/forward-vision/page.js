import React from "react";
import Chat from "./chat";

export const metadata = {
  title: "Forward Vision Assistant",
  description:
    "Ask the Forward Vision assistant about the program schedule, your team's stream, the pitch format, or your sustainability idea.",
};

// Full-screen chat: the navbar stays compact on this route and the footer is hidden
// (see components/navbar.js and components/footer.js). 84px is the compact navbar's height.
function page() {
  return (
    <main className="flex h-[calc(100dvh-84px)] w-full">
      <Chat />
    </main>
  );
}

export default page;
