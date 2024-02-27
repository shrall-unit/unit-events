import Navbar from "./Navbar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-screen min-h-screen font-inter gap-y-52 flex flex-col items-center justify-center text-neutral-900">
      <Navbar />
      {children}
    </main>
  );
}

export default Layout;