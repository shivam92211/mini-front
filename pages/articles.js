import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '@/components/Post'
import { sortByDate } from '@/utils/sort'

const articles = ({ posts }) => {
  
  return (
    <div>
      <div className='flex justify-center text-4xl py-6 font-bold'>MiniFit Blog's</div>

      <div className='post-container'>
        {posts.map((post, index) => (
          <Post key={index} post={post}/>
        ))}
      </div>

    </div>
  )
}

export default articles

export async function getStaticProps() {
  // Get files from the post dir
  const files = fs.readdirSync(path.join('posts'))

  // Get slug and frontmatter from posts
  const posts = files.map(filename => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')

    const { data: frontmatter} = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  // console.log(posts)

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}