'use client'

import styles from './DarkTheme.module.css'
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const DarkTheme: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
  
    // Efeito para garantir que o componente só renderize no cliente
    useEffect(() => {
        setMounted(true);
    }, []);
  
    // Evita renderização no servidor
    if (!mounted) {
        return null;
    }
  
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