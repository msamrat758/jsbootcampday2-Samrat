// Assignment 1: Write a JavaScript function that takes a number as a parameter and prints whether it's positive, negative, or zero.
function pos_or_neg(n){
    if(n==0){
        console.log(n,"is 0")
    }
    else if(n>0){
        console.log(n,"is positive")
    }
    else{
        console.log(n,"is negative")
    }
}

pos_or_neg(0)

// Assignment 2: Write a JavaScript function that takes a positive integer as a parameter and calculates its factorial using a for loop. The factorial of a number N is the product of all positive integers less than or equal to N.
function factorial(n){
    if(n>=0){
        if(n==0){
            console.log("Factorial is:",1)
        }
        else{
            let sol=n
            for(n=n-1;n>0;n--){
                sol=sol*n
            }
            console.log("Factorial is: ",sol)
        }
    }
    else{
        console.log(n,"is negative")
    }
}
factorial(4)

// Assignment 3: Write a JavaScript function that takes two numbers as parameters and returns the larger one.
function greater(n1,n2){
    if(n1>n2){
        console.log(n1,"is greater")
    }
    else if(n1==n2){
        console.log(n1,"is equal to",n2)
    }
    else{
        console.log(n2,"is greater")
    }
}
greater(9,7)

// Assignment 4: Write a JavaScript function that takes a string as a parameter and determines whether it's a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).
function palindrome(stringg){
    if(typeof(stringg)==typeof('hi')){
        let revstr=stringg.split("").reverse().join("")
        console.log(revstr)
        if(revstr==stringg){
            console.log(stringg,"is a palindrome")
        }
        else{
            console.log(stringg,"is not a palindrome")
        }
    }
    else{
        console.log("Enter a string please")
    }
}
palindrome("racecar")

// Assignment 5: Write a JavaScript function that takes a positive integer as a parameter and prints all the prime numbers less than or equal to that integer. A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.
 function prime(n){
    if(n>0){
        for(let x=n-1;x>1;x--){
            if(n%x==0){
                val=false
            }
            else{
                val=true
            }          
        }
        if(val==true){
            console.log(n,"is prime")
        }
        else{
            console.log(n,"isn't a prime")
        }
    }
    else{
        console.log("Please enter a natural number")
    }
 }

 prime(67)

//  Assignment 6: Write a JavaScript function that simulates a simple calculator. The function should take two numbers and an operator (+, -, *, or /) as parameters and perform the corresponding operation.
function calculator(n1,n2,op_string){
    if(typeof(n2)==typeof(2) && typeof(n1)==typeof(2)){
        if(op_string=="+"){
            console.log("Sum is",n1+n2)
        }
        else if(op_string=="-"){
            console.log("Difference is",n1-n2)
        }
        else if(op_string=="*"){
            console.log("Product is",n1*n2)
        }
        else if(op_string=="/"){
            console.log("Division is",n1/n2)
        }
        else{
            console.log("Enter valid operator")
        }
    }
    else{
        console.log("Enter valid numbers")
    }
}
calculator(4,5,"/")

// Assignment 7: Write a JavaScript function that takes a string as a parameter and counts the number of vowels (a, e, i, o, u) in the string.
function vowels(str){
    let count=0
    if(typeof(str)==typeof('hi')){
        let arr=str.split("")
        for(let index=0;index<arr.length;index++){
            if(arr[index]=="a" || arr[index]=="e" || arr[index]=="i" || arr[index]=="o" || arr[index]=="u" ){
                count++
            }
        }
    }
    else{
        console.log("Enter a string")
    }
    console.log(count)
}
vowels("aeiou aeiou aeiou")

// Assignment 8: Write a JavaScript function that takes a positive integer as a parameter and checks if it's a perfect number. A perfect number is a positive integer that is equal to the sum of its proper divisors, excluding itself.
function perfect(n){
    if(typeof(n)==typeof(2) && n>1){
        let sum=0
        for(let i=1;i<n;i++){
            if(n%i==0){
                sum=sum+i
            }
            else{
                sum=sum
            }
        }
        if(sum==n){
            console.log(n,"is a perfect number")
        }
        else{
            console.log(n,"is not a perfect number")
        }
        
    }
    else{
        console.log("Enter a valid number")
    }
}
perfect(496)

// Assignment 9: Write a JavaScript function that takes a number as a parameter and prints the Fibonacci series up to that number. The Fibonacci series is a sequence of numbers in which each number is the sum of the two preceding ones
function fibonacci(n){
    a=1
    b=1
    sum=1
    if(typeof(n)==typeof(2) && n>0){
        if(n==1){
            console.log(a)
        }
        else if(n==2){
            console.log(a)
            console.log(b)
        }
        else if(n>2){
            console.log(a)
            console.log(b)
            for(let i=3;i<=n;i++){
                sum=a+b
                console.log(sum)
                a=b
                b=sum
            }
        }
    }
    else{
        console.log("Enter a valid number")
    }
}
fibonacci(7)
console.log("The fibonacci series ends")
// Assignment 10: Write a JavaScript function that takes a positive integer as a parameter and prints its multiplication table up to 10.
function table(n){
    if(typeof(n)==typeof(2) && n>0){
        for(let i=1;i<=10;i++){
            console.log(n*i)
        }
    }
    else{
        console.log("Enter a valid number")
    }
}
table(15)
 