import roleHarvester from './role.harvester';
import roleUpgrader from './role.upgrader';
import roleSpawner from './role.spawner';

const loop = () => {
    roleSpawner.run(Game.creeps);

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
    }
};

export {
    loop
}