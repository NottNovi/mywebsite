import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";


export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            
            {/* Theme toggle button */}
            <ThemeToggle/>

            {/* Background Effects*/}
            <StarBackground/>

            {/*Navigation bar */}
            <Navbar/>

            {/* Hero section */}

            {/* Main content */}

            {/*Footer */}
        </div>
    );
    }
