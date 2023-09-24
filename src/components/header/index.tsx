import { Grid2X2 } from "lucide-react";
import { cn } from "../../lib/utils";
import { ThemeToggle } from "../theme/themeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b-2 bg-background">
      <div className="container flex items-center h-16 space-x-4">
        <h1
          className="flex items-center mr-2 space-x-2 md:mr-6"
          data-testid="header"
        >
          <Grid2X2 className="w-4 h-4" aria-hidden="true" />
          <span className="font-bold">React Table</span>
        </h1>
        <nav className="flex items-center flex-1 space-x-6 text-sm font-medium">
          <a
            href={"https://en.ryte.com/"}
            target="_blank"
            className={cn(
              "flex items-center text-sm font-medium transition-colors hover:text-foreground/80"
            )}
            data-testid="ryte-link"
          >
            Ryte
          </a>
        </nav>
        <ThemeToggle className="ml-4" data-testid="theme-toggle" />
      </div>
    </header>
  );
}
