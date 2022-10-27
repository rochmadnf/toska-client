import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { authCheckState, authUserState } from "../store/authentication";

const menuStyle =
  "block px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-200";

export default function Navbar() {
  const setAuthCheck = useSetRecoilState(authCheckState);
  const authUser = useRecoilValueLoadable(authUserState);
  const { back } = useRouter();

  const logoutHandler = async () => {
    await axios.post("logout");
    setAuthCheck(false);
    back();
  };
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

          {authUser.contents && authUser.state === "hasValue" ? (
            <div className="flex items-center">
              <div className="flex items-center px-4 py-2 rounded-lg cursor-pointer">
                <div className="mr-2 flex-shrink-0 rounded-full h-6 w-6 overflow-hidden">
                  <img
                    src={authUser.contents.picture}
                    alt={authUser.contents.name}
                  />
                </div>
                <span className="pb-1">{authUser.contents.name}</span>
              </div>
              <div>
                <button
                  className={`${menuStyle} focus:outline-none`}
                  onClick={logoutHandler}
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center">
              <Link href="/login">
                <a className={menuStyle}>Login</a>
              </Link>
              <Link href="/register">
                <a className={menuStyle}>Register</a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
