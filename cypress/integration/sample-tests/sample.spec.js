/// <reference types="cypress" />

import Chance from 'chance';
const chance = new Chance();

describe('FireStarter', () => {

  const email = chance.email();
  const pass = 'ValidPassword';

  beforeEach(() => {
    cy.visit('http://localhost:4200');
  })

  it('should had a title', () => {
    cy.contains('Welcome to FireStarter')
  });

});




