class Router {
    go(route) {
        console.log(`Going to route ${route}`);
    }
}

Router.$name = 'router';

module.exports = Router;
