import React from 'react'
import _ from 'lodash'
import styles from './poke.css'
import { getRandomInt } from 'components/getRandomInt'
import { getPokemon, PokeDataKey, PokeData } from 'components/getPokemon'


const PokeDetail: React.FC<{pokeData: PokeData}> = (props) => {
  const { pokeData } = props
  const keys = Object.keys(pokeData) as [PokeDataKey]

  const detail = _.chain(keys)
    .sort()
    .map(key => (
      pokeData[key] &&
        <div className={styles.detail} key={key}>
          <span>{key}</span>
          <img src={pokeData[key]} alt={key} />
        </div>
    ))
    .compact()
    .value()
  return (
    <div>
      {detail}
    </div>
  )
}

interface PokeApiProps {
  historyLength: number;
}

interface PokeApiState {
  history: PokeData[];
  current: PokeData;
}

class PokeApi extends React.Component<PokeApiProps, PokeApiState> {
  constructor (props: PokeApiProps) {
    super(props)
    this.state = {
      history: Array<PokeData>(props.historyLength),
      current: {
        back_default: '',
        back_female: '',
        back_shiny: '',
        back_shiny_female: '',
        front_default: '',
        front_female: '',
        front_shiny: '',
        front_shiny_female: ''
      }
    }
  }

  handleOnClick = () => {
    const { history } = this.state
    const pokemonId = getRandomInt(1, 500)

    getPokemon(pokemonId).then(pokeData => {
      this.setState({
        current: pokeData,
        history: _.chain(history)
          .concat(pokeData)
          .takeRight(this.props.historyLength)
          .compact()
          .value()
      })
    }).catch(e => {
      console.log(e)
    })
  }

  render () {
    const { history, current } = this.state
    const noHistory = !_.isEmpty(_.compact(history))
    return (
      <div>
        <button onClick={this.handleOnClick}>search</button>
        <PokeDetail pokeData={current} />
        <div className={styles.clearfix} />
        <div>
          {noHistory &&
            <ul>
              {history.map(item =>
                <li key={item.front_default}>
                  <img src={item.front_default} alt='' />
                  <img src={item.back_default} alt='' />
                </li>
              )}
            </ul>}
        </div>
      </div>
    )
  }
}

export default PokeApi
