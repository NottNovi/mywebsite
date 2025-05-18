import { CalendarCheck2, Code, Gamepad2 } from "lucide-react";

export const AboutSection = () => {
    return (
    <section id = "about" className="py-24 px-4 relative">
        {" "}
        <div className="container max-w-5xl mx-auto text-center z-10">
            <h2 className = "text-4xl md:text-5xl mb-12 text-center font-bold">
                About <span className="text-primary"> Me</span>
            </h2>

            <div className = "grid grid-cols-1 md:grid-cols-2 gap-12 items-center"> 
                <div className="space-y-6">
                    <h3 className="text-2xl md:text-3xl font-bold">
                        Passionate Developer
                    </h3>

                    <p className="text-muted-foreground"> 
                        I am a passionate devloper with a strong interest in web and game devlopment. I like trying out new things that would help me learn more about the field. 
                        My dream is to develop a game or a website which would have at least have 1 million user visits.
                        
                    </p>

                    <p className="text-muted-foreground"> 
                        If you have any project in mind and if the concept seems successful, feel free to reach out to me. I would love to work with you.
                    </p>

                    <a href="#contact" className="cosmic-button text-white hover:bg-primary/50">
                        {" "}
                        Get in Touch
                    </a> 
                </div>
                
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>                           
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Web Development</h4>
                                <p className="text-muted-foreground">
                                    Creating responsive websites and web applications with
                                    modern frameworks.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Gamepad2 className="h-6 w-6 text-primary"/>                           
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Game Development</h4>
                                <p className="text-muted-foreground">
                                    Coding interactive and engaging games using Lua and Python.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <CalendarCheck2 className="h-6 w-6 text-primary"/>                           
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Project Management</h4>
                                <p className="text-muted-foreground">
                                    Experience in managing projects and collaborating with teams effctively
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    );
}