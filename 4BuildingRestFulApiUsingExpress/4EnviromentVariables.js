// Now one thing we need to improve in this code is this hard coded value for the ports.So we have
// used 3000 as an arbitrary number, why this may work
// on your development machine, it's unlikely it's going to work in the
// production environment.Because when you deploy this application to a hosting environment
// the port is dynamically assigned by the hosting environment,

// so we can't rely on 3000 to be available,so, the way to fix this is by using an environment variable.
// So typically in hosting environments for node applications,
// we have this environment variable called ports.
// An environment variable is basically a variable that is part of the environment
// in which a process runs,


// HOW TO SET ENV IN MAC ? --> open cmd and type export PORT=5000;
// in code process.env.PORT use it will fetch the value from env.
