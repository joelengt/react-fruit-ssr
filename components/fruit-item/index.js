import React from 'react'
import stylesheet from './style.scss'
import Link from 'next/link'

class Fruit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isToggleOn: true}
    // This binding is necessary to make `this` work in the callback
    this.handleStateClick = this.handleStateClick.bind(this)
  }

  handleStateClick() {
    // this.setState((prevState, props) => ({
    //   counter: prevState.counter + props.increment
    // }));

    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  getFruit() {
    let path = `/fruit/${ this.props.id }`
    return path
  }

  render() {
    return (
      <article className="fruit-item" key={ this.props.id }>
        <style dangerouslySetInnerHTML={{__html: stylesheet}}/>
        <h2>{ this.props.name }</h2>
        <p>{ this.props.color }</p>
        <img src={ this.props.image }></img>
        <div className="button">
          <p>
            <a href={ this.getFruit() }>info</a>
          </p>
        </div>
        <div onClick={ this.handleStateClick }>
          <p>{ this.state.isToggleOn ? 'ON' : 'OFF' }</p>
        </div>
      </article>
    )
  }
}

export default Fruit
