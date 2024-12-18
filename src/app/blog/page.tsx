import Link from 'next/link';
import { blogPosts } from '../data/blog';

export default function BlogPage() {
    return (
        <main className="container mx-auto">
            <div className="mx-auto max-w-2xl brd px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 h-screen">
                <h1 className="text-3xl brd font-bold mb-8 text-soft-brown">Blog Posts</h1>
                <div className="grid gap-6 brd">
                    {/* {blogPosts.map((post) => (
                        <div key={post.id} className="border border-gray-200 p-4 rounded-lg">
                            <Link href={`/blog/${post.slug}`}>
                                <h2 className="text-xl font-semibold mb-2 text-softbrown hover:underline">
                                    {post.title}
                                </h2>
                            </Link>
                            <p className="text-white text-sm font-semibold mb2">{post.date}</p>
                            <p>{post.excerpt}</p>
                        </div>
                    ))} */}
                </div>
            </div>
        </main>
    );
}