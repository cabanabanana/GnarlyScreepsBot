namespace Spawner {
    export const run = (creeps : { [creepName: string]: Creep; }) => {
        let harvesters = 0;

        Object.keys(creeps).map(creepName => {
            const creep = creeps[creepName];
            if (creep.memory.role === 'harvester') harvesters += 1;
        });

        if (harvesters < 1) {
            const newName = 'Harvester' + Game.time;

            Game.spawns['Spawn1'].spawnCreep(
                [WORK,CARRY,MOVE],
                newName, 
                { memory: { role: 'harvester' } }
            )
        }
    };
};

export default Spawner;