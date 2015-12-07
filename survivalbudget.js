/* survivalbudget.js */
// This function hides the error messages on start up.
function hideAllErrors() {
  var errorMessages = document.getElementsByClassName("error");
  $("label").each(function(i){
        if($("#" + this.id).hasClass("error")){
			$("#" + this.id).hide();
		}
  });
}
// This function is the opposite to hideAllErrors
function showAllErrors() {
  var errorMessages = document.getElementsByClassName("error");
  $("label").each(function(i){
        if($("#" + this.id).hasClass("error")){
			$("#" + this.id).show();
		}
  });
}
// Checks if the input is a number.
function isNumber(num) {
    if(isNaN(num) == true){
      return 0;
	} else {
      return num;
    }	
}
// This is an object
// It represents the form.
function formObject() {
  this.rent = 0;
  this.food = 0;
  this.gas = 0;
  this.water = 0;
  this.electricity = 0;
  this.tel = 0;
  this.mob = 0;
  this.savings = 0;
  this.insurance = 0;
}
// This prototype function totals up the properties.
formObject.prototype.calculate = function() {
  var totalMonthly = (this.rent + this.food + this.gas + this.water + this.electricity + this.tel + this.mob + this.savings + this.insurance);
  var totalAnnual = (totalMonthly * 12);
  return {
    "totalMonthly":totalMonthly,
	"totalAnnual":totalAnnual
  };
}
// Shows the requested error.
function showError(property) {
     $("label").each(function(i){
	   if($("#" + this.id).hasClass("error") && this.id == property){
	      $("#" + this.id).show();
	   } 
	 });
}
// This function gets all of the data from the form.
function calculateFormData(){
  var fo = new formObject(), rent = $("#txtRent").val(), food = $("#txtFood").val(), gas = $("#txtGas").val(), water = $("#txtWater").val(), electricity = $("#txtElectricity").val(), tel = $("#txtTel").val(), mob = $("#txtMob").val(), savings = $("#txtSavings").val(), ins = $("#txtInsurance").val();
  var allOk = true;  
  // Check if rent is a number
  if(isNumber(rent) > 0){
     fo.rent = parseInt(rent);
  } else {
    showError("noRent");
	allOk = false;
  }
  // Check if food is a number ...
  if(isNumber(food) > 0){
     fo.food = parseInt(food);
  } else {
    showError("noFood");
	allOk = false;
  }
  if(isNumber(water) > 0){
     fo.water = parseInt(water);
  } else {
    showError("noWater");
	allOk = false;
  }
  if(isNumber(gas) > 0){
     fo.gas = parseInt(gas);
  } else {
    showError("noGas");
	allOk = false;
  }
  if(isNumber(electricity) > 0){
     fo.electricity = parseInt(electricity);
  } else {
    showError("noElectricity");
	allOk = false;
  }
  if(isNumber(tel) > 0){
     fo.tel = parseInt(tel);
  } else {
    showError("noTV");
	allOk = false;
  }
  if(isNumber(mob) > 0){
     fo.mob = parseInt(mob);
	 hideAllErrors();
  } else {
    showError("noMobiles");
  }
  if(isNumber(ins) > 0){
     fo.insurance = parseInt(ins);
  } else {
    showError("noInsurance");
	allOk = false;
  }
   if(isNumber(savings) > 0){
     fo.savings = parseInt(savings);
  } else {
    showError("noSavings");
	allOk = false;
  }
  if(allOk == true){
    var res = fo.calculate();
	output(res);
  }   
}
// Gives the results to the user
function output(res){
  $("#lblAnnual").html("Total Annual Budget: " + res.totalAnnual);
  $("#lblMonthly").html("Total Monthly Budget: " + res.totalMonthly);
}
