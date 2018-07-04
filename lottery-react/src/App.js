import React, {Component} from 'react';
import './App.css';
import lottery from './lottery';
import web3 from './web3';

class App extends Component {
  state = {
    manager: '',
    balance: '',
    players: [],
  };

  async componentDidMount() {
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address);

    this.setState({manager, players, balance});
  }

  render() {
    return (
      <div>
        <h2>Hello world</h2>
        <p>This contract is managed by {this.state.manager}</p>
        <p>There are currently {this.state.players.length} people entered</p>
        <p>
          Competing to win {web3.utils.fromWei(this.state.balance, 'ether')}{' '}
          ether
        </p>
      </div>
    );
  }
}

export default App;
