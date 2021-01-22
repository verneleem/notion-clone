import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { useAuth0 } from "@auth0/auth0-react"

import Button from "../button";
import ContextMenu from "../contextMenu";
import styles from "./styles.module.scss";
import GithubIcon from "../../images/github.svg";
import UserIcon from "../../images/user.svg";

const Layout = ({ children }) => {
  const { loginWithPopup, isAuthenticated: isAuth, logout, user } = useAuth0();
  const loginClickHandler = (event) => {
    event.preventDefault();
    loginWithPopup();
  }
  const router = useRouter();
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);

  const isLoginPage = router.pathname === "/login";

  const toggleContextMenu = () => {
    setIsContextMenuOpen(!isContextMenuOpen);
  };

  const closeContextMenu = () => {
    setIsContextMenuOpen(false);
  };

  const handleNavigation = (path) => {
    closeContextMenu();
    router.push(path);
  };

  return (
    <div id="layoutRoot">
      <Head>
        <title>Notion Clone</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <header className={styles.headerBar}>
        <div className={styles.logo}>
          <a href="/" role="link" tabIndex="0">
            notion<span style={{ fontSize: "1.25rem" }}>.clone</span>
          </a>
        </div>
        <nav className={styles.nav}>
          {!isLoginPage && !isAuth && <Button href="#" onClickHandler={loginClickHandler}>Login</Button>}
          {!isLoginPage && isAuth && (
            <div className={styles.user}>
              <span
                role="button"
                tabIndex="0"
                onClick={() => toggleContextMenu()}
              >
                <img src={user.picture ? user.picture : UserIcon} alt="User Icon" />
              </span>
            </div>
          )}
          {!isLoginPage && isAuth && isContextMenuOpen && (
            <ContextMenu
              menuItems={[
                {
                  id: "pages",
                  label: "Pages",
                  action: () => handleNavigation("/pages"),
                },
                {
                  id: "logout",
                  label: "Logout",
                  action: () => logout(),
                },
              ]}
              closeAction={() => closeContextMenu()}
              isTopNavigation={true}
            />
          )}
        </nav>
      </header>
      <main className={styles.content}>{children}</main>
      <footer className={styles.footerBar}>
        <hr className={styles.hr} />
        <div className={styles.github}>
          <a
            href="https://github.com/verneleem/notion-clone/tree/graphql"
            rel="noopener noreferrer"
            role="link"
            tabIndex="0"
          >
            <img src={GithubIcon} alt="Github Icon" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
