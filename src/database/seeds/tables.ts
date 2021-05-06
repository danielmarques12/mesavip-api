import { Knex } from 'knex';

const restaurant_ids = {
  1: '3eb6cc7e-36f2-49af-b675-902cf3a0df36',
  2: '62667f43-2421-4965-b978-d1f02a22f796',
  3: 'a469542a-85ff-4379-932d-d1a7cd3f25e1',
  4: '1b5fe03a-d628-48ea-9bd5-7149e082bf40',
  5: 'ddaa1666-37f8-4003-9e69-708b1d8090b6',
  6: '9d01826e-5870-4631-9995-c438b7094ee7',
  7: 'bcc91d5e-1d51-4b41-9a39-685d0f1c413f',
  8: '3fa9e46c-95f8-4245-aaff-7097a166fd1a',
  9: 'e743589c-6343-417e-8585-9570d47b3f0b',
  10: '35ef3f07-9ce2-4eef-a96c-4bfdf378ee89',
  11: '988a11ee-dbd2-4e1a-b86a-879b8666a9dc',
  12: '1b5c10f3-0ce3-49f5-bf1a-9dab7dad59bd',
};

export async function seed(knex: Knex): Promise<void> {
  await knex('tables').insert([
    {
      restaurant_id: restaurant_ids[1],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      restaurant_id: restaurant_ids[1],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      restaurant_id: restaurant_ids[1],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      restaurant_id: restaurant_ids[1],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      restaurant_id: restaurant_ids[2],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      restaurant_id: restaurant_ids[2],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      restaurant_id: restaurant_ids[2],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      restaurant_id: restaurant_ids[2],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      restaurant_id: restaurant_ids[3],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      restaurant_id: restaurant_ids[3],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      restaurant_id: restaurant_ids[3],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      restaurant_id: restaurant_ids[3],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      restaurant_id: restaurant_ids[4],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      restaurant_id: restaurant_ids[4],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      restaurant_id: restaurant_ids[4],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      restaurant_id: restaurant_ids[4],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      restaurant_id: restaurant_ids[5],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      restaurant_id: restaurant_ids[5],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      restaurant_id: restaurant_ids[5],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      restaurant_id: restaurant_ids[5],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      restaurant_id: restaurant_ids[6],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      restaurant_id: restaurant_ids[6],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      restaurant_id: restaurant_ids[6],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      restaurant_id: restaurant_ids[6],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      restaurant_id: restaurant_ids[7],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      restaurant_id: restaurant_ids[7],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      restaurant_id: restaurant_ids[7],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      restaurant_id: restaurant_ids[7],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      restaurant_id: restaurant_ids[8],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      restaurant_id: restaurant_ids[8],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      restaurant_id: restaurant_ids[8],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      restaurant_id: restaurant_ids[8],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      restaurant_id: restaurant_ids[9],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      restaurant_id: restaurant_ids[9],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      restaurant_id: restaurant_ids[9],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      restaurant_id: restaurant_ids[9],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      restaurant_id: restaurant_ids[10],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      restaurant_id: restaurant_ids[10],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      restaurant_id: restaurant_ids[10],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      restaurant_id: restaurant_ids[10],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      restaurant_id: restaurant_ids[11],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      restaurant_id: restaurant_ids[11],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      restaurant_id: restaurant_ids[11],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      restaurant_id: restaurant_ids[11],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      restaurant_id: restaurant_ids[12],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      restaurant_id: restaurant_ids[12],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      restaurant_id: restaurant_ids[12],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      restaurant_id: restaurant_ids[12],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
}
