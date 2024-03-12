import Footer from './Footer';
import Navbar from './Navbar';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex min-h-screen w-screen flex-col items-center justify-center gap-y-12 bg-unit-grey-10 font-lato text-unit-black-80 md:gap-y-24 lg:gap-y-32'>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}

export default Layout;
