import { PostCard } from '@/entities/post';

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24">
      <PostCard />
    </section>
  );
}
