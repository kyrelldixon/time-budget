import Link from "next/link";

export default () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/timer">
          <a>Timer</a>
        </Link>
      </li>
    </ul>
  </nav>
);
