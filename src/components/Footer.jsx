import { footerLinks } from "../constants";

export const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">


        {/* Shop info */}
        <p className="font-semibold text-gray text-xs">
          More ways to shop:{" "}
          <span className="underline text-blue cursor-pointer">
            Find an Apple Store
          </span>{" "}
          or{" "}
          <span className="underline text-blue cursor-pointer">
            other retailer
          </span>{" "}
          near you. <br />
          Or call 000800‑040‑1966.
        </p>

        {/* Bottom row */}
        <div className="border-t border-neutral-700 mt-5" />

        <div className="flex md:flex-row flex-col md:items-center justify-between mt-5 gap-2">
          <p className="font-semibold text-gray text-xs">
            Copyright &copy; 2024 Apple Inc. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-3">
            {footerLinks.map((link, i) => (
              <span key={link} className="flex items-center gap-3">
                <p className="font-semibold text-gray text-xs cursor-pointer hover:text-white transition-colors">
                  {link}
                </p>
                {i !== footerLinks.length - 1 && (
                  <span className="text-neutral-600 text-xs">|</span>
                )}
              </span>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};
