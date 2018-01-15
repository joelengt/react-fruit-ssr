import React from 'react'
import Layout from '../components/Layout'
import dynamic from 'next/dynamic'
import FruitList from '../components/fruits'

class Humans extends React.Component {
  render() {
    return(
      <div>
        humans
      </div>
    )
  }
}

class FruitItem extends React.Component {
  render() {
    return(
      <div>
        FruitItem
      </div>
    )
  }
}

class Fruiit extends React.Component {
  constructor(props) {
    super(props)
    console.log('current id state', this.props.id)
  }

  static getInitialProps ({ query: { id } }) {
    console.log('Current id', id)
    return { id }
  }

  render() {

    console.log('url', this.props.url.query.id)
    return (
      <Layout title="Fruit Details">
        <div>
          <h2>Fruit Detail!</h2>
        </div>
        <FruitList/>
      </Layout>
    )
  }
}

export default Fruiit
