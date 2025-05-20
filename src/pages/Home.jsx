import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            
            {/* Theme toggle button */}
            <ThemeToggle />

            {/* Background Effects*/}
            <StarBackground />

            {/*Navigation bar */}
            <Navbar />

            {/* Hero section */}
            <main>
                <HeroSection />
                <AboutSection />
                <ProjectSection />
                <ContactSection />
                {/* Add more sections as needed */}
            </main>

            {/* Main content */}

            {/*Footer */}
        </div>
    );
    }
