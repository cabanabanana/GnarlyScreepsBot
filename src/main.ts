import Harvester from "./roles/harvester";
import Upgrader from "./roles/upgrader";
import Spawner from "./roles/spawner";
import Builder from "./roles/builder";
import { JobQueue } from "./job/jobQueue";

const loop = () => {
  // Try and spawn screep
  Spawner.run(Game.creeps);

  for (let name in Game.rooms) {
    const room = Game.rooms[name];

    const tasks = JobQueue.buildJobList(room);
  }

  for (var name in Game.creeps) {
    var creep = Game.creeps[name];
    if (creep.memory.role == "harvester") {
      Harvester.run(creep);
    }
    if (creep.memory.role == "upgrader") {
      Upgrader.run(creep);
    }
    if (creep.memory.role == "builder") {
      Builder.run(creep);
    }
  }
};

export { loop };
