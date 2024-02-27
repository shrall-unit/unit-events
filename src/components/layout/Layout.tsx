import Footer from './Footer';
import Navbar from './Navbar';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex min-h-screen w-screen flex-col items-center justify-center gap-y-52 font-inter text-neutral-900'>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}

export default Layout;
