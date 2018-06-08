  var counter = 0;
  var targetNumber = Math.floor(Math.random() * 101)+19;
  $("#number").text(targetNumber);
  var blueValue =Math.floor(Math.random() * 12)+1; 
  var redValue =Math.floor(Math.random() * 12)+1; 
  var whiteValue =Math.floor(Math.random() * 12)+1; 
  var orangeValue =Math.floor(Math.random() * 12)+1; 
  var wins = 0;
  var losses = 0;

  function gameStart(){
      counter = 0;
      $("#counter").text(counter);
      targetNumber = Math.floor(Math.random() * 101)+19;
      $("#number").text(targetNumber);
      var blueValue =Math.floor(Math.random() * 12)+1; 
      var redValue =Math.floor(Math.random() * 12)+1; 
      var whiteValue =Math.floor(Math.random() * 12)+1; 
      var orangeValue =Math.floor(Math.random() * 12)+1; 
  }

  function numberCheck(){

      $("#counter").text(counter);

      if (counter === targetNumber){
      alert("You Win!");
      wins++;
      $("#wins").text(wins);
      gameStart();

  }
      if (counter > targetNumber){
      alert("You Lose!");
      result = "gameover";
      losses++;
      $("#losses").text(losses);
      gameStart();
  }
  }

  gameStart();

   $("#crystals").on("click",".blue-crystal", function() {
      counter += blueValue;
      numberCheck(counter);
  });
      $("#crystals").on("click",".red-crystal", function() {
      counter += redValue;
      numberCheck(counter);
  });
  $("#crystals").on("click",".white-crystal", function() {
      counter += whiteValue;
      numberCheck(counter);
  });
  $("#crystals").on("click",".orange-crystal", function() {
      counter += orangeValue;
      numberCheck(counter);
  });
