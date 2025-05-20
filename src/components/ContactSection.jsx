import { useEffect, useState } from "react";
import {Clock, Mail} from "lucide-react";
import { SiRobloxstudio } from "react-icons/si";
import { FaDiscord } from "react-icons/fa";


export const ContactSection = () => {
  const [melbourneTime, setMelbourneTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: "Australia/Melbourne",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      const time = new Intl.DateTimeFormat("en-AU", options).format(new Date());
      setMelbourneTime(time);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">

          <div className="flex flex-col items-left justify-center bg-card rounded-lg p-6 shadow-xs">
          <h3>MY CONTACTS</h3>
            <ul className="space-y-4 items-text-left text-base">
              <li>
                <Mail size={25} className="text-primary" />
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <FaDiscord size={25} className="text-primary" />
                <span className="text-lg">6okv</span>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col items-left justify-center bg-card rounded-lg p-6 pt-8 shadow-xs">
          
            <ul className="space-y-4 text-left text-base">
              <li className="flex items-left text-center gap-3 text-foreground">
                <Clock size={30} className="text-primary" />
                <span className="text-lg">Current Time (Melbourne): </span>
              </li>
              <li className="items-center gap-3  text-foreground">
                <span className="text-4xl font-bold text-primary">{melbourneTime}</span>
      
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    </section>
  );
};
