import Header from '../Header';

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <main className='p-4 lg:px-48'>{children}</main>
    </>
  );
};

export default Layout;
