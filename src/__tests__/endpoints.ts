import supertest from 'supertest';

import app from '../app';
import { setupDb } from '../test-helpers';

import { Item, IItemModel } from '../models/item';

const request = supertest(app);

setupDb('endpoint-tests');

describe('items endpoint', () => {
  it('gets the items endpoint', async done => {
    const item: IItemModel = new Item({
      name: 'Foo',
      description: 'Bar',
    });
    await item.save();

    const res = await request.get('/items');

    expect(res.body.length).toEqual(1);
    expect(res.body[0].name).toEqual('Foo');
    expect(res.body[0].description).toEqual('Bar');

    done();
  });
});
