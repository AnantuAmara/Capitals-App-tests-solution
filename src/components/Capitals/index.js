import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {activeCapitalId: countryAndCapitalsList[0].id}

  getCountryName = () => {
    const {activeCapitalId} = this.state
    const countryName = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === activeCapitalId,
    )
    return countryName.country
  }

  onChangeSelect = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  render() {
    const {activeCapitalId} = this.state
    const countryName = this.getCountryName()
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">Countries And Capitals</h1>
          <select
            id="capitals"
            className="select"
            onChange={this.onChangeSelect}
            value={activeCapitalId}
          >
            {countryAndCapitalsList.map(each => (
              <option value={each.id} key={each.id}>
                {each.capitalDisplayText}
              </option>
            ))}
          </select>
          <label htmlFor="capitals" className="label">
            is capital of which country?
          </label>
          <p className="paragraph">{countryName}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
