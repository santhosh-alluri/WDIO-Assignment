import { Then } from '@cucumber/cucumber';
import { UIActions } from '../support/actions';
var assert = require('chai').assert
var expect = require('chai').expect


let act = new UIActions();

Then('I verify user first name as {string} and last name as {string}', function(firstName: string, lastName: string){
    expect(firstName+" "+lastName).to.equal(act.gettheLoggedUserName());
});

Then('I click on signout button', function() {
   act.logout();
   browser.pause(3000);
});

Then('I verify user on home page', function() {
    expect("Login - My Store").to.equal(act.getTitle());
    
});

Then('I verify product as {string} on payment stage', function(productname: string) {
    console.log(act.getPaymentProductName());
    console.log(productname);
    expect(productname).to.equal(act.getPaymentProductName());
})
