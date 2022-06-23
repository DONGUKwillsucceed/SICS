import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getLogs() {
  const queryResult = await prisma.logs.findMany({
    select: {
      sensor: true,
      value: true,
      time: true,
    },
    orderBy: {
      time: "desc",
    },
  });
  if (!queryResult) {
    throw Error("Table is empty!!");
  }
  return queryResult.map(({ sensor, value, time }) => {
    return {
      context: `sensor : ${sensor}, value : ${value}`,
      time,
    };
  });
}

export async function getLocation() {
  const { sensor, time } = await prisma.logs.findFirst({
    where: {
      OR: [
        {
          sensor: {
            contains: "PIR",
          },
          value: "1\r",
        },
        {
          sensor: {
            contains: "RFID",
          },
          value: "0\r",
        },
      ],
    },
    orderBy: {
      time: "desc",
    },
    select: {
      sensor: true,
      time: true,
    },
  });
  console.log(sensor);

  if (sensor === "PIR1") {
    return { room: "거실", time };
  } else if (sensor === "PIR2") {
    return { room: "안방", time };
  } else if (sensor === "PIR3") {
    return { room: "화장실", time };
  } else if (sensor === "PIR4") {
    return { room: "부엌", time };
  } else {
    return { room: "none", time: "none" };
  }
}

export async function judgeTcrt() {
  const queryResult = await prisma.logs.findFirst({
    where: {
      sensor: {
        contains: "TCRT",
      },
      value: "0\r",
    },
    orderBy: {
      time: "desc",
    },
    select: {
      time: true,
    },
  });
  if (!queryResult) {
    return 0;
  }
  const { time } = queryResult;
  const curtime = new Date();
  const timedif = (curtime - time) / 1000;

  if (timedif > 60) {
    return 3;
  } else if (timedif > 40) {
    return 2;
  } else if (timedif > 20) {
    return 1;
  } else {
    return 0;
  }
}
export async function judgeRFID() {
  const queryResult = await prisma.logs.findFirst({
    where: {
      sensor: {
        contains: "RFID",
      },
      value: "0\r",
    },
    orderBy: {
      time: "desc",
    },
    select: {
      time: true,
    },
  });
  if (!queryResult) {
    return 0;
  }
  const { time } = queryResult;
  const curtime = new Date();
  const timedif = (curtime - time) / 1000;

  if (timedif > 60) {
    return 3;
  } else if (timedif > 40) {
    return 2;
  } else if (timedif > 20) {
    return 1;
  } else {
    return 0;
  }
}
export async function judgeFSR() {
  const queryResult = await prisma.logs.findFirst({
    where: {
      sensor: {
        contains: "FSR",
      },
      value: "0\r",
    },
    orderBy: {
      time: "desc",
    },
    select: {
      time: true,
    },
  });
  if (!queryResult) {
    return 0;
  }
  const { time } = queryResult;
  const curtime = new Date();
  const timedif = (curtime - time) / 1000;

  if (timedif > 60) {
    return 3;
  } else if (timedif > 40) {
    return 2;
  } else if (timedif > 20) {
    return 1;
  } else {
    return 0;
  }
}
export async function judgeFlame() {
  const queryResult = await prisma.logs.findFirst({
    where: {
      sensor: {
        contains: "Flame",
      },
      value: "0\r",
    },
    orderBy: {
      time: "desc",
    },
    select: {
      time: true,
    },
  });
  if (!queryResult) {
    return 0;
  }
  const { time } = queryResult;
  const curtime = new Date();
  const timedif = (curtime - time) / 1000;

  if (timedif > 60) {
    return 3;
  } else if (timedif > 40) {
    return 2;
  } else if (timedif > 20) {
    return 1;
  } else {
    return 0;
  }
}
export async function judgeMg() {
  const queryResult = await prisma.logs.findFirst({
    where: {
      sensor: {
        contains: "MG",
      },
      value: "0\r",
    },
    orderBy: {
      time: "desc",
    },
    select: {
      time: true,
    },
  });
  if (!queryResult) {
    return 0;
  }
  const { time } = queryResult;
  const curtime = new Date();
  const timedif = (curtime - time) / 1000;

  if (timedif > 60) {
    return 3;
  } else if (timedif > 40) {
    return 2;
  } else if (timedif > 20) {
    return 1;
  } else {
    return 0;
  }
}
export async function judgePIR() {
  const { sensor, time } = await prisma.logs.findFirst({
    where: {
      sensor: {
        contains: "PIR",
      },
    },
    orderBy: {
      time: "desc",
    },
    select: {
      sensor: true,
      time: true,
    },
  });
  const curtime = new Date();
  if (sensor === "PIR1") {
    const timedif = (curtime - time) / 1000;

    if (timedif > 60) {
      return 3;
    } else if (timedif > 40) {
      return 2;
    } else if (timedif > 20) {
      return 1;
    } else {
      return 0;
    }
  }
  if (sensor === "PIR2") {
    const timedif = (curtime - time) / 1000;

    if (timedif > 60) {
      return 3;
    } else if (timedif > 40) {
      return 2;
    } else if (timedif > 20) {
      return 1;
    } else {
      return 0;
    }
  }
  if (sensor === "PIR3") {
    const timedif = (curtime - time) / 1000;

    if (timedif > 60) {
      return 3;
    } else if (timedif > 40) {
      return 2;
    } else if (timedif > 20) {
      return 1;
    } else {
      return 0;
    }
  }
  if (sensor === "PIR4") {
    const timedif = (curtime - time) / 1000;

    if (timedif > 60) {
      return 3;
    } else if (timedif > 40) {
      return 2;
    } else if (timedif > 20) {
      return 1;
    } else {
      return 0;
    }
  }
}

export async function makeLogs(body) {
  const { sensor, value, time } = body;
  const queryResult = await prisma.logs.create({
    data: {
      sensor,
      value,
      time,
    },
  });
  return queryResult;
}
