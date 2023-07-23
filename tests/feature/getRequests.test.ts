import { Application } from '@toctive/axiom';
import request from 'supertest';
import TestApp from 'tests/TestApp';
import { beforeEach, describe, expect, it } from 'vitest';

describe('basic GET request', () => {
  var app: Application;
  beforeEach(async () => {
    app = await TestApp();
  });

  it('should return 200 and welcome message', async () => {
    const res = await request(app.server).get('/welcome').expect(200);
    expect(res.text).equal('Welcome to Axiom');
  });

  it('should return OK status when check health', async () => {
    const res = await request(app.server).get('/health-check').expect(200);
    expect(res.headers['content-type']).toMatch(/json/);
    expect(res.status).toEqual(200);
    expect(res.body.status).toEqual('OK');
    expect(new Date(res.body.timestamp).getTime()).toBeGreaterThanOrEqual(
      new Date().getTime() - 1000,
    );
  });
});
