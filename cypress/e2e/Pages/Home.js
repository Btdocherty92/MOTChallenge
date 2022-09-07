class Home {
    navigate(){
        cy.visit('https://automationintesting.online/')
    }

    createMessage(name, email, subject, number, message){
        cy.get('[data-testid=ContactName]').type(name)
        cy.get('[data-testid=ContactEmail]').type(email)
        cy.get('[data-testid=ContactSubject]').type(subject)
        cy.get('[data-testid=ContactPhone]').type(number)
        cy.get('[data-testid=ContactDescription]').type(message)
    }

    submit(){
        cy.get('[id=submitContact]').click()
    }
}
export default Home