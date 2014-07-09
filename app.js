var prompt = require('sync-prompt').prompt;

var withdraws = [];
var deposits = [];
var balance = 1000;

var option = prompt('deposit (d), withdraw (w), quit (q)');

while(option != 'q'){
  var amount = prompt('Amount: ');
  amount = parseFloat(amount);

  if(option === 'd'){
    deposits.push(amount);
  }else{
    withdraws.push(amount);
  }
  option = prompt('deposit (d), withdraw (w), quit (q)');
}

var deps = 0, withs = 0;

for(var i = 0; i < deposits.length; i++){
  deps += deposits[i];
}
for(var j = 0; j < withdraws.length; j++ ){
  withs += withdraws[j];
}

balance += deps - withs;

if(balance < 0){
  balance -= 50;
}

console.log('Deposits: ', deposits);
console.log('Withdraws: ', withdraws);
console.log('Balance:  $'+ balance.toFixed(3));
