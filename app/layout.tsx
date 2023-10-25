import "./globals.css";
import Navbar from "./components/NavBar";
import styles from "./page.module.css";

export const metadata = {
  title: "WikiSoftyLine",
  description: "Generated by Firas Latrach ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <header className={styles.header}>
          {" "}
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
