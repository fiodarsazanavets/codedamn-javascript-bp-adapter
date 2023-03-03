const SocketAdapter = require('./socketAdapter.js');
const EuropeanSocketPlug = require('./europeanSocketPlug.js');
const EuropeanElectricSocket = require('./europeanElectricSocket.js');
const BritishElectricSocket = require('./britishElectricSocket.js');

var socketPlug = new EuropeanSocketPlug();
socketPlug.selectSocket(new BritishElectricSocket());
socketPlug.connectToSocket();