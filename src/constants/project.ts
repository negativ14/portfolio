import cutt from "@/assets/images/cutt.png";
import wallet from "@/assets/images/wallet.png";
import layers from "@/assets/images/layers.png";
import orbit from "@/assets/images/orbitpad.png";
import tipjar from "@/assets/images/tipjar.png";
import light from "@/assets/images/Light-SaaS.png";
import xnft from "@/assets/images/XNFT.png";
import { StaticImageData } from "next/image";

export interface ProjectItem {
  id: string;
  image: StaticImageData;
  techstack: string[];
  title: string;
  description?: string;
  link?: string;
  repo?: string;
}

export const projects: ProjectItem[] = [
  {
    id: "1",
    image: cutt,
    title: "Cutt",
    description:
      "A fullstack url shorter website with google login using NextAuth",
    techstack: [
      "next",
      "tanstack",
      "typescript",
      "postgres",
      "prisma",
      "node",
      "motion",
      "tailwind",
      "shadcn",
    ],
  },
  {
    id: "2",
    image: wallet,
    title: "Wallet",
    description:
      "A simple web3 wallet generator that creates public and private keys for Solana and Ethereum.",
    techstack: [
      "next",
      "zustand",
      "motion",
      "@solana/web3.js",
      "ethers",
      "tailwind",
      "shadcn",
    ],
  },
  {
    id: "3",
    image: layers,
    title: "Layers",
    description:
      "A frontend project focused on modern UI design and layout experimentation.",
    techstack: ["next", "tailwind", "typescript", "motion"],
  },
  {
    id: "4",
    image: orbit,
    title: "Orbit",
    description:
      "A dApp to launch your own Solana tokens with custom metadata integration.",
    techstack: [
      "next",
      "pinata",
      "tailwind",
      "@solana/web3.js",
      "typescript",
      "motion",
      "shadcn",
    ],
  },
  {
    id: "5",
    image: tipjar,
    title: "Tipjar",
    description:
      "A Solana dApp to send transactions and receive tips in dev mode, with a public page showing all contributions.",
    techstack: [
      "next",
      "mongoose",
      "zustand",
      "mongodb",
      "zod",
      "tailwind",
      "typescript",
      "motion",
      "shadcn",
    ],
  },
  {
    id: "6",
    image: light,
    title: "Light",
    description:
      "A sleek SaaS landing page built to highlight frontend development and design skills.",
    techstack: ["next", "tailwind", "typescript", "motion"],
  },
  {
    id: "7",
    image: xnft,
    title: "XNFT",
    description:
      "A responsive frontend project showcasing interactive UI components and animations.",
    techstack: ["next", "tailwind", "typescript", "motion"],
  },
];
