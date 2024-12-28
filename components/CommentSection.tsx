'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Comment {
  id: number;
  text: string;
}

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState('')

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim()) {
      setComments([...comments, { id: Date.now(), text: newComment }])
      setNewComment('')
    }
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4 text-white">Comments</h2>
      <form onSubmit={handleSubmitComment} className="mb-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-2 border rounded bg-white bg-opacity-20 text-white placeholder-gray-300"
          rows={3}
          placeholder="Write a comment..."
        />
        <motion.button
          type="submit"
          className="mt-2 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Post Comment
        </motion.button>
      </form>
      <AnimatePresence>
        {comments.map((comment) => (
          <motion.div
            key={comment.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white bg-opacity-20 p-4 rounded mb-2"
          >
            <p className="text-white">{comment.text}</p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

