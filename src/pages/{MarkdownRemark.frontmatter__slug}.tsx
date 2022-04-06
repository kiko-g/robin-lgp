import React from 'react'
import '../styles/blogpost.css'
import { graphql } from 'gatsby'
import { Layout } from '../layout/Layout'
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'
import { StaticImage } from 'gatsby-plugin-image'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function Template({ data }) {
  const post = data.markdownRemark
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const coverImage = getImage(frontmatter.featuredImage)
  deckDeckGoHighlightElement()

  return (
    <Layout location="Blogpost">
      <div className="blogpost">
        <header>
          <div>
            <GatsbyImage
              image={coverImage}
              alt="cover"
              objectFit="cover"
              objectPosition="50% 25%"
              className="h-48 rounded-lg opacity-80 shadow"
            />
          </div>
          <h1>{frontmatter.title}</h1>
        </header>
        <article dangerouslySetInnerHTML={{ __html: html }} />
        <footer>
          <span>{frontmatter.title}</span>
          <span>{frontmatter.date}</span>
        </footer>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        featuredImage {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
          publicURL
          extension
        }
      }
    }
  }
`
