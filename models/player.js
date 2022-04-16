const seq = require('./sequelize');
const sequelize = seq.sequelize;

class Player extends seq.Model {
  getId() {
    return this.id;
  }
  getFirstname() {
    return this.firstname;
  }
  getLastname() {
    return this.lastname;
  }
  getShortname() {
    return this.shortname;
  }
  getSex() {
    return this.sex;
  }
  getAge() {
    return this.age;
  }
  getHeight() {
    return this.height;
  }
  getWeight() {
    return this.weight;
  }
  getRanking() {
    return this.ranking;
  }
  getPoints() {
    return this.points;
  }
  getLastMatches() {
    return this.lastMatches;
  }
  getCountryCode() {
    return this.countryCode;
  }
  getCountryPicture() {
    return this.countryPicture;
  }
  getPicture() {
    return this.picture;
  }
}

Player.init({
  'id': {
    type: seq.DataTypes.INTEGER(10),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  'firstname': {
    type: seq.DataTypes.STRING(20),
    allowNull: false,
  },
  'lastname': {
    type: seq.DataTypes.STRING(20),
    allowNull: false,
  },
  'shortname': {
    type: seq.DataTypes.STRING(6),
    allowNull: true,
  },
  'sex': {
    type: seq.DataTypes.STRING(1),
    allowNull: false,
  },
  'age': {
    type: seq.DataTypes.INTEGER(2),
    allowNull: false,
  },
  'height': {
    type: seq.DataTypes.INTEGER(3),
    allowNull: true,
  },
  'weight': {
    type: seq.DataTypes.INTEGER(6),
    allowNull: true,
  },
  'ranking': {
    type: seq.DataTypes.INTEGER(3),
    allowNull: false,
  },
  'points': {
    type: seq.DataTypes.INTEGER(5),
    allowNull: false,
  },
  'picture': {
    type: seq.DataTypes.STRING(200),
    allowNull: true,
  },
  'countryPicture': {
    type: seq.DataTypes.STRING(200),
    allowNull: true,
  },
  'countryCode': {
    type: seq.DataTypes.STRING(3),
    allowNull: false,
  },
  'lastMatches': {
    type: seq.DataTypes.STRING(5),
    allowNull: true,
  }
}, 
{
    sequelize,
    modelName: 'Player',
    tableName: 'player'
});

module.exports = Player;