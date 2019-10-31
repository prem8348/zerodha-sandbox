import { POSTSessionToken, DELETESessionToken } from "./User/session-token";
import { GETUserProfile } from "./User/user-profile";
import { GETUserMarginSegments } from "./User/user-margins-segment";
import { POSTOrderVariety, PUTOrderVariety, DELETEOrderVariety } from './Orders/orders-variety';
import { GETOrders, GETOrderById } from './Orders/orders';
import { GETTrades } from './Orders/trades';

const UnderContruction = (request: any, response: any) => {
    response.status(503).jsonp({
        "COLLABORATION-NEEDED": "Please contibute the API response https://github.com/nordible/zerodha-sandbox/pulls"
    });
}

export const router = (server: any) => {

    // User routes
    server.post('/session/token', POSTSessionToken);
    server.post('/user/profile', GETUserProfile);
    server.post('user/margins/:segment', GETUserMarginSegments);
    server.delete('/session/token', DELETESessionToken);

    // Orders routes
    server.post('/orders/:variety', POSTOrderVariety);
    server.put('/orders/:variety/:order_id', PUTOrderVariety);
    server.delete('/orders/:variety/:order_id', DELETEOrderVariety);
    server.get('/orders', GETOrders);
    server.get('/orders/:order_id', GETOrderById);
    server.get('/trades', GETTrades);
    server.get('/orders/:order_id/trades', GETOrderByIdTrades);

    // Portfolio
    server.get('/portfolio/holdings', UnderContruction);
    server.get('/portfolio/positions', UnderContruction);
    server.put('/portfolio/positions', UnderContruction);

    // Market quotes and instruments
    server.get('/instruments', UnderContruction);
    server.get('/instruments/:exchange', UnderContruction);
    server.get('/quote', UnderContruction);
    server.get('/quote/ohlc', UnderContruction);
    server.get('/quote/ltp', UnderContruction);

    // Historical candle data
    server.get('/instruments/historical/:instrument_token/:interval', UnderContruction);

    // Mutual funds
    server.post('/mf/orders', UnderContruction);
    server.delete('/mf/orders/:order_id', UnderContruction);
    server.get('/mf/orders', UnderContruction);
    server.get('/mf/orders/:order_id', UnderContruction);
    server.post('/mf/sips', UnderContruction);
    server.put('/mf/sips/:order_id', UnderContruction);
    server.delete('/mf/sips/:order_id', UnderContruction);
    server.get('/mf/sips/', UnderContruction);
    server.get('/mf/sips/:order_id', UnderContruction);
    server.get('/mf/holdings', UnderContruction);
    server.get('/mf/instruments', UnderContruction);

    // GTT - Good Till Triggered orders
    server.post('/gtt/triggers', UnderContruction);
    server.get('/gtt/triggers', UnderContruction);
    server.get('/gtt/triggers/:id', UnderContruction);
    server.put('/gtt/triggers/:id', UnderContruction);
    server.delete('/gtt/triggers/:id', UnderContruction);


}