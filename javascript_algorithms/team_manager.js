const team = {
  _players: [
    {
      firstName: 'Pablo', 
      lastName: 'Sanchez', 
      age: 11
    },
    {
      firstName: 'Martin', 
      lastName: 'Sirio', 
      age: 10
    },
    {
      firstName: 'Marce', 
      lastName: 'Marcelin', 
      age: 12
    }
  ],
  _games: [
    {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27
    },
    {
      opponent: 'Sacachispa',
      teamPoints: 32,
      opponentPoints: 23
    },
    {
      opponent: 'Bolivar',
      teamPoints: 27,
      opponentPoints: 42
    }
  ],
  get games() {
    return this._games;
  },
  get players() {
    return this._players;
  },
  addPlayer(firstName, lastName, age) {
    const player = {
      firstName,
      lastName,
      age
    }
    this._players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints) {
    const game = {
      opponent,
      teamPoints,
      opponentPoints
    }
    this._games.push(game);
  }
};

team.addPlayer('Steph', 'Curry', 28)
team.addPlayer('Lisa', 'Leslie', 44)
team.addPlayer('Bugs', 'Bunny', 76)
team.players

team.addGame('River', 33, 11)
team.addGame('Canchapelota', 22, 33)
team.addGame('Boca', 15, 9)
team.games