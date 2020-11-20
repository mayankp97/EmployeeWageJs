let prompt = require('prompt-sync')();

//Validation for PinCode
let validatePin = pin => new RegExp('^[0-9]{3}[ ]?[0-9]{3}$').test(pin);

let pin = prompt('Enter the Pincode : ');
if(validatePin(pin)) console.log('Pin is valid');
else console.log('Pin is Invalid');

//Validation for Emails
let validateEmail = email => new RegExp('^[A-Za-z0-9]+([._+-][A-Za-z0-9]+)*[@][A-Za-z0-9]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3})?$').test(email);

let email = prompt('Enter Email : ');
if(validateEmail(email)) console.log('Email is valid');
else console.log('Email is Invalid');

//Checking sample Emails
let allEmails = 'abc@yahoo.com abc-100@yahoo.com abc111@abc.com abc-100@abc.net' +
                   ' abc.100@abc.com.au abc@1.com abc@gmail.com.com abc+100@gmail.com';
let allInvalidEmails = 'abc abc@.com.my abc123@gmail.a abc123@.com abc123@.com.com .abc@abc.com abc()*@gmail.com' +
                           ' abc@%*.com abc..2002@gmail.com abc.@gmail.com abc@gmail.com.1a abc@abc@gmail.com abc@gamil.com.aa.au';
for(let email of allEmails.split(' '))
    console.log(email,' : ',validateEmail(email));
for(let email of allInvalidEmails.split(' '))
    console.log(email,' : ',validateEmail(email));