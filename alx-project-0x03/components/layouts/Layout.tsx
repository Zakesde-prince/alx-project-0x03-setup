import { LayoutProps } from "@/interface";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}
