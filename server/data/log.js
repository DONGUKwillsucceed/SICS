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
      sensor: {
        contains: "PIR",
      },
      value: "1",
    },
    select: {
      sensor: true,
      time: true,
    },
  });

  if (sensor === "PIR1") {
    return { room: "거실", time };
  } else if (location === "PIR2") {
    return { room: "안방", time };
  } else if (location === "PIR3") {
    return { room: "화장실", time };
  } else if (location === "PIR4") {
    return { room: "부엌", time };
  } else {
    return "화장실";
  }
}

export async function judgeHIT() {
  const { time } = await prisma.logs.findFirst({
    where: {
      sensor: {
        contains: "HIT",
      },
    },
    select: {
      time: true,
    },
  });
  const curtime = new Date();
  const timedif = (curtime - time) / 1000 / 60;
  console.log(`HIT : ${timedif}`);

  if (timedif > 3) {
    return 3;
  } else if (timedif > 2) {
    return 2;
  } else if (timedif > 1) {
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
    select: {
      sensor: true,
      time: true,
    },
  });
  const curtime = new Date();
  if (sensor === "PIR1") {
    const timedif = (curtime - time) / 1000 / 60;
    console.log(`PIR1 : ${timedif}`);
    if (timedif > 3) {
      return 3;
    } else if (timedif > 2) {
      return 2;
    } else if (timedif > 1) {
      return 1;
    } else {
      return 0;
    }
  }
  if (sensor === "PIR2") {
    const timedif = (curtime - time) / 1000 / 60;
    if (timedif > 1) {
      return "관심 1";
    } else if (timedif > 2) {
      return "관심 2";
    } else if (timedif > 3) {
      return "위험";
    } else {
      return "정상";
    }
  }
  if (sensor === "PIR3") {
    const timedif = (curtime - time) / 1000 / 60;
    if (timedif > 1) {
      return "관심 1";
    } else if (timedif > 2) {
      return "관심 2";
    } else if (timedif > 3) {
      return "위험";
    } else {
      return "정상";
    }
  }
  if (sensor === "PIR4") {
    const timedif = (curtime - time) / 1000 / 60;
    if (timedif > 1) {
      return "관심 1";
    } else if (timedif > 2) {
      return "관심 2";
    } else if (timedif > 3) {
      return "위험";
    } else {
      return "정상";
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
