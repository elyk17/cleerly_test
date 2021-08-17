describe('CRUD', function() {
    it('GET', function(){
       cy.request({
        method : "GET" ,
        url : "https://api.github.com",
       }).then(function(response){
        expect(response.body).have.property('current_user_url');
        expect(response.status).to.equal(200)
    });
    });
});