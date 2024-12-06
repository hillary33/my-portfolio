'use client'

import styles from './DarkTheme.module.css'
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export const DarkTheme: React.FC = () => {
    const { theme, setTheme } = useTheme();
  
    return (
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className={styles.button}
      >
        {theme === "dark" ? (
          <Moon className={styles.moon} />
        ) : (
        <Sun className={styles.sun} />
        )}
      </button>
  );
}