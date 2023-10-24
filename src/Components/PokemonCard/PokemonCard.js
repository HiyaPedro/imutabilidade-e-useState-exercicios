import React from 'react'
import {Card, PokemonName, PokemonType, EvolveButton} from './styles'



const PokemonCard = (props) => {
    const{name, type, evolved, weight, color, image, id}=props.pokemon

    const evoluirPokemon = () => {
        props.setPokemon({...props.pokemon, name:'Pikachu', evolved: true, weight: 6, image:"https://archives.bulbagarden.net/media/upload/archive/4/4a/20130810072317%210025Pikachu.png", id: 1 })
    }
    
  return (
    <Card color={color}>
        <img src={image} alt={`Pokemon`}/>
        <PokemonName>{name}</PokemonName>
        <PokemonType>{type}</PokemonType>
        <p>{weight}kg</p>

        <EvolveButton onClick={() => evoluirPokemon()}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard