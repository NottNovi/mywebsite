import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navbarItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed w-full z-40 transition-all duration-300",
                isScrolled
                    ? "py-3 bg-background/80 backdrop-blur-md shadow-md"
                    : "py-6"
            )}
        >
            <div className="container flex items-center justify-between mx-auto">
                <a
                    href="#hero"
                    className="text-2xl font-bold text-primary flex items-center"
                >
                    {" "}
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">
                            NovaDev
                        </span>{" "}
                        Portfolio
                    </span>
                </a>

                {/* Desktop Navbar */}
                <div className="hidden md:flex space-x-8">
                    {navbarItems.map((item, key) => (
                        <a
                            href={item.href}
                            key={key}
                            className="text-lg font-medium text-foreground hover:text-primary transition duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
                {/* Mobile Navbar */}

                <button onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}> 
                    {isMobileMenuOpen ? <X size = {24}/> : <Menu size = {24}/>}
                </button>

                <div className = {cn(
                    "fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col",
                    "items-center justify-center transition-all duration-300 md:hidden", 
                    isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")}>
                    <div className="flex flex-col flex space-y-8 text-xl font-medium">
                        {navbarItems.map((item, key) => (
                            <a
                                href={item.href}
                                key={key}
                                className="text-lg font-medium text-foreground hover:text-primary transition duration-300"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};
