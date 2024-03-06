import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"


const imageOfMe = graphql`
  {
    file(relativePath: { eq: "hero-img.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(imageOfMe)

  return (
    <header className="hero">
      <div class="section-center hero-center">
        <article className="hero-info">
          <div>
            <div class="underline"></div>
            <h1 className="hero-name"> I'm Sean</h1>
            <h4 className="hero-job"> Software Engineer</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <SocialLinks />
          </div>
        </article>
          <Image fluid={fluid} className="hero-img" />
      </div>
    </header>
  )
}

export default Hero
