// data/labs-db.js

const labs = [
    {lab: 'Express', done: true},
    {lab: 'Promises', done: false},
    {lab: 'APT', done: false}
  ];

  module.exports = {
    getAll: function() {
      return labs;
    }
  };
  