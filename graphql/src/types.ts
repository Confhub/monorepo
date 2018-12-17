import {
  Conference,
  ConferencePromise,
  FragmentableArray,
  Prisma,
} from './generated/prisma-client';

export interface Context {
  apiToken: string;
  prisma: Prisma;
}
export interface AuthPayload {
  token: string | null;
}
export interface RootQuery {
  conference: ConferencePromise;
  conferences: FragmentableArray<Conference>;
}
export interface RootMutation {}
