describe('PassiveTest', function() {
    it('get artifacts', function() {
        cy.request({
            method: 'GET',
            url: 'https://api.github.com/repos/elyk17/cleerly-test/actions/artifacts',
            headers:{
                accept: "application/vnd.github.v3+json",
                authorization:  "Bearer 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"
            }
        }).then(function(response){
            const jsonData = response.body;
            expect(response.status).to.eq(200),
            expect(jsonData).to.not.eq(null)
            expect(jsonData.total_count).to.eq(0)
            expect(jsonData.artifacts).to.be.a('array')

        });
       
    });
});