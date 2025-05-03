
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

export function HeroArea() {
  return (
    <section className="container py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Mobile: Image below text. Desktop: Image on right */}
        <div className="order-2 md:order-1">
          <div className="flex space-x-2 mb-4">
            <Badge variant="secondary">Special Issue</Badge>
            <Badge variant="outline">Special Report</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            The Future of Urban Living: Smart Cities Explained
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Explore how technology is reshaping our cities, making them more efficient, sustainable, and connected than ever before. Dive into the latest innovations and challenges.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <Image
            src="https://picsum.photos/800/600"
            alt="Smart Cityscape"
            width={800}
            height={600}
            className="rounded-lg shadow-md w-full h-auto object-cover aspect-[4/3]"
            priority
            data-ai-hint="smart city future"
          />
        </div>
      </div>
    </section>
  );
}
