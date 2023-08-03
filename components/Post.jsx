import React from 'react'
import Link from 'next/link'

const Post = ({post}) => {
  return (
    <div className='post-card mb-4'>
      <img src={post.frontmatter.cover_image} alt="Minifit Blog" />
      
      <div className='post-date'>
        Posted on {post.frontmatter.date}
      </div>

      <h3 className='text-2xl font-semibold'>{post.frontmatter.title}</h3>

      <p className='pb-4 text-lg font-medium'>{post.frontmatter.subtitle}</p>

      <Link href={`/blog/${post.slug}`}
      className='post-btn'>
        Read More
      </Link>
      

      

    </div>
  )
}

export default Post