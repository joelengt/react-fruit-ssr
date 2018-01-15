import {Link} from '../routes'

class Sample extends React.Component {
  constructor(props) {
    super(props)
  }

  static async getInitialProps ({ query }) {
    console.log('query', query)
    return {}
  }

  render() {

    console.log('url', this.props.url.query.id)
    return (
      <div>
        <h2>Fruit Detail</h2>
        <Link route='/step/21'>
          <a>got to step 21</a>
        </Link>
      </div>
    )
  }
}

export default Sample