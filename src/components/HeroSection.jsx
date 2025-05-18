

export const HeroSection = () => {
    return <section id = "hero" 
    className = "relative min-h-screen flex flex-col items-center justify-center px-4 py-5 bg-gradient-to-b from-background to-background/5 bg-cover bg-center text-foreground"> 

        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                    <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1"> JOEL</span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> a CS Student</span>
                </h1>

                <p className="text-lg md:tex-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3"> 
                    I work on random projects for the time being while studying Computer Sceince and Science in Immunology.
                    Currently trying out new things and learning new skills. I am a full stack developer with a focus on the MERN stack. I also am very experienced with Python
                </p>

                <div>
                    <a href="#projects" className="cosmic-button bg-primary text-white hover:bg-primary/80 transition duration-300 ease-in-out">
                        View My Work
                    </a>
                </div>
    
            </div>

        </div>

    </section>
}