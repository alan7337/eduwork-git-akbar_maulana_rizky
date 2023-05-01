describe('Create New User', () => {
    it('Successfully create new ser', () => {
        var user = {
            "name": "alan",
            "job": "operator"
        }

        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            expect(response.status).equal(201)

        })
    })
})