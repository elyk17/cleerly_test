describe('Get Assignees', function () {
    it('passiveTest', function () {
        cy.request({
            method: 'GET',
            url: 'https://api.github.com/repos/elyk17/cleerly-test/assignees',
            headers:{
                accept: "application/vnd.github.v3+json",
                authorization:  "Bearer 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"
            }
        }).then(function(response){
            var jsonData = response.body
            expect(response.status).to.eq(200),
            expect(jsonData).to.not.eq(null)
            expect(jsonData[0]).property('login').to.eq('elyk17')
            expect(jsonData[0]).property('id').to.eq(21001986)
            expect(jsonData[0]).property('node_id').to.eq("MDQ6VXNlcjIxMDAxOTg2")
            expect(jsonData[0]).property('avatar_url').to.eq("https://avatars.githubusercontent.com/u/21001986?v=4")
            expect(jsonData[0]).property('gravatar_id').to.eq("")
            expect(jsonData[0]).property('url').to.eq("https://api.github.com/users/elyk17")
            expect(jsonData[0]).property('html_url').to.eq("https://github.com/elyk17")
            expect(jsonData[0]).property('followers_url').to.eq("https://api.github.com/users/elyk17/followers")
            expect(jsonData[0]).property('following_url').to.eq("https://api.github.com/users/elyk17/following{/other_user}")
            expect(jsonData[0]).property('gists_url').to.eq("https://api.github.com/users/elyk17/gists{/gist_id}")
            expect(jsonData[0]).property('starred_url').to.eq("https://api.github.com/users/elyk17/starred{/owner}{/repo}")
            expect(jsonData[0]).property('subscriptions_url').to.eq("https://api.github.com/users/elyk17/subscriptions")
            expect(jsonData[0]).property('organizations_url').to.eq("https://api.github.com/users/elyk17/orgs")
            expect(jsonData[0]).property('repos_url').to.eq("https://api.github.com/users/elyk17/repos")
            expect(jsonData[0]).property('events_url').to.eq("https://api.github.com/users/elyk17/events{/privacy}")
            expect(jsonData[0]).property('received_events_url').to.eq("https://api.github.com/users/elyk17/received_events")
            expect(jsonData[0]).property('type').to.eq('User')
            expect(jsonData[0]).property('site_admin').to.eq(false)
        });
    });
});