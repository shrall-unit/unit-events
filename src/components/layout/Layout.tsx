import Navbar from "./Navbar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-screen min-h-screen font-inter">
      <Navbar />
      {children}
    </main>
  );
}

export default Layout;
