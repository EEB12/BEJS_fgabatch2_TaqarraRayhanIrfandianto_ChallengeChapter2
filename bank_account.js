

class Rekening{


    constructor(Saldo){
        this.Saldo=Saldo
    }

    tambahsaldo(value){
        this.Saldo+=value
        this.tampilSaldo()
    }
    kurangsaldo(value){
        if(this.Saldo<value){
            alert(`saldo anda tidak boleh kurang dari 0 `)
           return
        }
        this.Saldo-=value
        this.tampilSaldo()
    }

    tampilSaldo(){
        alert(`saldo anda adalah `+this.Saldo)
    }
    
}


// function tambahsaldo(value){
//     saldo+=value
//     tampilSaldo()
// }

// function kurangsaldo(value){
//     if(saldo<value){
//         alert(`saldo anda tidak boleh kurang dari 0 `)
//        return
//     }
//     saldo-=value
//     tampilSaldo()
// }

// function tampilSaldo(){
//     alert(`saldo anda adalah `+saldo)
// }

let akun= new Rekening(0)
let command
let value


while(isNaN(command) || command > 4 || command < 1 ){
    value=NaN

    command=Number(window.prompt(`Pick command by typing the number:
    1. hapus saldo
    2. tambah saldo
    3. cek saldo
    4. Keluar`))
    if(isNaN(command) || command > 4 || command < 1){
        alert("please type valid number between 1 until 3 !!!")
        continue
    }
    if(command == 3){
        command=NaN
        akun.tampilSaldo()
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
            command==1?akun.kurangsaldo(value):command==2?akun.tambahsaldo(value):""
           
            command=NaN
            value=NaN
            break
        }
    }
    
}


