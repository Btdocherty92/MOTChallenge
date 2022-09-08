/// <reference types="cypress" />

import Home from "../Pages/Home"
import Login from "../Pages/Login"
import Admin from "../Pages/Admin"

// Test data
const details = {
    name: 'Joe Bloggs',
    email: 'jbloggs@fakeemail.com',
    subject: 'Test Message',
    number: '00000000000',
    message: 'This is a test message longer than 20 characters'
}

// Page declerations
const home = new Home()
const login = new Login()
const admin = new Admin()

describe('Create and read message', () => {

    it.only('Send message', () => {
        // Go to homepage and send a new message
        home.navigate()
        home.createMessage(details.name, details.email, details.subject, details.number, details.message)
        home.submit()
    })

    it('Check message', ()=>{
        // Go to admin site and login
        login.navigate()
        login.enterDetails('admin', 'password')
        login.submit()

        // Check message details
        admin.openMessages()
        admin.openMessage(details.subject)
        admin.checkMessage(details.message)
    })
})