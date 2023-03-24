import * as React from "react"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm a Mathematics and Science teacher. I create this website using Gatsby and JSXGraph to help me teach. </p>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage
