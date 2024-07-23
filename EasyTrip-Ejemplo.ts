// Jorge Esteban Cárdenas Esquer
// A00232305


// Clases base

interface TripMaker {
    getDriver(): Driver;
    getVehicle(): Vehicle;
}

interface Driver {
    vehicle: Vehicle;
    makeTrip(): void;
    getLicense(): void;
    asignVehicle(vehicle: Vehicle): void;
    getVehicle(): void;
}

interface Vehicle {
    name: string;
    setName(name: string): void;
    checkStatus(): void;
    getFuel(): void;
    getPosition(): void;
}

// Clases de driver
class TruckDriver implements Driver {
    vehicle: Vehicle = new Truck();
    
    makeTrip(): void {
        console.log("Driver makes trip in his Truck");
    }

    getLicense(): void {
        console.log("Truck-License");
    }

    asignVehicle(vehicle: Truck): void {
        this.vehicle = vehicle;
    }

    getVehicle(): void {
        console.log(this.vehicle.name);
    }
}

class PlaneDriver implements Driver {
    vehicle: Vehicle = new Plane();
    makeTrip(): void {
        console.log("Driver makes trip in his Plane");
    }

    getLicense(): void {
        console.log("Plane-License");
    }

    asignVehicle(vehicle: Plane): void {
        this.vehicle = vehicle;
    }

    getVehicle(): void {
        console.log(this.vehicle.name);
    }

}

// Clases de vehicle

class Truck implements Vehicle {
    name: string = "No name";

    setName(name: string): void {
        this.name = name;
    }

    checkStatus(): void {
        console.log("Truck is ok");
    }

    getFuel(): void {
        console.log("Truck has fuel");
    }

    getPosition(): void {
        console.log("Truck-Coordinates");
    }
}

class Plane implements Vehicle {
    name: string = "No name";

    setName(name: string): void {
        this.name = name;
    }

    checkStatus(): void {
        console.log("Plane is ok");
    }

    getFuel(): void {
        console.log("Plane has fuel");
    }

    getPosition(): void {
        console.log("Plane-Coordinates");
    }

}

// Clases de TripMaker

class TruckTripMaker implements TripMaker {
    getDriver(): Driver {
        return new TruckDriver();
    }

    getVehicle(): Vehicle {
        return new Truck();
    }
}

class PlaneTripMaker implements TripMaker {
    getDriver(): Driver {
        return new PlaneDriver();
    }

    getVehicle(): Vehicle {
        return new Plane();
    }
}

// Ejemplo de uso

const TTrip = new TruckTripMaker();
const TDriver = TTrip.getDriver();
const TVehicle = TTrip.getVehicle();

console.log("Truck Trip\n");

TVehicle.setName("Truck123");
TDriver.asignVehicle(TVehicle);

TDriver.getVehicle();
TDriver.makeTrip();

TVehicle.checkStatus();


const PTrip = new PlaneTripMaker();
const PDriver = PTrip.getDriver();
const PVehicle = PTrip.getVehicle();

console.log("\nPlane Trip\n");

PVehicle.setName("Plane123");
PDriver.asignVehicle(PVehicle);

PDriver.getVehicle();
PDriver.makeTrip();

PVehicle.checkStatus();

