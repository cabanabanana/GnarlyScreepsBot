namespace Spawner {
    export const run = (creeps : { [creepName: string]: Creep; }) => {
        let harvesters = 0;
        let upgrader = 0;

        Object.keys(creeps).map(creepName => {
            const creep = creeps[creepName];
            if (creep.memory.role === 'harvester') harvesters += 1;
            if (creep.memory.role === 'upgrader') upgrader += 1;
        });

        if (harvesters < 2) {
            const newName = 'Harvester' + Game.time;

            Game.spawns['Spawn1'].spawnCreep(
                [WORK,CARRY,MOVE],
                newName, 
                { memory: { role: 'harvester' } }
            )
        }

        if (upgrader < 1) {
            const newName = 'Upgrader' + Game.time;

            Game.spawns['Spawn1'].spawnCreep(
                [WORK,CARRY,MOVE],
                newName, 
                { memory: { role: 'upgrader' } }
            )
        }
    };
};

export default Spawner;