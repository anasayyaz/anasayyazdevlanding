import { ScrollProgress } from "./ScrollProgress";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function PublicShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
