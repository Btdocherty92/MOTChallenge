/// <reference types="cypress" />

import Manager from "../Pages/Manager"

// Test data
const details = {
    name: 'Joe Bloggs',
    email: 'jbloggs@fakeemail.com',
    subject: 'Test Message',
    number: '00000000000',
    message: 'This is a test message longer than 20 characters'
}

// Declare page manager
const manager = new Manager()

describe('Create and read message', () => {

    it('Send message', () => {
        // Go to homepage and send a new message
        manager.home.navigate()
        manager.home.createMessage(details.name, details.email, details.subject, details.number, details.message)
        manager.home.submit()
    })

    it('Check message', ()=>{
        // Go to admin site and login
        manager.login.navigate()
        manager.login.enterDetails('admin', 'password')
        manager.login.submit()

        // Check message details
        manager.admin.openMessages()
        manager.admin.openMessage(details.subject)
        manager.admin.checkMessage(details.message)
    })
})