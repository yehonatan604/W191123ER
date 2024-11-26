import { MongoClient } from "mongodb";

const main = async () => {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    try{
        await client.connect();
        const db = client.db('FootballDb');
        const collection = db.collection('Players');

        await collection.insertMany([
            {
                name: "Deniss Rodman",
                age: 28,
                number: 2,
                goals: 1,
                height: 1.74

            },
            {
                name: "Toto Tamuz",
                age: 35,
                number: 99,
                goals: 5,
                height: 1.82

            },
        ])

        const players = await collection.find({}).toArray();
        console.log(players);
    } catch (err) {
        console.log(err);
    } finally {
        await client.close();
    }
}

main();