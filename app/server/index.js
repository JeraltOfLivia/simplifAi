import app from './app';
// import port
//import { SERVER_PORT } from '../../config';
let PORT;
if(process.env.NODE_ENV === 'production') {
  PORT = process.env.PORT;
} else {
  PORT = 3000;
}

// set the port based on environment or use default if not set
//const PORT = process.env.PORT || SERVER_PORT;

// start the server
app.listen(PORT, () => {
  console.log(`${(new Date()).toLocaleTimeString("en-US")}`)
  console.log(`See the magic on port ${PORT}!`)
});