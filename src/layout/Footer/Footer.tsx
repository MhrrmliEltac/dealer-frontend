import FooterQuickLinks from "./FooterQuickLinks";

const Footer = () => {
  return (
    <footer>
      <section className="flex flex-col w-full items-center justify-center max-w-360 mx-auto gap-8 sm:gap-10 lg:gap-14 px-4 sm:px-8 lg:px-16 py-10 sm:py-14 lg:py-20">
        <img
          src="./cargo_auto_import.png"
          alt="cargo_auto_import"
          className="w-24 sm:w-36 lg:w-64 h-auto"
        />
        <FooterQuickLinks />
      </section>
    </footer>
  );
};

export default Footer;
