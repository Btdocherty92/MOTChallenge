class Login {

    navigate() {
        // Add headers as workaround for Axios error
        cy.visit(('https://automationintesting.online/#/admin'), {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "User-Agent": "axios/0.27.2"
            }
        }).intercept('POST', '/auth/validate', {
            statusCode: 201
        })
    }

    enterDetails(username, pwd){
        cy.get('[data-testid=username]').type(username)
        cy.get('[data-testid=password]').type(pwd)
    }

    submit(){
        cy.get('[data-testid=submit]').click()
    }
}
export default Login