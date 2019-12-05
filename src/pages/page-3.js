//import React from "react"
//import { Link } from "gatsby"

//import Layout from "../components/layout"
//import SEO from "../components/seo"

//const SecondPage = () => (
//  <Layout>
//    <SEO title="Page three" />
//    <h1>Hi from the second page from VIM?</h1>
//    <p>Welcome to page 2</p>
//    <Link to="/">Go back to the homepage</Link>
//  </Layout>
//)
//export default SecondPage




import { graphql } from "gatsby"
import React from "react"

class IndexComponent extends React.Component {
  render() {
    const data = this.props.data.allTargetCsv.edges
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Letter</th>
              <th>ASCII Value</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={`${row.node.ID} ${i}`}>
                <td>{row.node.Salary}</td>
                <td>{row.node.ID}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default IndexComponent

export const IndexQuery = graphql`
  query {
    allTargetCsv {
      edges {
        node {
          ID
          Salary
        }
      }
    }
  }
`

