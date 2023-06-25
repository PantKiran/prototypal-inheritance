function bankAccount(customerName, initalBalance) {
  (this.customerName = customerName), (this.initalBalance = initalBalance);
}
const Kiran = new bankAccount('Kiran', 5000);
const Llait = new bankAccount('Lalit', 9000);

bankAccount.prototype.bank = 'Nabil';
bankAccount.prototype.deposit = function (amount) {
  this.initalBalance += amount;
  console.log(
    `Hello ${this.customerName} your bank balance is ${this.initalBalance}`
  );
};

console.log(Kiran);
console.log(Kiran.bank);
Kiran.deposit(5000);
