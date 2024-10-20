describe('Test Practice Form section', () => {
    it('Submission of Practice Form', () => {

        cy.visit('https://demoqa.com/automation-practice-form');
        cy.url().should('include', 'demoqa');

        cy.get('#firstName').type('Anahit');
        cy.get('#lastName').type('Davtyan');
        cy.get('#userEmail').type('anahitdavtyan@gmail.com');
        cy.get('#gender-radio-2').check({ force: true });
        cy.get('#userNumber').type('077778778');
        cy.get('#hobbies-checkbox-3').check({ force: true });
        cy.get('#currentAddress').type('Amiryan 7');
        cy.get('#submit').click();
        cy.get('#example-modal-sizes-title-lg').should('contain', 'Thanks for submitting the form');
        cy.get('#closeLargeModal').click({ force: true });
        cy.get('.text-center').should('contain', 'Practice Form');

    });


});