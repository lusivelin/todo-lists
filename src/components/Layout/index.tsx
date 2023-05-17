import { LayoutProps } from "@/components/Layout/type";

const Layout = ({ children }: LayoutProps) => {
  return (
    <main>
      <section>{children}</section>
    </main>
  );
};

export default Layout;
