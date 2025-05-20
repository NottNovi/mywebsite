import { useEffect, useState } from "react";
import {Clock, Mail, Instagram, MapPin} from "lucide-react";
import { GrSnapchat } from "react-icons/gr";
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

          <div className="flex flex-col items-left bg-card rounded-lg p-6 shadow-xs">
          <h3 className="text-3xl font-bold">MY CONTACTS</h3>
            <ul className="space-y-4 items-text-left text-base pt-6">
              <li className="flex items-center gap-3 text-foreground">
                <Mail size={25} className="text-primary" />
                <a href= "mailto:notnovidev@gmail.com"><span className="hover:text-primary text-lg">notnovidev@gmail.com</span></a>
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <Instagram size={25} className="text-primary" />
                <a href= "https://www.instagram.com/j03v11?igsh=cXkzdDh2cjg4ZXV5" target="_blank" rel="noopener noreferrer"><span className="hover:text-primary text-lg">j03v11</span></a>
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <GrSnapchat size={25} className="text-primary" />
                <a href="https://www.snapchat.com/add/nova-050?share_id=A_v-a0ax5bs&locale=en-AU" target="_blank" rel="noopener noreferrer"><span className="text-lg hover:text-primary">nova-050</span></a>
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <FaDiscord size={25} className="text-primary" />
                <a href="https://discord.com/channels/@me" target="_blank" rel="noopener noreferrer"><span className="text-lg hover:text-primary">6okv</span></a>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col items-left bg-card rounded-lg p-6 shadow-xs">
          <h3 className="text-3xl font-bold">OTHER DETAILS</h3>
            <ul className="space-y-6 text-left text-base pt-4">
              <li className="flex items-left text-center gap-3 text-foreground">
                <MapPin size={30} className="text-primary" />
                <a href="https://www.google.com/maps/place/Melbourne+VIC/@-37.9707263,144.3937764,9z/data=!3m1!4b1!4m6!3m5!1s0x6ad646b5d2ba4df7:0x4045675218ccd90!8m2!3d-37.8136276!4d144.9630576!16zL20vMGNoZ3pt?entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer"><span className="text-lg hover:text-primary">Melbourne, VIC. Australia</span></a>
              </li>
              <li className="flex items-left text-center gap-3 text-foreground">
                <Clock size={30} className="text-primary" />
                <span className="text-lg"> My Current Time: (AEST) </span>
              </li>
              <li className="items-center gap-3  text-foreground">
              <span className="text-4xl font-bold text-primary">{melbourneTime}</span>
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <SiRobloxstudio size={25} className="text-primary" />
                <a href="https://www.roblox.com/users/2647901160/profile" target="_blank" rel="noopener noreferrer"><span className="text-lg hover:text-primary">@PassedOntoYou</span></a>
              </li>
              
            </ul>
          </div>
        </div>
        
      </div>
    </section>
  );
};
