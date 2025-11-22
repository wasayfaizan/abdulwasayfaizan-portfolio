const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-6 sm:py-8 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-muted-foreground text-xs sm:text-sm text-center md:text-left">
            © 2024 Abdul Wasay. Built with React, TypeScript & Tailwind CSS.
          </p>
          <p className="text-muted-foreground text-xs sm:text-sm text-center md:text-right">
            Designed & Developed with 💜
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
