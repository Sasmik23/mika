import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter();

    return (
        <nav className="nav-bar">
            <ul>
                <li className={`nav-item ${router.pathname === "/" ? "active" : ""}`}>
                    <Link href="/">Our Journey</Link>
                </li>
                <li className={`nav-item ${router.pathname === "/about" ? "active" : ""}`}>
                    <Link href="/about">About Us</Link>
                </li>
            </ul>
        </nav>
    );
}
