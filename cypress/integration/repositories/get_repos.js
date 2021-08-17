
describe('Repositories', function() {
    it('get repositories', function() {
        cy.request({
            method: 'GET',
            url: 'https://api.github.com/users/elyk17/repos',
            headers:{
                accept: "application/vnd.github.v3+json",
                authorization: '#auth'
            }
        }).then(function(response){
            const jsonData = response.body
            expect(response.status).to.eq(200),
            expect(jsonData).to.not.eq(null)
            expect(jsonData[0]).property('id').to.eq(80544468)
            expect(jsonData[0]).property('node_id').to.eq("MDEwOlJlcG9zaXRvcnk4MDU0NDQ2OA==")
            expect(jsonData[0]).property('name').to.eq('CarVin')
            expect(jsonData[0]).property('full_name').to.eq("elyk17/CarVin")
            expect(jsonData[0]).property('private').to.eq(false)
            expect(jsonData[0].owner).property('login').to.eq('elyk17')
            expect(jsonData[0].owner).property('id').to.eq(21001986)
            expect(jsonData[0].owner).property('node_id').to.eq('MDQ6VXNlcjIxMDAxOTg2')
            expect(jsonData[0].owner).property('avatar_url').to.eq("https://avatars.githubusercontent.com/u/21001986?v=4")
            expect(jsonData[0].owner).property('gravatar_id').to.eq("")
            expect(jsonData[0].owner).property('url').to.eq("https://api.github.com/users/elyk17")
            expect(jsonData[0].owner).property('html_url').to.eq("https://github.com/elyk17")
        })
    });
});