import Link from "next/link";
import { Button } from "./ui/button";
import NavBar from "./NavBar";
import MobileNav from "./MobileNav";

function Header() {
    return (
        <header className="sticky top-0 z-50 bg-primary/80 backdrop-blur-sm border-b border-white/5">
            <div className="container mx-auto flex justify-between items-center py-4 md:py-6 xl:py-8">
                {/**Logo */}
                <Link href="/">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Eustache<span className="text-accent-600">.</span></h1>
                </Link>

                {/**Desktop navbar and hire me button */}
                <div className="hidden lg:flex items-center gap-6">
                    <NavBar/>
                    <Link  href="/contact">
                        <Button className="px-4 py-2">Hire me</Button>
                    </Link>
                </div>

                {/**Mobile nav */}
                <div className="lg:hidden">
                    <MobileNav/>
                </div>
            </div>
        </header>
     );
}

export default Header;