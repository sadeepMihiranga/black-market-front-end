import http from "./httpService";

export function getProducts() {
    return http.get("/product");
}

export function getProductPrices(priceTableRequest) {
    return http.post("/product/calculate/prices", priceTableRequest);
}

export function getOrderPriceForAProduct(orderPriceRequest) {
    return http.post("/product/calculate/price", orderPriceRequest);
}
