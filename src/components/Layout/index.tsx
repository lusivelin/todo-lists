import Navigation from "@/elements/Navigation";
import { LayoutProps } from "@/components/Layout/type";

const Layout = ({ children }: LayoutProps) => {
  return (
    <main>
      <Navigation />

      <section>{children}</section>

      <footer>Footer Here</footer>
    </main>
  );
};

export default Layout;
