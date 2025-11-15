const request = require('supertest');

const myReq = request('http://localhost:3000');

describe('Auth Routes', () => {
  it('should login successfully', async () => {
    const res = await myReq
      .post('/auth/login')
      .send({ email: 'Sasarssa@xx.com', password: 'Za@1234567' });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token'); 
  });

  it('should fail with invalid input', async () => {
    const res = await myReq
      .post('/auth/login')
      .send({ email: 'not-an-email', password: '123' });

    expect(res.statusCode).toBe(401);
  });
});
