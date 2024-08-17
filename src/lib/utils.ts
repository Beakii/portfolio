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
			return "shadcn-ui"
		case "reactquery":
			return "React Query"
		case "nodejs":
			return "Node.js"
		case "nextauth":
			return "Next Auth"
		case "prisma":
			return "Prisma"
		case "stripe":
			return "Stripe"
		case "vitejs":
			return "Vite"
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
		case "python":
			return "Python"
		default:
			return techUsed	
	}
}