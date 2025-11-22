const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Abdul Wasay. Built with React, TypeScript & Tailwind CSS.
          </p>
          <p className="text-muted-foreground text-sm">
            Designed & Developed with 💜
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
