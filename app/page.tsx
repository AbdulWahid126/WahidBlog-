'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import PostCard from '@/components/PostCard'
import CategoryFilter from '@/components/CategoryFilter'
import { posts } from './data/posts'

const categories = Array.from(new Set(posts.map((post) => post.category)))

export default function Home() {
  const [filteredPosts, setFilteredPosts] = useState(posts)

  const handleFilterChange = (category: string) => {
    if (category === 'All') {
      setFilteredPosts(posts)
    } else {
      setFilteredPosts(posts.filter((post) => post.category === category))
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-7xl mx-auto"
    >
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-white text-center">Latest Blog Posts</h1>
      <CategoryFilter categories={categories} onFilterChange={handleFilterChange} />
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </motion.div>
  )
}

