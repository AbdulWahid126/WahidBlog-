'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { posts } from '../../data/posts'
import CommentSection from '@/components/CommentSection'
import TableOfContents from '@/components/TableOfContents'

export default function BlogPost({ params }: { params: { id: string } }) {
  const router = useRouter()
  const post = posts.find((p) => p.id === params.id)

  if (!post) {
    return (
      <div className="text-white text-center">
        <h1 className="text-3xl font-bold mb-4">Post not found</h1>
        <button
          onClick={() => router.push('/')}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
        >
          Go back to home
        </button>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-lg shadow-lg"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold mb-4 text-white">{post.title}</h1>
          <div className="flex items-center gap-2 text-gray-300 mb-8">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span className="px-2 py-1 bg-purple-600 rounded-full text-sm">
              {post.category}
            </span>
          </div>
          <p className="text-gray-200 mb-12 text-lg leading-relaxed">
            {post.content}
          </p>
        </motion.div>

        {post.sections.map((section, index) => (
          <motion.section
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="mb-12"
          >
            <h2
              id={section.title.toLowerCase().replace(/\s+/g, '-')}
              className="text-2xl font-bold mb-4 text-white"
            >
              {section.title}
            </h2>
            <p className="text-gray-200 mb-6 leading-relaxed">
              {section.content}
            </p>
            {section.subsections?.map((subsection, subIndex) => (
              <div key={subIndex} className="mb-6 ml-6">
                <h3
                  id={subsection.title.toLowerCase().replace(/\s+/g, '-')}
                  className="text-xl font-semibold mb-3 text-white"
                >
                  {subsection.title}
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  {subsection.content}
                </p>
              </div>
            ))}
          </motion.section>
        ))}

        <CommentSection />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <button
            onClick={() => router.push('/')}
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
          >
            Back to all posts
          </button>
        </motion.div>
      </motion.article>

      <div className="lg:block">
        <TableOfContents sections={post.sections} />
      </div>
    </div>
  )
}

