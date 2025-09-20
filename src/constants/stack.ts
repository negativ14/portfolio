import ReactIcon from "@/assets/icons/ReactIcon";
import NextIcon from "@/assets/icons/NextIcon";
import TailwindIcon from "@/assets/icons/TailwindIcon";
import TypeScriptIcon from "@/assets/icons/TypeScriptIcon";
import ReduxIcon from "@/assets/icons/ReduxIcon";
import MotionIcon from "@/assets/icons/MotionIcon";
import ZustandIcon from "@/assets/icons/ZustandIcon";
import FigmaIcon from "@/assets/icons/FigmaIcon";
import GitIcon from "@/assets/icons/GitIcon";
import JestIcon from "@/assets/icons/JestIcon";
import JavaScriptIcon from "@/assets/icons/JavaScriptIcon";
import ShadcnIcon from "@/assets/icons/ShadcnIcon";
import TanstackIcon from "@/assets/icons/TanstackIcon";

import NodeIcon from "@/assets/icons/NodeIcon";
import ExpressIcon from "@/assets/icons/ExpressIcon";
import MongoDbIcon from "@/assets/icons/MongoDBIcon";
import PostgresIcon from "@/assets/icons/PostgresIcon";
import PrismaIcon from "@/assets/icons/PrismaIcon";
import MongooseIcon from "@/assets/icons/MongooseIcon";
import ZodIcon from "@/assets/icons/ZodIcon";
import PostmanIcon from "@/assets/icons/PostmanIcon";
import VercelIcon from "@/assets/icons/VercelIcon";
import SocketioIcon from "@/assets/icons/Socket.ioIcon";
import TurboRepoIcon from "@/assets/icons/TurboRepoIcon";

export interface StackItem {
  id: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const primaryStack: StackItem[] = [
  { id: "nextjs", icon: NextIcon },
  { id: "typescript", icon: TypeScriptIcon },
  { id: "tailwind", icon: TailwindIcon },
  { id: "redux", icon: ReduxIcon },
  { id: "motion", icon: MotionIcon },
  { id: "tanstack", icon: TanstackIcon },
  { id: "zustand", icon: ZustandIcon },
  { id: "shadcn", icon: ShadcnIcon },
  { id: "react", icon: ReactIcon },
  { id: "figma", icon: FigmaIcon },
  { id: "git", icon: GitIcon },
  { id: "jest", icon: JestIcon },
  { id: "javascript", icon: JavaScriptIcon },
];

export const secondaryStack: StackItem[] = [
  { id: "node", icon: NodeIcon },
  { id: "express", icon: ExpressIcon },
  { id: "mongodb", icon: MongoDbIcon },
  { id: "postgres", icon: PostgresIcon },
  { id: "prisma", icon: PrismaIcon },
  { id: "mongoose", icon: MongooseIcon },
  { id: "zod", icon: ZodIcon },
  { id: "postman", icon: PostmanIcon },
  { id: "vercel", icon: VercelIcon },
  { id: "socketio", icon: SocketioIcon },
  { id: "turborepo", icon: TurboRepoIcon },
];
