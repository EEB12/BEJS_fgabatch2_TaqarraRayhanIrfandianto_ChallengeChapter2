
class bank{


    constructor(Saldo){
        this.Saldo=Saldo
    }
}


class Rekening extends bank{


    constructor(Saldo){
        super(Saldo)
    }

    deposit(value){
        
        return new Promise((resolve) =>{
            setTimeout(() => {
                this.Saldo+=value
                this.CheckTransaction("deposit")
                resolve()
            },2000);
            
        });
        
    }
    withdraw(value){
        return new Promise ((resolve)=>{
            if(this.Saldo<value){
                alert(`You don't have insufficient balance `)
               return
            }

            setTimeout(()=>{
                this.Saldo-=value
                this.CheckTransaction("withdraw")
                resolve
            },2000)
            


        })
       
       
    }

    checkBalance(){

        return new Promise ((resolve)=>{
            setTimeout(()=>{
                alert(`saldo anda adalah `+this.Saldo)
                resolve()
            },2000)
            


        })
        
    }
    CheckTransaction(information){
        alert(`${information} Berhasil, saldo anda sekarang adalah `+this.Saldo)
    }
    
}

let akun= new Rekening(0)
let command
let value

async function main(){

    while(isNaN(command) || command > 4 || command < 1 ){
        value=NaN
    
        command=Number(window.prompt(`Pick command by typing the number:
        1. Withdraw
        2. Deposit
        3. Check Balance
        4. Exit`))
        if(isNaN(command) || command > 4 || command < 1){
            alert("please type valid number between 1 until 3 !!!")
            continue
        }
        if(command == 3){
            command=NaN
            await akun.checkBalance()
            continue
        }
        if(command == 4){
            
            alert("Terimakasih telah menggunakan bank_account.js")
            Break
        }
        while(isNaN(value) || value<0){
            value=Number(window.prompt("Please insert value"))
            if(isNaN(value) || value<0){
                alert("Input only accept number !!!")
                continue
            }
            else{
                command==1?await akun.withdraw(value):command==2? await akun.deposit(value):""
               
                command=NaN
                value=NaN
                break
            }
        }
        
    }
}


main()



