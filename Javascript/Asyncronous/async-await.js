
// async-await return a promise
// easier to read

async function playerStart () {
  const firstMove = await movePlayer(100, "left");
  await movePlayer(200, "left");
  await movePlayer(300, "right");
  await movePlayer(400, "left");
