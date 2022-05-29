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
  const { sensor } = await prisma.logs.findFirst({
    where: {
      sensor: {
        contains: "PIR",
      },
    },
    select: {
      sensor: true,
    },
  });

  if (sensor === "PIR1") {
    return "거실";
  } else if (location === "PIR2") {
    return "안방";
  } else if (location === "PIR3") {
    return "화장실";
  } else if (location === "PIR4") {
    return "부엌";
  } else {
    return "화장실";
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
