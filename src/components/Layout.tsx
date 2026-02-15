import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <div className="lg:pl-80 pb-20 lg:pb-0">
        <main className="p-4 lg:p-8">
          <Navbar />
          {children}
        </main>
      </div>
    </div>
  );
};
