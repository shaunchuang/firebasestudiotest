
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroArea } from '@/components/home/hero-area';
import { ContentGrid } from '@/components/home/content-grid';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroArea />
        <ContentGrid />
      </main>
      <Footer />
    </div>
  );
}

