import Harvester from './roles/harvester';
import Upgrader from './roles/upgrader';
import Spawner from './roles/spawner';

const loop = () => {
    Spawner.run(Game.creeps);

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            Harvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            Upgrader.run(creep);
        }
    }
};

export {
    loop
}