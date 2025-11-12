import cutt from "@/assets/images/cutt.png";
import wallet from "@/assets/images/wallet.png";
import layers from "@/assets/images/layers.png";
import orbit from "@/assets/images/orbitpad.png";
import tipjar from "@/assets/images/tipjar.png";
import light from "@/assets/images/Light-SaaS.png";
import xnft from "@/assets/images/XNFT.png";
import { StaticImageData } from "next/image";
import watchmv from "@/assets/images/watchmv.png";

export interface ProjectItem {
  id: string;
  image: StaticImageData;
  techstack: string[];
  title: string;
  description: string;
  link: string;
  repo: string;
}

export const projects: ProjectItem[] = [
  {
    id: "1",
    image: watchmv,
    title: "watchMV",
    description:
      "An AI-powered movie and TV discovery platform that combines Gemini AI and TMDB to deliver smart, real-time search results with smooth streaming and skeleton-based loading.",
    techstack: ["next", "redux", "typescript", "TMDB api", "motion", "shadcn"],
    link: "https://watchmv.negativ.in",
    repo: "https://github.com/negativ14/watchMV",
  },
  {
    id: "2",
    image: cutt,
    title: "Cutt",
    description:
      "A fullstack URL shortener app with Google authentication using NextAuth and a clean dashboard UI for managing links.",
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
    link: "https://cutt.negativ.in",
    repo: "https://github.com/negativ14/cutt",
  },
  {
    id: "3",
    image: wallet,
    title: "Wallet",
    description:
      "A simple web3 wallet generator that creates secure public and private keys for Solana and Ethereum with a modern UI.",
    techstack: [
      "next",
      "zustand",
      "motion",
      "@solana/web3.js",
      "ethers",
      "tailwind",
      "shadcn",
    ],
    link: "https://wallet.negativ.in",
    repo: "https://github.com/negativ14/wallet",
  },
  {
    id: "4",
    image: layers,
    title: "Layers",
    description:
      "A frontend project focused on modern UI design and layout experimentation to explore creative, responsive design systems.",
    techstack: ["next", "tailwind", "typescript", "motion"],
    link: "https://layers-negativ.vercel.app",
    repo: "https://github.com/negativ14/Layers-UI",
  },
  {
    id: "5",
    image: orbit,
    title: "Orbit",
    description:
      "A dApp that enables users to launch their own Solana tokens with metadata integration and Pinata IPFS support.",
    techstack: [
      "next",
      "pinata",
      "tailwind",
      "@solana/web3.js",
      "typescript",
      "motion",
      "shadcn",
    ],
    link: "https://orbitpad.negativ.in",
    repo: "https://github.com/negativ14/OrbitPad",
  },
  {
    id: "6",
    image: tipjar,
    title: "Tipjar",
    description:
      "A Solana dApp to send and receive tips in dev mode, featuring a public page that displays all transactions and contributions.",
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
    link: "https://tipjar.negativ.in",
    repo: "https://github.com/negativ14/TipJar",
  },
  {
    id: "7",
    image: light,
    title: "Light",
    description:
      "A sleek SaaS landing page built to highlight frontend development and modern design aesthetics with smooth motion effects.",
    techstack: ["next", "tailwind", "typescript", "motion"],
    link: "https://light-saas-negativ.vercel.app",
    repo: "https://github.com/negativ14/Light-SaaS",
  },
  {
    id: "8",
    image: xnft,
    title: "XNFT",
    description:
      "A responsive frontend project showcasing interactive UI components, animations, and transitions with a minimal aesthetic.",
    techstack: ["next", "tailwind", "typescript", "motion"],
    link: "https://xnft-negativ.vercel.app",
    repo: "https://github.com/negativ14/XNFT",
  },
];
