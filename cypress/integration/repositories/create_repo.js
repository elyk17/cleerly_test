describe('Create Repo', function() {
    it('cleerly-test', function () {
        cy.request({
            method: 'POST',
            url: 'https://api.github.com/user/repos',
            headers:{
                accept: "application/vnd.github.v3+json",
                authorization:  "Bearer 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"
            },
            body : {
                name : "cleerly-test",
                description : "creating new repo via the api",
                homepage : "https://github.com",
                private : false,
                has_issues : true,
                has_projects : true,
                has_wiki : true
            }
        }).then(function(response){
            expect(response.status).to.eq(201)
            expect(response.body).property('name').to.eq('cleerly-test'),
            expect(response.body).property('full_name').to.eq('elyk17/cleerly-test'),
            expect(response.body).property('private').to.eq(false),
            expect(response.body).property('html_url').to.eq("https://github.com/elyk17/cleerly-test"),
            expect(response.body).property('description').to.eq('creating new repo via the api'),
            expect(response.body).property('fork').to.eq(false),
            expect(response.body).property('url').to.eq("https://api.github.com/repos/elyk17/cleerly-test"),
            expect(response.body.owner).property('login').to.eq('elyk17'),
            expect(response.body.owner).property('id').to.eq(21001986),
            expect(response.body.owner).property('node_id').to.eq('MDQ6VXNlcjIxMDAxOTg2')
        });
    });
});