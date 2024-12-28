'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface CategoryFilterProps {
  categories: string[];
  onFilterChange: (category: string) => void;
}

export default function CategoryFilter({ categories, onFilterChange }: CategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    onFilterChange(category)
  }

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-4 text-white">Filter by Category:</h2>
      <div className="flex flex-wrap gap-2">
        {['All', ...categories].map((category) => (
          <motion.button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category
                ? 'bg-[#14213d] text-white'
                : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>
    </div>
  )
}

