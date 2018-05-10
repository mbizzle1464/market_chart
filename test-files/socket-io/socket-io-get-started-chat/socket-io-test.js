// Import socket.io with a connection to a channel (i.e. tops)
const socket = require("socket.io-client")(
  "https://ws-api.iextrading.com/1.0/tops"
);

function test() {
  // Listen to the channel's messages
  socket.on("message", message =>
    console.log(JSON.parse(message).lastSalePrice)
  );

  // Connect to the channel
  socket.on("connect", () => {
    // Subscribe to topics (i.e. appl,fb,aig+)
    socket.emit("subscribe", "aapl");
  });

  // Disconnect from the channel
  socket.on("disconnect", () => console.log("Disconnected."));
}

test();
