import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex h-20 justify-center items-center space-x-10 sticky top-0 bg-white">
            <Link href="#">Om meg</Link>
            <Link href="#">Utdanning</Link>
            <Link href="#">Arbeid</Link>
            <Link href="#">Personlige prosjekter</Link>
        </nav>
    );
}
