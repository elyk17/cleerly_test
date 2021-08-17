describe('Get Deleted Repo', function() {
    it('cleerly-test', function(){
        cy.request({
            method: "GET",
            url: 'https://api.github.com/repos/elyk17/cleerly-test',
            headers:{
                accept: "application/vnd.github.v3+json",
                authorization:  "Bearer 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"
            }
        }).then(function(response){
            expect(response.body).property('node_id').to.eq("MDEwOlJlcG9zaXRvcnkzOTY0NDE5NTU="),
            expect(response.body).property('name').to.eq('cleerly-test'),
            expect(response.body).property('full_name').to.eq("elyk17/cleerly-test"),
            expect(response.body.owner).property('login').to.eq('elyk17'),
            expect(response.body.owner).property('id').to.eq(21001986)
        });
    });
});