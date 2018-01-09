'use strict';

RockPizza.controller('MainController', function($scope){

  $scope.pizzas = [
    {
      name: "Margherita",
      ingredients: [
        "ser",
        "sos pomidorowy"
      ],
      popularity: 0,
    },
    {
      name: "Capriciosa",
      ingredients: [
        "ser",
        "sos pomidorowy",
        "szynka",
        "pieczarki"
      ],
      popularity: 12,
    },
    {
      name: "Salame",
      ingredients: [
        "ser",
        "sos pomidorowy",
        "salami",
        "cebula"
      ],
      popularity: 3,
    }
  ];

});
