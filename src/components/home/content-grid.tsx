
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

// Placeholder data - replace with actual data fetching
const latestArticles = [
  { id: 1, title: "Breaking Barriers: Women in Tech Leadership", summary: "Highlighting inspiring stories and the ongoing journey towards equality in the tech industry.", image: "https://picsum.photos/300/200?random=1", hint: "women tech leadership" },
  { id: 2, title: "Sustainable Travel: Tips for Eco-Conscious Explorers", summary: "Discover how to minimize your environmental footprint while enjoying your adventures.", image: "https://picsum.photos/300/200?random=2", hint: "sustainable travel nature" },
  { id: 3, title: "The Rise of AI in Creative Arts", summary: "How artificial intelligence is transforming music, visual arts, and writing.", image: "https://picsum.photos/300/200?random=3", hint: "ai creative art" },
];

const inDepthTopics = [
  { id: 1, title: "Global Supply Chain Resilience Post-Pandemic", date: "2024-07-20" },
  { id: 2, title: "The Ethics of Gene Editing Technologies", date: "2024-07-18" },
  { id: 3, title: "Decentralized Finance (DeFi): Risks and Opportunities", date: "2024-07-15" },
];

const weeklySelection = {
    title: "Mastering Remote Work Productivity",
    image: "https://picsum.photos/400/300?random=4",
    tags: ["Productivity", "Remote Work", "Lifestyle"],
    hint: "remote work desk",
};

const hotTopics = [
    { id: 1, title: "Climate Change Policies Update" },
    { id: 2, title: "Upcoming Election Analysis" },
    { id: 3, title: "Mental Health Awareness Trends" },
];


export function ContentGrid() {
  return (
    <section className="container py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column (Main Content) */}
        <div className="lg:col-span-2 space-y-12">
          {/* Latest Articles */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {latestArticles.map((article) => (
                <Card key={article.id} className="overflow-hidden">
                  <CardHeader className="p-0">
                     <Image
                        src={article.image}
                        alt={article.title}
                        width={300}
                        height={200}
                        className="w-full h-40 object-cover"
                        data-ai-hint={article.hint}
                      />
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-lg font-semibold mb-2 leading-snug">{article.title}</CardTitle>
                    <p className="text-sm text-muted-foreground line-clamp-2">{article.summary}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Separator />

          {/* In-depth Topics */}
          <div>
            <h2 className="text-2xl font-bold mb-6">In-depth Topics</h2>
            <ul className="space-y-4">
              {inDepthTopics.map((topic) => (
                <li key={topic.id} className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium hover:text-accent transition-colors cursor-pointer">{topic.title}</span>
                  <span className="text-sm text-muted-foreground">{topic.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column (Sidebar) - Moved to bottom on mobile */}
        <aside className="lg:col-span-1 space-y-12 order-first lg:order-last">
          {/* This week's selections */}
           <div>
             <h3 className="text-xl font-semibold mb-4">⭐️ This week's selections</h3>
             <Card className="overflow-hidden">
                <Image
                    src={weeklySelection.image}
                    alt={weeklySelection.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                    data-ai-hint={weeklySelection.hint}
                />
                <CardContent className="p-4">
                    <div className="flex flex-wrap gap-2 mb-2">
                        {weeklySelection.tags.map(tag => (
                            <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))}
                    </div>
                    <h4 className="font-medium">{weeklySelection.title}</h4>
                </CardContent>
             </Card>
           </div>

          {/* Author's column / Hot topics */}
          <div>
            <h3 className="text-xl font-semibold mb-4">✒️ Hot Topics</h3>
            <ul className="space-y-3">
              {hotTopics.map((topic) => (
                 <li key={topic.id} className="text-sm hover:text-accent transition-colors cursor-pointer">{topic.title}</li>
              ))}
            </ul>
          </div>

          {/* Subscribe to newsletter */}
          <div className="bg-primary text-primary-foreground p-6 rounded-lg">
             <h3 className="text-xl font-semibold mb-4">✉️ Subscribe to Newsletter</h3>
             <p className="text-sm text-primary-foreground/80 mb-4">Get the latest news and updates delivered to your inbox.</p>
             <form className="flex space-x-2">
                <Input type="email" placeholder="Enter your email" className="bg-background text-foreground placeholder:text-muted-foreground flex-1" />
                <Button type="submit" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">Subscribe</Button>
             </form>
          </div>
        </aside>
      </div>
    </section>
  );
}
