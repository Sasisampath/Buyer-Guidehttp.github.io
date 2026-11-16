import Link from "next/link";
import Image from "next/image";
import { ROUTES } from "@/data/navigation";
import "./header.css";

const links = [
  { label: "All Buyer’s Guides", href: ROUTES.gallery },
  { label: "PRM Software", href: ROUTES.prm },
  { label: "Channel Management", href: ROUTES.channel },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href={ROUTES.gallery} className="site-header__logo" aria-label="JazzHQ Buyer’s Guides">
          <Image src="/assets/logo/jazzhq.svg" alt="JazzHQ" width={132} height={32} priority />
        </Link>
        <nav className="site-header__nav" aria-label="Buyer’s Guides">
          {links.map(({ label, href }) => <Link key={href} href={href} className="site-header__link">{label}</Link>)}
        </nav>
        <Link href={ROUTES.gallery} className="site-header__cta">Browse guides <span aria-hidden="true">→</span></Link>
      </div>
    </header>
  );
}
