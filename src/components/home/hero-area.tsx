
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';

const news = [
  {
    id: 1,
    image: 'https://picsum.photos/800/600?random=1',
    title: 'The Future of Urban Living: Smart Cities Explained',
    text: 'Explore how technology is reshaping our cities, making them more efficient, sustainable, and connected than ever before. Dive into the latest innovations and challenges.',
    badges: ['Special Issue', 'Special Report'],
  },
  {
    id: 2,
    image: 'https://picsum.photos/800/600?random=2',
    title: 'Breakthrough in AI Research: New Self-Learning Algorithm',
    text: 'Scientists have developed a groundbreaking AI algorithm that can learn and adapt with minimal human intervention, opening new possibilities in various fields.',
    badges: ['Research Highlight', 'AI News'],
  },
  {
    id: 3,
    image: 'https://picsum.photos/800/600?random=3',
    title: 'Renewable Energy Hits New Milestones in Production',
    text: 'Recent data shows a significant increase in renewable energy production globally, indicating a positive shift towards sustainable power sources.',
    badges: ['Energy News', 'Sustainability'],
  },
];

export function HeroArea() {
  return (
    <section className="container py-12 md:py-20">  
      <Carousel>
        <CarouselContent>
          {news.map((item) => (
            <CarouselItem key={item.id}>
              <Card>
                <CardContent className="flex flex-col md:flex-row items-center p-6 gap-8">
                  <div className="w-full md:w-1/2">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={800}
                      height={600}
                      className="rounded-lg shadow-md w-full h-auto object-cover aspect-[4/3]"
                      priority
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="flex space-x-2 mb-4">
                      {item.badges.map((badge, index) => (
                        <Badge key={index} variant={index % 2 === 0 ? 'secondary' : 'outline'}>{badge}</Badge>
                      ))}
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">{item.title}</h1>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious onClick={() => {}}>Prev</CarouselPrevious>
        <CarouselNext onClick={() => {}}>Next</CarouselNext>
      </Carousel>
    </section>
  );
}
