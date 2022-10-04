import Link from "next/link";
const blog = () => {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>contact</a>
            </Link>
          </li>
        </ul>
      </header>
      <h1>This is a Blog Page</h1>
    </>
  );
};

export default blog;
