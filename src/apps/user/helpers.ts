import * as jwt from 'jsonwebtoken';

export async function isUserAuthorized(token: string) {
  if (token) {
    const apiToken = token.replace('Bearer ', '');
    const { userId } = jwt.verify(apiToken, process.env.APP_SECRET) as {
      userId: string;
    };
    if (userId) {
      return { userId };
    }

    throw new Error('You must be signed in');
  }

  throw new Error('Provide valid token');
}

export async function isAdminAuthorized(token: string, db: any) {
  if (token) {
    const apiToken = token.replace('Bearer ', '');
    const { userId } = jwt.verify(apiToken, process.env.APP_SECRET) as {
      userId: string;
    };
    const { isAdmin } = (await db.query.user({ where: { id: userId } })) as {
      isAdmin: boolean;
    };

    if (isAdmin) {
      return { isAdmin };
    }

    throw new Error('You must have admin rights');
  }

  throw new Error('Provide valid token');
}

// TODO: Make ENUM instead of boolean: isAdmin --> type { USER, ADMIN, SPEAKER }
