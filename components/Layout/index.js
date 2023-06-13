import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/">Spotlight</Link>
            </li>
            <li>
              <Link href="/art-pieces">Pieces</Link>
            </li>
            <li>
              <Link href="/favorites">Favorites</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>Here will be dragons</footer>
    </>
  );
}
