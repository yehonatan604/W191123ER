import { connect } from "mongoose";
import { Car } from "./Data/Car.schema.js";

const addData = async () => {
    //     const cars = [
    //         new Car({
    //         brand: "Mazda",
    //         name: "Mazda 3",
    //         year: 2024
    //     }),
    //         new Car({
    //         brand: "Hyundai",
    //         name: "i10",
    //         year: 2023
    //     }),
    //         new Car({
    //         brand: "Toyota",
    //         name: "Land Cruiser",
    //         year: 2022
    //     })
    // ]

    //     await Car.insertMany(cars)
    
    // const car = new Car({
    //     brand: "Volvo",
    //     name: "S40",
    //     year: 2002
    // });

    // await car.save();
    
    // const cars = await Car.find({name: "S40"});
    // console.log(cars);

    const car = await Car.findOne({name: "S40"});
    console.log(car);
}

try {
    await connect('mongodb://localhost:27017/CarsDb');
    console.log("Connected to mongodb");
    await addData();
} catch (err) {
    console.log(err);
}
