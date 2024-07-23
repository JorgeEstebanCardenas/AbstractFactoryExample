// Clases base

interface Enemy {
    attack(): void;
    die(): void;

}

interface NPC {
    talk(): void;
    giveItem(): void;
}

interface Creature {
    die(): void;
    followPlayer(): void;
}

interface Factory {
    createEnemy(): Enemy;
    createNPC(): NPC;
    createCreature(): Creature;
}


// Clase de enemigo

class FireEnemy implements Enemy {
    attack(): void {
        console.log("Fire attack");
    }

    die(): void {
        console.log("Fire enemy dies");
    }
}

class WaterEnemy implements Enemy {
    attack(): void {
        console.log("Water attack");
    }

    die(): void {
        console.log("Water enemy dies");
    }
}

// Clase de NPC

class FireNPC implements NPC {
    talk(): void {
        console.log("Hello, I live in the fire village");

    }

    giveItem(): void {
        console.log("Fire NPC gives you a fire item");
    }

}

class WaterNPC implements NPC {
    talk(): void {
        console.log("Hello, I live in the water village");
    }

    giveItem(): void {
        console.log("Water NPC gives you a water item");
    }
}

// Clases de criatura

class FireCreature implements Creature {
    die(): void {
        console.log("Fire creature dies");
    }

    followPlayer(): void {
        console.log("Fire creature follows you");
    }
}

class WaterCreature implements Creature {
    die(): void {
        console.log("Water creature dies");
    }

    followPlayer(): void {
        console.log("Water creature follows you");
    }
}

// Clases de Fabricas

class FireFactory implements Factory {
    createEnemy(): Enemy {
        return new FireEnemy();
    }

    createNPC(): NPC {
        return new FireNPC();
    }

    createCreature(): Creature {
        return new FireCreature();
    }
}

class WaterFactory implements Factory {
    createEnemy(): Enemy {
        return new WaterEnemy();
    }

    createNPC(): NPC {
        return new WaterNPC();
    }

    createCreature(): Creature {
        return new WaterCreature();
    }
}

// codigo

// Usando el tipo de fuego
const fireFactory = new FireFactory();

console.log("Fire factory");

const fireEnemy = fireFactory.createEnemy();
const fireNPC = fireFactory.createNPC();
const fireCreature = fireFactory.createCreature();

fireEnemy.attack();
fireNPC.talk();
fireCreature.followPlayer();

// Usando el tipo de agua
const waterFactory = new WaterFactory();

console.log("\nWater factory");

const waterEnemy = waterFactory.createEnemy();
const waterNPC = waterFactory.createNPC();
const waterCreature = waterFactory.createCreature();

waterEnemy.attack();
waterNPC.talk();
waterCreature.followPlayer();



 