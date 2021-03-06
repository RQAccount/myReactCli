
let mockInstance = null;
const mockRoutes = generateRoutes(require.context('./mock/', true, /\.js$/));

/**
 * 通过context 生成 mock route 列表
 * @param context
 * @returns {Array}
 */
function generateRoutes(context) {
    const routes = {};
    context.keys().forEach((path) => {
        const p = path.replace(/\.(.*)\.js/, '$1').toLowerCase();
        routes[p] = {
            path: p,
            data: context(path),
        };
    });
    return Object.keys(routes).map(k => routes[k]);
}

/**
 * 获取Mock实例，单例
 * @param routers
 * @returns {function(*=, *=)}
 * @constructor
 */
function MockInstance(routers) {
    console.log('[MOCK INFO] mock instance init...', routers);
    return (request, callback) => {
        const { url } = request;
        let found = false;
        for (let i = 0; i < routers.length; i += 1) {
            const route = routers[i];
            const match = route.path === url;
            if (match) {
                if (callback) {
                    callback({
                        config: request,
                        data: route.data,
                    });
                }
                found = true;
                break;
            }
        }
        if (!found) {
            console.warn('[MOCK WARNING] request: not found', request);
        }
    };
}

export default function simulationRequest() {

    if (!mockInstance) {
        mockInstance = MockInstance(mockRoutes);
    }

    return (request) => new Promise(resolve =>
            mockInstance(request, (data) => {
                setTimeout(() => {
                    if (typeof data.data === 'function') {
                        const { config } = data;
                        const params = JSON.parse(config.data);
                        resolve({
                            ...data,
                            data: data.data(params),
                        });
                    } else {
                        resolve(data);
                    }

                }, 500);
            }));
}