import { Footer as FbFooter } from "flowbite-react";

const Footer = () => {
  return (
    <FbFooter container className="absolute bottom-0 bg-slate-800">
      <div className="flex w-full justify-center">
        <FbFooter.Copyright
          href="#"
          by="Yehonatan Moravia"
          year={2024}
          className="text-slate-100"
        />
      </div>
    </FbFooter>
  );
};

export default Footer;
