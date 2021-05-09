import { Given,When, Then } from '@cucumber/cucumber';
import { UIActions } from '../support/actions';
var assert = require('chai').assert
var expect = require('chai').expect


let act = new UIActions();

Given('User is on login page',  function() {
    act.goToLoginPage();
});
