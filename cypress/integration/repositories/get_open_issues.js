describe('Get open Issues', function() {
    it('cleerly-test', function(){
        cy.request({
            method: "GET",
            url: "https://api.github.com/repos/elyk17/cleerly-test/issues?state=open",
            headers:{
                accept: "application/vnd.github.v3+json",
                authorization:  "Bearer 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"
            }
        }).then(function(response){
            let num = response.body[0].number
            expect(response.status).to.eq(200)
            expect(response.body[0]).property('url').to.eq('https://api.github.com/repos/elyk17/cleerly-test/issues/' + num),
            expect(response.body[0]).property('repository_url').to.eq("https://api.github.com/repos/elyk17/cleerly-test"),
            expect(response.body[0]).property('title').to.eq('found a bug '),
            expect(response.body[0].user).property('login').to.eq('elyk17'),
            expect(response.body[0].user).property('id').to.eq(21001986)
            expect(response.body[0].labels[0]).property('name').to.eq('bug'),
            expect(response.body[0].labels[0]).property('color').to.eq('d73a4a')
            expect(response.body[0].labels[0]).property('default').to.eq(true)
            expect(response.body[0].labels[0]).property('description').to.eq('Something isn\'t working')
        });
    });
});