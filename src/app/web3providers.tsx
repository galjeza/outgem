"use client";

import { http, createStorage, cookieStorage } from "wagmi";
import { sepolia, bscTestnet, blastSepolia } from "wagmi/chains";
import { type Chain, getDefaultConfig } from "@rainbow-me/rainbowkit";

const projectId = "";

export const config = getDefaultConfig({
  appName: "WalletConnection",
  projectId,
  chains: [sepolia, bscTestnet, blastSepolia],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
});
