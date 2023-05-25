it('Validating task', () => {
    var newUser = {
        "name": 'alan',
        "job": 'megazords driver'
    } 
    cy.request('GET', 'https://pokeapi.co/api/v2/ability/7/', newUser).then((response) => {
        expect(response.status).equal(200)
        expect(response.body.name)
    })
})
