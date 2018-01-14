import React from 'react'
import stylesheet from './style.scss'

class FruitDetail extends React.Component {
  constructor(props) {
    super(props)
    this.id = this.props.id

    console.log('ID QUE LLEGA', this.props.id)
  }

  getFruit(id) {
    let data = [
      {
        id: '1',
        name: 'apple',
        color: 'red',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReg7jdJDItUiZuHJjaixMQi4Bu9WQTuGP6spwUnomc4lPMf0ug'
      },
      {
        id: '2',
        name: 'orange',
        color: 'orange',
        image: 'https://t3.ftcdn.net/jpg/00/99/56/26/240_F_99562611_EIZ4AssrFTz1UNyOmM8KAChSeQNu5nMA.jpg'
      },
      {
        id: '3',
        name: 'banana',
        color: 'yellow',
        image: 'https://www.organicfacts.net/wp-content/uploads/2013/05/Banana3-1020x765.jpg'
      }
    ]

    let select = data.filter((element) => {
      return element.id === id
    })

    if (select.length === 0) {
      return (
        <p className="fruit-item">
          Fruit Not Found
        </p>
      )
    }

    let element = select[0]


    return (
      <article className="fruit-item" key={this.props.id}>
        <style dangerouslySetInnerHTML={{__html: stylesheet}}/>
        <h2>{ element.name }</h2>
        <p>{ element.color }</p>
        <img src={ element.image }></img>
      </article>
    )
  }

  render() {
    console.log('Render?', this.props.id)
    return (
      <div>
        { this.getFruit(this.props.id) }
      </div>
    )
  }
}

export default FruitDetail
