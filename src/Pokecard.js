import React, { Component } from "react";
const APP_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
let padToThree = number => (number <= 999 ? `00${number}`.slice(-3) : number);
class Pokecard extends Component {
  render() {
    let pokeImg = `${APP_API}${padToThree(this.props.id)}.png`;
    return (
      <div className="Pokecard">
        <h3>{this.props.name}</h3>
        <img src={pokeImg} key="1" alt="pokemon" />
        <p>{this.props.type}</p>
        <p>{this.props.exp}</p>
      </div>
    );
  }
}

export default Pokecard;
