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
  await knex('files').insert([
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-11-1.jpg',
      restaurant_id: restaurant_ids[1],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-1',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-11-2.jpg',
      restaurant_id: restaurant_ids[1],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-2',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-11-3.jpg',
      restaurant_id: restaurant_ids[1],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-3',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-11-4.jpg',
      restaurant_id: restaurant_ids[1],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-4',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-11-5.jpg',
      restaurant_id: restaurant_ids[1],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-5',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1621261257/Mesavip/Seeds/glm0d3szecswuxjotabq.jpg',
      restaurant_id: restaurant_ids[1],
      public_id: 'Mesavip/Seeds/glm0d3szecswuxjotabq',
      type: 'banner',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1621261260/Mesavip/Seeds/dhn6okqfxbsimtyqf5ur.jpg',
      restaurant_id: restaurant_ids[1],
      public_id: 'Mesavip/Seeds/dhn6okqfxbsimtyqf5ur',
      type: 'list',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-12-1.jpg',
      restaurant_id: restaurant_ids[2],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-1',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-12-2.jpg',
      restaurant_id: restaurant_ids[2],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-2',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-12-3.jpg',
      restaurant_id: restaurant_ids[2],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-3',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-12-4.jpg',
      restaurant_id: restaurant_ids[2],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-4',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-12-5.jpg',
      restaurant_id: restaurant_ids[2],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-5',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618865649/Mesavip/Seeds/kxpyxf7hucqu62iwi2sk.jpg',
      restaurant_id: restaurant_ids[2],
      public_id: 'Mesavip/Seeds/kxpyxf7hucqu62iwi2sk',
      type: 'banner',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618865651/Mesavip/Seeds/y5vrcmckivckbqgxwwlw.jpg',
      restaurant_id: restaurant_ids[2],
      public_id: 'Mesavip/Seeds/y5vrcmckivckbqgxwwlw',
      type: 'list',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-13-1.jpg',
      restaurant_id: restaurant_ids[3],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-1',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-13-2.jpg',
      restaurant_id: restaurant_ids[3],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-2',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-13-3.jpg',
      restaurant_id: restaurant_ids[3],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-3',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-13-4.jpg',
      restaurant_id: restaurant_ids[3],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-4',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-13-5.jpg',
      restaurant_id: restaurant_ids[3],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-5',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618865653/Mesavip/Seeds/pkdwo3y3czjy5ufqvhr8.jpg',
      restaurant_id: restaurant_ids[3],
      public_id: 'Mesavip/Seeds/pkdwo3y3czjy5ufqvhr8',
      type: 'banner',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618865654/Mesavip/Seeds/us6fb0y3cs4ulp6jhdwz.jpg',
      restaurant_id: restaurant_ids[3],
      public_id: 'Mesavip/Seeds/us6fb0y3cs4ulp6jhdwz',
      type: 'list',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-14-1.jpg',
      restaurant_id: restaurant_ids[4],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-1',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-14-2.jpg',
      restaurant_id: restaurant_ids[4],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-2',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-14-3.jpg',
      restaurant_id: restaurant_ids[4],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-3',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-14-4.jpg',
      restaurant_id: restaurant_ids[4],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-4',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-14-5.jpg',
      restaurant_id: restaurant_ids[4],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-5',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1621261112/Mesavip/Seeds/npmqrnk4ovsynj8ynwmj.jpg',
      restaurant_id: restaurant_ids[4],
      public_id: 'Mesavip/Seeds/npmqrnk4ovsynj8ynwmj',
      type: 'banner',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1621261114/Mesavip/Seeds/df8u0xcof7o4obfhwh2f.jpg',
      restaurant_id: restaurant_ids[4],
      public_id: 'Mesavip/Seeds/df8u0xcof7o4obfhwh2f',
      type: 'list',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-15-1.jpg',
      restaurant_id: restaurant_ids[5],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-1',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-15-2.jpg',
      restaurant_id: restaurant_ids[5],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-2',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-15-3.jpg',
      restaurant_id: restaurant_ids[5],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-3',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-15-4.jpg',
      restaurant_id: restaurant_ids[5],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-4',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-15-5.jpg',
      restaurant_id: restaurant_ids[5],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-5',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618865658/Mesavip/Seeds/vsbh9nppuvpehjvhflzr.jpg',
      restaurant_id: restaurant_ids[5],
      public_id: 'Mesavip/Seeds/vsbh9nppuvpehjvhflzr',
      type: 'banner',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618865659/Mesavip/Seeds/hxx2kkku6as4he59vdq5.jpg',
      restaurant_id: restaurant_ids[5],
      public_id: 'Mesavip/Seeds/hxx2kkku6as4he59vdq5',
      type: 'list',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-16-1.jpg',
      restaurant_id: restaurant_ids[6],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-1',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-16-2.jpg',
      restaurant_id: restaurant_ids[6],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-2',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-16-3.jpg',
      restaurant_id: restaurant_ids[6],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-3',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-16-4.jpg',
      restaurant_id: restaurant_ids[6],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-4',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-16-5.jpg',
      restaurant_id: restaurant_ids[6],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-5',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618865676/Mesavip/Seeds/i1ghqr1ve6oxl1ohk9n9.jpg',
      restaurant_id: restaurant_ids[6],
      public_id: 'Mesavip/Seeds/i1ghqr1ve6oxl1ohk9n9',
      type: 'banner',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618865678/Mesavip/Seeds/yokn6sherfh1vz6mhyio.jpg',
      restaurant_id: restaurant_ids[6],
      public_id: 'Mesavip/Seeds/yokn6sherfh1vz6mhyio',
      type: 'list',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-17-1.jpg',
      restaurant_id: restaurant_ids[7],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-1',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-17-2.jpg',
      restaurant_id: restaurant_ids[7],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-2',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-17-3.jpg',
      restaurant_id: restaurant_ids[7],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-3',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-17-4.jpg',
      restaurant_id: restaurant_ids[7],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-4',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-17-5.jpg',
      restaurant_id: restaurant_ids[7],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-5',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618865679/Mesavip/Seeds/pdsvepplk8gseuvj9rmi.jpg',
      restaurant_id: restaurant_ids[7],
      public_id: 'Mesavip/Seeds/pdsvepplk8gseuvj9rmi',
      type: 'banner',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618865681/Mesavip/Seeds/tsdxzz1mhdp7iwfzzti2.jpg',
      restaurant_id: restaurant_ids[7],
      public_id: 'Mesavip/Seeds/tsdxzz1mhdp7iwfzzti2',
      type: 'list',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-18-1.jpg',
      restaurant_id: restaurant_ids[8],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-1',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-18-2.jpg',
      restaurant_id: restaurant_ids[8],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-2',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-18-3.jpg',
      restaurant_id: restaurant_ids[8],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-3',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-18-4.jpg',
      restaurant_id: restaurant_ids[8],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-4',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-18-5.jpg',
      restaurant_id: restaurant_ids[8],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-5',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618865681/Mesavip/Seeds/jcj7nroh9tofczwwo730.jpg',
      restaurant_id: restaurant_ids[8],
      public_id: 'Mesavip/Seeds/jcj7nroh9tofczwwo730',
      type: 'banner',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618865683/Mesavip/Seeds/tkbrcqboi9unej3bncgt.jpg',
      restaurant_id: restaurant_ids[8],
      public_id: 'Mesavip/Seeds/tkbrcqboi9unej3bncgt',
      type: 'list',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-19-1.jpg',
      restaurant_id: restaurant_ids[9],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-1',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-19-2.jpg',
      restaurant_id: restaurant_ids[9],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-2',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-19-3.jpg',
      restaurant_id: restaurant_ids[9],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-3',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-19-4.jpg',
      restaurant_id: restaurant_ids[9],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-4',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-19-5.jpg',
      restaurant_id: restaurant_ids[9],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-5',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618865688/Mesavip/Seeds/chaaweagjlnnfluxldbx.jpg',
      restaurant_id: restaurant_ids[9],
      public_id: 'Mesavip/Seeds/chaaweagjlnnfluxldbx',
      type: 'banner',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618865690/Mesavip/Seeds/wf5zysid4a5z5zspr7xj.jpg',
      restaurant_id: restaurant_ids[9],
      public_id: 'Mesavip/Seeds/wf5zysid4a5z5zspr7xj',
      type: 'list',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-20-1.jpg',
      restaurant_id: restaurant_ids[10],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-1',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-20-2.jpg',
      restaurant_id: restaurant_ids[10],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-2',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-20-3.jpg',
      restaurant_id: restaurant_ids[10],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-3',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-20-4.jpg',
      restaurant_id: restaurant_ids[10],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-4',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-20-5.jpg',
      restaurant_id: restaurant_ids[10],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-5',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618865693/Mesavip/Seeds/invwxkx1qm8lkvxblne8.jpg',
      restaurant_id: restaurant_ids[10],
      public_id: 'Mesavip/Seeds/invwxkx1qm8lkvxblne8',
      type: 'banner',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618865695/Mesavip/Seeds/bbaglydg8hqqzsyfugm0.jpg',
      restaurant_id: restaurant_ids[10],
      public_id: 'Mesavip/Seeds/bbaglydg8hqqzsyfugm0',
      type: 'list',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-21-1.jpg',
      restaurant_id: restaurant_ids[11],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-1',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-21-2.jpg',
      restaurant_id: restaurant_ids[11],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-2',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-21-3.jpg',
      restaurant_id: restaurant_ids[11],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-3',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-21-4.jpg',
      restaurant_id: restaurant_ids[11],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-4',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-21-5.jpg',
      restaurant_id: restaurant_ids[11],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-5',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618865695/Mesavip/Seeds/olgxxzyaggp6buwc9udp.jpg',
      restaurant_id: restaurant_ids[11],
      public_id: 'Mesavip/Seeds/olgxxzyaggp6buwc9udp',
      type: 'banner',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618865697/Mesavip/Seeds/oddwxkahfbeojgeco8bb.jpg',
      restaurant_id: restaurant_ids[11],
      public_id: 'Mesavip/Seeds/oddwxkahfbeojgeco8bb',
      type: 'list',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-22-1.jpg',
      restaurant_id: restaurant_ids[12],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-1',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-22-2.jpg',
      restaurant_id: restaurant_ids[12],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-2',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-22-3.jpg',
      restaurant_id: restaurant_ids[12],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-3',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-22-4.jpg',
      restaurant_id: restaurant_ids[12],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-4',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1618864855/Mesavip/Seeds/Galeria/seed-galeria-22-5.jpg',
      restaurant_id: restaurant_ids[12],
      public_id: 'Mesavip/Seeds/Galeria/seed-galeria-5',
      type: 'galeria',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1621260895/Mesavip/Seeds/psfjgtrjvtrd5adwkssi.jpg',
      restaurant_id: restaurant_ids[12],
      public_id: 'Mesavip/Seeds/psfjgtrjvtrd5adwkssi',
      type: 'banner',
    },
    {
      path:
        'https://res.cloudinary.com/du39ecvjf/image/upload/v1621260897/Mesavip/Seeds/p5ssrfs0hub4gkb1z2kb.jpg',
      restaurant_id: restaurant_ids[12],
      public_id: 'Mesavip/Seeds/p5ssrfs0hub4gkb1z2kb',
      type: 'list',
    },
  ]);
}