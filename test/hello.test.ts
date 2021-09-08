describe('Generic test', () => {
  it('should query Hello', async () => {
    // Arrange
    // Popular banco, por exemplo

    // Act
    const query = { query: 'query Hello { hello }' };
    const res = await request('http://localhost:4000/graphql');

    // Assert
    // Vaidar respostas e/ou banco
  });
});
