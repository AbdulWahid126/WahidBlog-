'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Post } from '@/app/data/posts'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/posts/${post.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer"
      >
        <h2 className="text-xl font-semibold mb-2 text-white hover:text-purple-200 transition-colors">
          {post.title}
        </h2>
        <p className="text-gray-200">{post.content.substring(0, 150)}...</p>
        <span className="inline-block mt-2 px-2 py-1 bg-purple-500 text-white text-sm rounded">
          {post.category}
        </span>
      </motion.div>
    </Link>
  )
}

