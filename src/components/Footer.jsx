import { footerLinks } from "../constants";

// Map each footer link to its Apple URL
const footerUrls = {
  "Privacy Policy": "https://www.apple.com/legal/privacy/",
  "Terms of Use": "https://www.apple.com/legal/internet-services/terms/site.html",
  "Sales Policy": "https://www.apple.com/shop/product/help/returns_refund.html",
  Legal: "https://www.apple.com/legal/",
  "Site Map": "https://www.apple.com/sitemap/",
};

export const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        {/* Top border */}
        <div className="border-t border-neutral-700 pb-5" />

        {/* Shop info */}
        <p className="font-semibold text-gray text-xs">
          More ways to shop:{" "}
          <a
            href="https://www.apple.com/retail/"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue cursor-pointer hover:text-white transition-colors"
          >
            Find an Apple Store
          </a>{" "}
          or{" "}
          <a
            href="https://www.apple.com/buy/"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue cursor-pointer hover:text-white transition-colors"
          >
            other retailer
          </a>{" "}
          near you. <br />
          Or call{" "}
          <a
            href="tel:0008000401966"
            className="hover:text-white transition-colors"
          >
            000800‑040‑1966
          </a>
          .
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
                <a
                  href={footerUrls[link] || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-gray text-xs cursor-pointer hover:text-white transition-colors"
                >
                  {link}
                </a>
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
