import { prisma } from '../src/generated/prisma-client';

async function main() {
  await prisma.createConference({
    name: 'Frontend love',
    description:
      'Frontend Developer Love 2019 will continue the legacy and once again be themost hyped Frontend Developer Conference in the Netherlands.',
    tags: {
      create: [
        {
          name: 'JavaScript',
          slug: 'javascript',
        },
        {
          name: 'GraphQL',
          slug: 'graphql',
        },
      ],
    },
    url: 'http://www.frontenddeveloperlove.com/',
    image: {
      create: {
        src: 'https://www.graphql-europe.org/static/photos/cpa.png',
        alt: 'Frontend love',
      },
    },
    startDate: '2019-02-13T07:00:00.000Z',
    endDate: '2019-02-15T16:00:00.000Z',
    location: {
      create: {
        country: 'Netherlands',
        region: 'EUROPE',
        city: 'Amsterdam',
        address: 'Danzigerkade 5, 1013 AP Amsterdam',
      },
    },
  });

  await prisma.createConference({
    name: 'Test conference',
    description: 'This is just a test conference',
    tags: {
      create: [
        {
          name: 'Test',
          slug: 'test',
        },
      ],
    },
    url: 'http://www.test.com/',
    image: {
      create: {
        src: 'https://www.graphql-europe.org/static/photos/cpa.png',
        alt: 'Test img',
      },
    },
    startDate: '2019-02-13T07:00:00.000Z',
    endDate: '2019-02-15T16:00:00.000Z',
    location: {
      create: {
        country: 'Kazakhstan',
        region: 'ASIA',
        city: 'Almaty',
        address: 'Test 52, 100206 Almaty',
      },
    },
  });
}

main();
