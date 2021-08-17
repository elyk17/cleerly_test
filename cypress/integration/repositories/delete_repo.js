describe('delete repo', function(){
    it('cleerly-test',function(){
        cy.request({
            method: 'DELETE',
            url: 'https://api.github.com/repos/elyk17/cleerly-test',
            headers:{
                accept: "application/vnd.github.v3+json",
                authorization:  "Bearer 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"
            },
        }).then(function(response){
            expect(response.status).to.eq(204)
        });
    });
});