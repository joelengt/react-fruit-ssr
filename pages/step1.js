import {Link} from '../routes'
import {Router} from '../routes'

class Step extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleBack = this.handleBack.bind(this)
  }

  static async getInitialProps ({ query }) {
    console.log('query', query)
    return {}
  }

  handleClick() {
     // With route name and params
     // Router.pushRoute('sample', {slug: 'hello-world'})
     // With route URL
     Router.pushRoute('/animal/here/50')
   }

   handleBack() {
     // With route name and params
     // Router.pushRoute('sample', {slug: 'hello-world'})
     // With route URL
     Router.back()
   }

  render() {

    console.log('url', this.props.url.query.id)
    return (
      <div>
        <h2>step1s</h2>
        <div>ID: {this.props.url.query.id}</div>
        <button onClick={this.handleClick}>Home</button>
        <button onClick={this.handleBack}>go back</button>

		<br/>
        <Link route='/animal/here/21'>
          <a>got to animal sample 21</a>
        </Link>
      </div>
    )
  }
}

export default Step