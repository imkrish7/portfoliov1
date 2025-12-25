import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";

export default function App({ Component }: AppProps) {
  return (
    <div className="min-h-screen bg-white selection:bg-indigo-100 selection:text-indigo-700">
      <Navbar />
      <main>
        <Component />
      </main>
      <ContactFooter />
    </div>
  );
}
