import Link from "next/link";

const menuStyle =
  "block px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-200";

export default function Navbar() {
  return (
    <nav className="border-b py-3">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <a className={menuStyle}>Toska</a>
            </Link>
            <Link href="/dashboard">
              <a className={menuStyle}>Dashboard</a>
            </Link>
          </div>

          <div className="flex items-center">
            <Link href="/login">
              <a className={menuStyle}>Login</a>
            </Link>
            <Link href="/register">
              <a className={menuStyle}>Register</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
