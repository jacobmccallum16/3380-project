const { useState, useEffect } = React;

// const URI = "http://34.83.182.59:3003/api";
const URI = "http://127.0.0.1:3003/api";
const localURI = "/api"

function formatPrice(price) {
  let dollars = Math.floor(price);
  let cents = Math.round((price - dollars) * 100);
  let formattedPrice = `$ ${dollars}.${cents}`;
  return formattedPrice;
}

function calculateCost(price, qty) {
  let newPrice = Math.round(price * qty * 100) / 100;
  return newPrice;
}

function formatAndCalculatePrice(price, qty, setCostFunction) {
  let newPrice = Math.round(price * qty * 100) / 100;
  let dollars = Math.floor(newPrice);
  let cents = Math.round((newPrice - dollars) * 100);
  setCostFunction(newPrice);
  let formattedPrice = `$ ${dollars}.${cents}`;
  return formattedPrice;
}
