import React from "react"
import { SEO, Navbar, Banner, Restaurant } from "../components/"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Navbar />
    <Banner />
    <Restaurant />
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link> */}
  </>
)

export default IndexPage
