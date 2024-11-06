"use client";

import "~/styles/globals.css";

import { http, createStorage, cookieStorage } from "wagmi";
import { sepolia, bscTestnet, blastSepolia } from "wagmi/chains";
import { type Chain, getDefaultConfig } from "@rainbow-me/rainbowkit";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const projectId = "a9c7268df448ec5856e89f0cca165b66";

const queryClient = new QueryClient();

export const config = getDefaultConfig({
  appName: "WalletConnection",
  projectId,
  chains: [sepolia, bscTestnet, blastSepolia],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
});

export default function Web3Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
