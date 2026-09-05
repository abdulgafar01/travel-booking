import Link from "next/link";

const links = [
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Destinations",
    href: "/destinations",
  },
  {
    label: "Travel Packages",
    href: "/travel-packages",
  },
  {
    label: "Newsletter",
    href: "/newsletter",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const legalLinks = [
  {
    label: "Privacy Policy",
    href: "/privacy",
  },
  {
    label: "Terms & Conditions",
    href: "/terms",
  },
  {
    label: "Was It Worthy?",
    href: "/reviews",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#071513] px-6 py-12 text-white md:px-[15%] md:py-16">
      <div className="mx-auto max-w-[900px]">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}

          <div>
            <Link
              href="/"
              className="text-[32px] font-light tracking-[-1.5px]"
            >
              haven
            </Link>

            <p className="mt-4 max-w-[200px] text-[14px] leading-[1.45] text-white/70">
              Each destination offers a unique experience,
              inviting travelers to create lifelong memories
              in these extraordinary locations.
            </p>

            {/* <p className="mt-8 text-[6px] text-white/60">
              Powered by
            </p>

            <div className="mt-1 text-[10px] font-bold">
              web tech
            </div> */}
          </div>

          {/* Links */}

          <div>
            <h3 className="text-[14px] font-semibold">
              LINKS
            </h3>

            <div className="mt-4 flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[14px] text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}

          <div>
            <h3 className="text-[14px] font-semibold">
              LEGAL
            </h3>

            <div className="mt-4 flex flex-col gap-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[14px] text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-5 text-center text-[14px] text-white/50">
          © 2025 Haven, Inc. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}