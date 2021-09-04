describe('Blog App', function () {
  describe.only('When logged in ', function () {
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

    it('a blog can be created', function () {
      cy.contains('Login').click();
      cy.get('#username').type('jhonacs');
      cy.get('#password').type('1234');
      cy.contains('login').click();

      cy.get('#title').type('The adventures of pendejo');
      cy.get('#author').type('Fin y Jack');
      cy.get('#url').type('www.tap.com');

      cy.get('#sentForm').click();
      cy.contains('The Blog The adventures of pendejo has been added');
    });

    it('a blog ca be liked', function () {
      cy.contains('Login').click();
      cy.get('#username').type('jhonacs');
      cy.get('#password').type('1234');
      cy.contains('login').click();

      cy.get('#title').type('The adventures of pendejo');
      cy.get('#author').type('Fin y Jack');
      cy.get('#url').type('www.tap.com');

      cy.get('#sentForm').click();
      cy.contains('Show Details').click();
      cy.get('#buttonLike').click();
      cy.contains(1);
    });
  });
});
