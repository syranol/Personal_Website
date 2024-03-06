import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Educations from "../components/Educations"
import Jobs from "../components/Jobs"
// import Projects from "../components/Projects"
// import Blogs from "../components/Blogs"

const IndexPage = () => {
    return (
      <Layout>
        <Hero />
        <Jobs />
        <Educations />
      </Layout>
    )
  }
  
  export default IndexPage