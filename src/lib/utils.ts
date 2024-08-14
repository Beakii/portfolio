import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { TECH_STACK } from "./types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function techStackMapper(techUsed:TECH_STACK){
	  switch (techUsed) {
		case "nextjs2":
			return "Next.js"
		case "reactjs":
			return "React.js"
		case "typescript":
			return "TypeScript"
		case "tailwindcss":
			return "Tailwind CSS"
		case "postgresql":
			return "PostgreSQL"
		case "go":
			return "Go"
		case "shadcnui":
			return "Shadcn UI"
		case "reactquery":
			return "React Query"
		case "nodejs":
			return "Node.js"
		case "nextauth":
			return "NextAuth"
		case "prisma":
			return "Prisma"
		case "stripe":
			return "Stripe"
		case "vitejs":
			return "Vite.js"
		case "prettier":
			return "Prettier"
		case "resend":
			return "Resend"
		case "drizzle":
			return "Drizzle"
		case "javascript":
			return "JavaScript"
		case "github":
			return "GitHub"
		default:
			return techUsed	
	}
}