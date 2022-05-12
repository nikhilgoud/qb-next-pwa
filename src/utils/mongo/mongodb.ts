// import { MongoClient, MongoClientOptions } from 'mongodb';

// const uri = process.env.MONGODB_URI || '';
// const dbName = process.env.MONGODB_DB;

// let cachedClient: MongoClient | null = null;
// let cachedDb: any = null;

// let client;
// let clientPromise;

// const options = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// } as MongoClientOptions;

// if (!uri) {
//   throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
// }

// if (!dbName) {
//   throw new Error('Please define the MONGODB_DB environment variable inside .env.local');
// }

// if (process.env.NODE_ENV === 'development') {
//   // In development mode, use a global variable so that the value
//   // is preserved across module reloads caused by HMR (Hot Module Replacement).
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     global._mongoClientPromise = client.connect();
//   }
//   clientPromise = global._mongoClientPromise;
// } else {
//   // In production mode, it's best to not use a global variable.
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect();
// }

// export async function connectToDatabase() {
//   if (cachedClient && cachedDb) {
//     return { client: cachedClient, db: cachedDb };
//   }

//   const client = await MongoClient.connect(uri, options);
//   const db = await client.db(dbName);

//   cachedClient = client;
//   cachedDb = db;

//   return { client, db };
// }

// // Export a module-scoped MongoClient promise. By doing this in a
// // separate module, the client can be shared across functions.
// export default clientPromise;
