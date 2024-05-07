/// <reference types="cypress" />

import { getFakeLoginResponse } from "../../generators/userGenerator"

describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8081')
    })
  
    it('displays two todo items by default', () => {
        const fakeLoginResponse = getFakeLoginResponse()
        cy.intercept('POST', '**/users/signin', (req) => {
            req.reply({
              statusCode: 422,
            })
          })
          
        cy.get('[name=username]').type('admin')
        cy.get('[name=password]').type('admin')
        cy.get('.btn-primary').click()

        cy.get('.alert').should('contain.text', 'Unauthorized')
    })
  
  })
  