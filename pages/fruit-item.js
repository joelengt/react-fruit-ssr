import React from 'react'
import Layout from '../components/Layout'
import FruitDetail from '../components/fruit-detail'

class Fruiit extends React.Component {
  constructor(props) {
    super(props)
    console.log('current id state', this.props.id)
  }

  static getInitialProps ({ query: { id } }) {
    console.log('query data ===>', query)
    console.log('Current id', id)
    return { id }
  }

  render() {

    console.log('url', this.props.url.query.id)
    return (
      <Layout title="Fruit Details">
        <div>
          <h2>Fruit Detail</h2>
          <FruitDetail id={ this.props.url.query.id }/>
        </div>
      </Layout>
    )
  }
}

export default Fruiit
