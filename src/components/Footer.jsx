export const Footer = () => {
    return (
      <footer className="bg-secondary/30 py-6 mt-20">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} notnovidev. Built with ❤️ using React and Tailwind CSS.
          </p>
        </div>
      </footer>
    );
  };
  