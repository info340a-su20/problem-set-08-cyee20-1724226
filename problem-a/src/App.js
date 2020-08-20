import React, { Component } from "react"; //import React Component

// const EXAMPLE_SENATORS = [
//   {
//     id: "C000127",
//     name: "Maria Cantwell",
//     state: "WA",
//     party: "Democrat",
//     phone: "202-224-3441",
//     twitter: "SenatorCantwell",
//   },
//   {
//     id: "M001111",
//     name: "Patty Murray",
//     state: "WA",
//     party: "Democrat",
//     phone: "202-224-2621",
//     twitter: "PattyMurray",
//   },
// ];

export class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>US Senators 2019</h1>
        <SenatorTable senators={this.props.senators} />
      </div>
    );
  }
}

export class SenatorTable extends Component {
  render() {
    let senatorArray = this.props.senators.map((senator) => {
      return <SenatorRow key={senator.id} senator={senator} />;
    });
    return (
      <table className="table table-bordered">
        <TableHeader cols={["Name", "State", "Phone", "Twitter"]} />
        <tbody>{senatorArray}</tbody>
      </table>
    );
  }
}

export class TableHeader extends Component {
  render() {
    let listName = this.props.cols.map((name) => {
      return <th key={name.toString()}>{name}</th>;
    });

    return (
      <thead>
        <tr>{listName}</tr>
      </thead>
    );
  }
}

export class SenatorRow extends Component {
  render() {
    let senator = this.props.senator;
    let senatorTwitter = "https://twitter.com/" + senator.twitter;
    let senatorParty = senator.party.charAt(0);
    let senatorNum = "tel:" + senator.phone;
    return (
      <tr>
        <td>{senator.name}</td>
        <td>
          {senatorParty} - {senator.state}
        </td>
        <td>
          <a href={senatorNum}>{senator.phone}</a>
        </td>
        <td>
          <a href={senatorTwitter}>@{senator.twitter}</a>
        </td>
      </tr>
    );
  }
}
