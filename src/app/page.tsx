import { ConnectButton } from "@rainbow-me/rainbowkit";
import "node_modules/@rainbow-me/rainbowkit/dist/index.css";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <ConnectButton />
    </main>
  );
}
