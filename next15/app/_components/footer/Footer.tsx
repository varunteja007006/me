import * as React from "react";
import ContactIcons from "../home/contact-icons";

export function Footer() {
  return (
    <footer className="p-10 space-y-10 text-primary">
      <ContactIcons />
      <div className="flex flex-col gap-4 justify-center items-center md:flex-row">
        <p>{`-- Made with React 💙 & Next JS 🤍 --`}</p>

        <p>{`< Developer />`}</p>

        <p>{`-- Varun Teja K --`}</p>
      </div>
    </footer>
  );
}
