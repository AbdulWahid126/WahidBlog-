'use client'

import { motion } from 'framer-motion'

interface TableOfContentsProps {
  sections: {
    title: string;
    subsections?: {
      title: string;
    }[];
  }[];
}

export default function TableOfContents({ sections }: TableOfContentsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg sticky top-4"
    >
      <h2 className="text-xl font-semibold mb-4 text-white">On This Page</h2>
      <nav className="space-y-2">
        {sections.map((section, index) => (
          <div key={index}>
            <a
              href={`#${section.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="block text-gray-200 hover:text-purple-300 transition-colors"
            >
              {section.title}
            </a>
            {section.subsections && (
              <div className="ml-4 mt-1 space-y-1">
                {section.subsections.map((subsection, subIndex) => (
                  <a
                    key={subIndex}
                    href={`#${subsection.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block text-sm text-gray-300 hover:text-purple-300 transition-colors"
                  >
                    {subsection.title}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </motion.div>
  )
}

