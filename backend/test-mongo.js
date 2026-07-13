const { MongoClient } = require('mongodb');

async function run() {
  const client = new MongoClient('mongodb://localhost:27017');
  await client.connect();
  const db = client.db('kybern-taskhub');
  const tasks = await db.collection('tasks').find().toArray();
  console.log(JSON.stringify(tasks, null, 2));
  await client.close();
}
run().catch(console.dir);
