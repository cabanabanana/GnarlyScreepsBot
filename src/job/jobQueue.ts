export enum JobType {
  HARVEST = "harvest",
  DEFENDER = "defender",
  UPGRADER = "upgrader",
}

export namespace JobQueue {
  // Create a list of tasks to be done
  export const buildJobList = (room: Room) => {
    const queue: String[] = [];

    // Check if at least one creep is upgrading controller
    const upgraders = room.find(FIND_MY_CREEPS, {
      filter: (creep) => creep.memory.role == JobType.UPGRADER,
    });

    if (upgraders.length < 1) {
      // Assign creep to upgrade
    }

    // Are we being attacked?
    const attackers = room.find(FIND_HOSTILE_CREEPS, {
      filter: (creep) =>
        creep.getActiveBodyparts(ATTACK) +
          creep.getActiveBodyparts(RANGED_ATTACK) >
        0,
    });

    if (attackers.length > 0) {
      // create defender and enable safe mode
    }

    // Find any building sites

    const constructionSites = room.find(FIND_MY_CONSTRUCTION_SITES);

    if (constructionSites.length > 0) {
      // create builder
    }

    // Harvest!
    //
    return queue;
  };
}
