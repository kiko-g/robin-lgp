import * as React from 'react'
import Seo from '../components/Seo'
import { graphql } from 'gatsby'
import Layout from '../layout'
import { BlogpostCard } from '../components/blog/BlogpostCard'
import '../styles/blog.css'

// prettier-ignore
const BlogPage = ({ data: { allMarkdownRemark: { edges }, }, }) => {
  return (
    <Layout location="Blog" liquid>
      <Seo title="Blog" />
      <main className="blog">
        <header>
          <h2>Blog</h2>
          <div>
            Welcome to our blog! This is where you'll find a little bit more about us. 
            We expect to shares some details and insights on the day to day life at Robin and a closer look at the development of our products.
          </div>
        </header>

        <article>
          {edges
            .filter((edge: { node: { frontmatter: { date: any } } }) => !!edge.node.frontmatter.date)
            .map((edge: { node: { id: React.Key } }) => (
              <BlogpostCard key={`blogpost-${edge.node.id}`} post={edge.node} />
            ))}
        </article>
      </main>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: [DESC, DESC], fields: [frontmatter___pinned, frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/(blog)/" } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 80)
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            slug
            title
            pinned
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 800, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
              }
            }
          }
        }
      }
    }
  }
`
