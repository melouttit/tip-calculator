function tipCalculate(slider, bill){
  var totalBill = document.getElementById('bill').value;
  var tipPerc = getPercChecked();

  //NEW PART
  if(!isNaN(totalBill)){
    var tipAmount = Math.floor(totalBill * tipPerc * 100) / 100; //NEW PART
    var tipBox = document.getElementById('tipamount');
    tipBox.innerHTML = "$" + tipAmount;
  } else {
    alert('Please enter numbers only');
    resetCalc();
  }
}

function getPercChecked(){
  var percBtns = document.getElementsByClassName('tip-btn');
  for(var i=0; i < percBtns.length; i++){
    if(percBtns[i].checked){
      return percBtns[i].value;
    }
  }
}

//REVIEW THIS
function resetCalc(){
  document.getElementById('bill').value = '';
  
  var percBtns = document.getElementsByClassName('tip-btn');
  for(var i=0; i < percBtns.length; i++){
    percBtns[i].checked = false;
  }

  var tipBox = document.getElementById('tipamount');
  tipBox.innerHTML = '$0.00';
}
