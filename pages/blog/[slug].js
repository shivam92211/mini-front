import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked';
import Link from 'next/link'

const PostPage = ({frontmatter:{title, date, cover_image}, slug, content}) => {
  return (
      <div>
          

          <div className='post-card card-page shadow-lg'>
              <h1 className='post-title text-2xl font-semibold'>{title}</h1>
              <div className='post-date'>Posted on {date}</div>
              <img src={cover_image} alt={title} />
              <div className='post-body'>
                  <div dangerouslySetInnerHTML={{__html: marked(content)}}></div>
              </div>
          </div>

          <div className='flex justify-center'>
          <Link href="/articles"
            className='post-btn btn-back mt-6 ml-5'
          >Go Back
          </Link>
          
          </div>

          

      </div>
  )
}

export default PostPage

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: { slug } }) {
    
    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8')

    const {data: frontmatter, content} = matter(markdownWithMeta)

    return {
        props: {
            frontmatter,
            slug,
            content,
        },
    }
}



