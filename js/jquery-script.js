$(document).ready(function(){

	var bill = $('#bill');
	var percBtns = $('.tip-btn');
	var tipAmt = $('#tipamount');

	$('#submit').click(function(){
		submitClick();
	});

	$('#reset').click(function(){
		resetCalc();
	});

	function submitClick(){

		var totalBill = $(bill).val();

		if(!isNaN(totalBill)){

	    $.each(percBtns,function(index,btn){
				if(btn.checked){
					var tipPerc = btn.value;
					var tipAmount = Math.floor(totalBill * tipPerc * 100) / 100;
					$(tipAmt).html('$'+tipAmount);
				}
			});

	  } else {

	    alert('Please enter numbers only');
	    resetCalc();

	  }

	}

	function resetCalc(){

		$(bill).val('');
		$.each(percBtns,function(index,btn){
			if(btn.checked){
				btn.checked = false;
			}
		});

		$(tipAmt).html('$0.00');
	}

});