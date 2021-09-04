describe('Blog App', function () {
  beforeEach(function () {
    cy.request('POST', 'http://localhost:3001/api/test/reset');
    const user = {
      username: 'jhonacs',
      name: 'Diego',
      password: '1234',
    };

    cy.request('POST', 'http://localhost:3001/api/users/', user);
    cy.visit('http://localhost:3000');
  });

  it('Login form is shown', function () {
    cy.contains('Login').click();
    cy.contains('username');
    cy.contains('password');
  });

  describe('Login', function () {
    it('sucess with the correct credential', function () {
      cy.contains('Login').click();
      cy.get('#username').type('jhonacs');
      cy.get('#password').type('1234');
      cy.contains('login').click();
      cy.contains('Welcome Diego');
    });

    it('sucess with the incorrect credential', function () {
      cy.contains('Login').click();
      cy.get('#username').type('jhonacs');
      cy.get('#password').type('123');
      cy.contains('login').click();
      cy.contains('incorrect');
    });
  });
});
