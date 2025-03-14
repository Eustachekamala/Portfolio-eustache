import Link from "next/link";
import { Button } from "./ui/button";
import NavBar from "./NavBar";
import MobileNav from "./MobileNav";

function Header() {
    return ( 
        <header className="py-8 xl:py-12">
            <div className="container mx-auto flex justify-between items-center">
                {/**Logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">Eustache<span className="text-accent-600">.</span></h1>
                </Link>

                {/**Desktop navbar and hire me button */}
                <div className="hidden xl:flex items-center gap-8">
                    <NavBar/>
                    <Link  href="/contact">
                        <Button style={{paddingLeft : "14px", paddingRight: "14px", color : "white"}}>Hire me</Button>
                    </Link>
                </div>
                {/**Mobile nav */}
                <div className="xl:hidden">
                    <MobileNav/>
                </div>
            </div>
        </header>
     );
}

export default Header;