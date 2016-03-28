//STEP 1
var submit = document.getElementById('submit');
var reset = document.getElementById('reset');

submit.onclick = tipCalculate;
reset.onclick = resetCalculator;

function tipCalculate(slider, bill){
  console.log("TIP CALCULATE");

  //STEP 2
  var totalBill = document.getElementById('bill').value;
  console.log(totalBill);
  var tipPerc = getPercChecked();

  //STEP 6
  console.log(tipPerc);
  console.log(!isNaN(totalBill));
  if(!isNaN(totalBill)){
    var tipAmount = Math.floor(totalBill * tipPerc * 100) / 100;
    //STEP 7
    var roundedTip = tipAmount.toFixed(2);
    var tipBox = document.getElementById('tipamount');
    //STEP 8
    tipBox.innerHTML = "$"+roundedTip;
    console.log(roundedTip);
  } else {
    //STEP 9
    alert('Please enter numbers only');
    resetCalculator();
  }
}

//STEP 3
function getPercChecked(){
  var percBtns = document.getElementsByClassName('tip-btn');

  //STEP 4
  for(var i=0; i < percBtns.length; i++){
    if(percBtns[i].checked){
      //STEP 5
      console.log(percBtns[i]);
      return percBtns[i].value;
    }
  }
}

//FOR HOMEWORK
function resetCalculator(){
  document.getElementById('bill').value = '';

  for(var i=0; i < percBtns.length; i++){
    percBtns[i].checked = false;
  }

  var tipBox = document.getElementById('tipamount');
  tipBox.innerHTML = '$0.00';
}
