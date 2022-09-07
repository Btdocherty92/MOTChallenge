class Admin {
    openMessages(){
        cy.get('a[href*=messages]').click()
    }

    openMessage(subject){
        cy.contains(subject).click()
    }

    checkMessage(expectedText){
        cy.get('[data-testid=message').should('contain.text', expectedText)
    }
}
export default Admin