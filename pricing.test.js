import { test } from "node:test";
import assert from "node:assert/strict";
import { PLANS, monthlyPrice } from "./pricing.js";

const team = PLANS.find((p) => p.id === "team");

test("monthly USD price is the base price", () => {
  assert.equal(monthlyPrice(team, { annual: false, currency: "USD" }), 24);
});

test("annual billing charges 10 of 12 months", () => {
  assert.equal(monthlyPrice(team, { annual: true, currency: "USD" }), 20);
});

test("currency conversion applies the rate", () => {
  assert.equal(monthlyPrice(team, { annual: false, currency: "INR" }), 2016);
});

test("free plan stays free", () => {
  const hobby = PLANS.find((p) => p.id === "hobby");
  assert.equal(monthlyPrice(hobby, { annual: true, currency: "EUR" }), 0);
});
