import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import Title from "../components/Title"

import { aboutMe, languages, tools_frameworks } from "../constants/aboutMe"

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

const About = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(imageOfMe)

  return (
    <Layout>
      <section className="about-page">
        <div class="section-center about-center">
          <Image fluid={fluid} className="about-img" />
          <article className="about-text">
            <Title title="About Me" />
            <p>{aboutMe}</p>
          </article>
        </div>
        <div class="section-center">
          <br></br>
          <br></br>
          <h4>Languages</h4>
              {<div className="about-stack">
                {languages.map(item => (
                  <span key={item.id}>{item}</span>
                ))}
              </div>}
              <br></br>
              <h4>Tools/Frameworks</h4>
              {<div className="about-stack">
                {tools_frameworks.map(item => (
                  <span key={item.id}>{item}</span>
                ))}
              </div>}
        </div>
      </section>
    </Layout>
  )
}
export default About
