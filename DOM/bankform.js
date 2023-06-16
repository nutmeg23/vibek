

// function BankAccount(customerName,balance=0){
//     this.customerName=customerName;
//     this.accountNumber=Date.now();
//     this.balance=balance;
//     this.deposit=function(amount){
//         this.balance+=amount;
    
//     };
//     this.withDraw=function(amount){
//         this.balance-=amount;
//     };

// }
// // const ramAccount=new Bankaccount('ram',7000);
// // const hariAccount=new Bankaccount('ram',7000);

// // hariAccount.deposit(2000);

// // console.log(ramAccount,hariAccount)




// const addForm=document.querySelector('#addAmount')
// const customerName=document.querySelector('#customerName')
// const balance=document.querySelector('#balance')



// const depositform=document.querySelector('#depositAmount')
// const accountNumber=document.querySelector('#accountNumber')
// const amount=document.querySelector('#amount')

// let accounts=[];
// addForm.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     const newAccount=new BankAccount(customerName.value, +balance.value);
//     accounts.push(newAccount);
//     console.log(accounts);
// });


// depositform.addEventListener('submit',(e)=>{
//     e.preventDefault();

//     const newAccount=accounts.find((value,index)=>value.accountNumber===+accountNumber.value);
//     newAccount.deposit(+amount.value);
//     console.log(accounts);
// });





// //prototype
// function BankAccount(customerNAme,balance=0){
//     this.customerName=customerName;
//     this.accountNumber=accountNumber;
//     this.balance=balance;
  
   
   
// }
// BankAccount.prototype.deposit=function(amount){
//     this.balance+=amount;
// };
// BankAccount.prototype.withdraw=function(amount){
//     this.balance-=amount;
// };
// function savingAccount(customerNAme,balance=0){
// BankAccount.call(this,customerNAme,balance);
// this.transactionLimit=5000;
// };

// savingAccount.prototype=Object.create(BankAccount.prototype);


// const ramAccount=new savingAccount("ram",5000);
// const sitaAccount=new savingAccount("ram",3000);



// // BankAccount.prototype.add='mura';
// // console.log(BankAccount.prototype);
// // const ramAccount=new BankAccount("ram",5000);
// // const sitaAccount=new BankAccount("ram",3000);

// sitaAccount.deposit(2000);
// console.log(ramAccount);
// console.log(sitaAccount);







//class  protoyype
// class BankAccount{
// constructor(customerNAme,balance=0){
//     this.customerName=customerName;
//     this.accountNumber=accountNumber;
//     this.balance=balance;  
// }
// deposit=function(amount){
//     this.balance+=amount;
// };
// withdraw=function(amount){
//     this.balance-=amount;
// };
// }
// class savingAccount extends BankAccount{
//     constructor(customerNAme,balance=0){
//     super(customerNAme,balance);
//     }
//     transactionLimit=50000;

//     takePersonalLoan(amount){
//         console.log(`take personal loan:${amount}`)
//     };


// };
// const ramAccount=new savingAccount('ram',6000)
// ramAccount.deposit(3000);
// ramAccount.takePersonalLoan(30000);
// console.log(ramAccount);




// encapsulation and static property

// class BankAccount {
//     customerName;
//     accountNumber;
//     #balance = 0;
//     constructor(customerName, balance = 0) {
//       this.customerName = customerName;
//       this.accountNumber = Date.now();
//       this.#balance = balance; //encapsulate property
//     }
//     deposit(amount) {
//       this.#balance += amount;
//     }
//     withdraw(amount) {
//       this.#balance -= amount;
//     }
//     setBalance(newBalance) {
//       if (isNaN(newBalance)) {
//         throw new Error("Number must be valid!");
//       }
//       this.#balance = newBalance;
//     }
//     getBalance() {
//       return this.#balance;
//     }
//   }
//   class CurrentAccount extends BankAccount {
//     transactionsLimit = 50000;
//     constructor(customerName, balance = 0) {
//       super(customerName, balance);
//     }
//     #calculateInterest(amount) {
//       console.log(`Calculating amount for : ${amount}`);
//       const interest = amount * 0.05;
//       console.log(`Calculated interest rate is : ${interest}`);
//     }
//     takeBusinessLoan(amount) {
//       this.#calculateInterest(amount);
//       console.log(`Taking business loan is : ${amount}`);
//     }
//   }
//   const ramAccount = new CurrentAccount("Ram", 7000);
//   ramAccount.takeBusinessLoan(20000);
//   // ramAccount.setBalance(9000);
//   // console.log(ramAccount.getBalance());
//   console.log(ramAccount);     



// static property
// class Author{
//     static dbEmail="email@gmail.com";
//     static dbPassword="password";
//     static dbtoken="idpasif";
// }
// console.log(Author.dbEmail);


class Person{
    static id=1;
    constructor(name,age,income){
        this.name=name;
        this.age=age;
        this.income=income;
        this.id=Person.id++;
    }
    static compareByAge(a,b){
        return a.age-b.age;
    }
    static compareByIncome(a,b){
        return a.income-b.income;
    }
    static compareByfind(value,index){
        return value.income>300;
    }
}

// const result=users.sort(Person.compareByAge);
// const result=users.sort(Person.compareByIncome);

const user1=new Person ("ram",39,300);
const user2=new Person ("ramu",9,233);
const user3=new Person ("sita",32,2433);
const users=[user1,user2,user3];


// const users=[user1,user2,user3];
// const result=users.sort((a,b)=>a.age-b.age);
// console.log(result);
const result=users.find(Person.compareByfind);
console.log(result);








