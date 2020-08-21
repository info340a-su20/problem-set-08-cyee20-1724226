import React, { Component } from "react"; //import React Component
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: this.props.pets,
      adopted: false,
    };
  }

  adopt = (petName) => {
    this.setState((state) => {
      let adoptedPet = state.pets.find((pet) => {
        return petName === pet.name;
      });
      adoptedPet.adopted = true;
      return adoptedPet;
    });
  };

  render() {
    let petInfo = this.state.pets;
    function breedArray(array) {
      let newBreedArray = [];
      for (let i = 0; i < array.length; i++) {
        if (!newBreedArray.includes(array[i].breed)) {
          newBreedArray.push(array[i].breed);
        }
      }
      return newBreedArray;
    }

    return (
      <div>
        <header className="jumbotron jumbotron-fluid py-4">
          <div className="container">
            <h1>Adopt a Pet</h1>
          </div>
        </header>

        <main className="container">
          <div className="row">
            <div id="navs" className="col-3">
              <AboutNav />
              <BreedNav breeds={breedArray(petInfo)} />
            </div>
            <div id="petList" className="col-9">
              <PetList pets={petInfo} adoptCallback={this.adopt} />{" "}
            </div>
          </div>
        </main>
        <footer className="container">
          <small>
            Images from{" "}
            <a href="http://www.seattlehumane.org/adoption/dogs">
              Seattle Humane Society
            </a>
          </small>
        </footer>
      </div>
    );
  }
}

class AboutNav extends Component {
  render() {
    return (
      <nav id="aboutLinks">
        <h2>About</h2>
        <ul className="list-unstyled">
          <li>
            <a href="#/">How to Adopt</a>
          </li>
          <li>
            <a href="#/">Volunteering</a>
          </li>
          <li>
            <a href="#/">Events</a>
          </li>
          <li>
            <a href="#/">Donate</a>
          </li>
          <li>
            <a href="#/">About Us</a>
          </li>
        </ul>
      </nav>
    );
  }
}

class BreedNav extends Component {
  render() {
    let breedsList = this.props.breeds.map((type) => {
      return (
        <li key={type}>
          <a href="#/">{type}</a>
        </li>
      );
    });

    return (
      <nav id="breedLinks">
        <h2>Pick a Breed</h2>
        <ul className="list-unstyled">{breedsList}</ul>
      </nav>
    );
  }
}

class PetCards extends Component {
  handleClick = (event) => {
    this.props.adoptCallback(this.props.pCards.name);
  };
  render() {
    let card = this.props.pCards;
    let isAdopted = card.adopted;

    return (
      <div className="card" onClick={this.handleClick}>
        <img className="card-img-top" src={card.img} alt={card.name} />
        <div className="card-body">
          <h3 className="card-title">
            {card.name + (isAdopted ? " (Adopted)" : "")}
          </h3>
          <p className="card-text">
            {card.sex} {card.breed}
          </p>
        </div>
      </div>
    );
  }
}

class PetList extends Component {
  render() {
    let newPetList = this.props.pets.map((type) => {
      return (
        <PetCards
          key={type.name}
          pCards={type}
          adoptCallback={this.props.adoptCallback}
        />
      );
    });
    return (
      <div>
        <h2>Dogs for Adoption</h2>
        <div className="card-deck">{newPetList}</div>
      </div>
    );
  }
}
export default App;
