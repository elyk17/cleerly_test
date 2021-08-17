describe('Create a bug', function () {
    it('cleerly-test repo', function () {
        cy.request({
            method: "POST",
            url: "https://api.github.com/repos/elyk17/cleerly-test/issues",
            headers:{
                accept: "application/vnd.github.v3+json",
                authorization:  "Bearer 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"
            },
            body: {
                title: "found a bug ",
                body: "I am having a problem with X Y Z",
                labels: [ "bug"]
            }
        }).then(function(response){
            let num = response.body.number
            expect(response.body).property('url').to.eq("https://api.github.com/repos/elyk17/cleerly-test/issues/" + num)
            expect(response.body).property('repository_url').to.eq("https://api.github.com/repos/elyk17/cleerly-test")
            expect(response.body).property('labels_url').to.eq("https://api.github.com/repos/elyk17/cleerly-test/issues/"+num+"/labels{/name}")
            expect(response.body).property('comments_url').to.eq("https://api.github.com/repos/elyk17/cleerly-test/issues/"+num+"/comments")
            expect(response.body).property('events_url').to.eq("https://api.github.com/repos/elyk17/cleerly-test/issues/"+num+"/events")
            expect(response.body).property('html_url').to.eq("https://github.com/elyk17/cleerly-test/issues/" +num)
            expect(response.body.labels[0]).property('url').to.eq("https://api.github.com/repos/elyk17/cleerly-test/labels/bug")
            expect(response.body.labels[0]).property('name').to.eq("bug")
            expect(response.body.labels[0]).property('color').to.eq('d73a4a')
            expect(response.body.labels[0]).property('default').to.eq(true)
            expect(response.body.labels[0]).property('description').to.eq('Something isn\'t working')
        });
    })
})