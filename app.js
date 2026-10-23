import { PLANS, CURRENCIES, ANNUAL_MONTHS_CHARGED, monthlyPrice, formatMoney } from "./pricing.js";

const plansEl = document.querySelector(".plans");
const template = document.querySelector("#plan-template");
const billingSwitch = document.querySelector(".switch");
const currencySelect = document.querySelector("#currency");

const state = { annual: false, currency: "INR" };

function guessCurrency() {
  const region = (navigator.language || "en-IN").split("-")[1];
  if (region === "US") return "USD";
  if (["DE", "FR", "ES", "IT", "NL", "IE"].includes(region)) return "EUR";
  return "INR";
}

function buildCards() {
  const cards = PLANS.map((plan) => {
    const card = template.content.firstElementChild.cloneNode(true);
    card.dataset.plan = plan.id;
    card.classList.toggle("featured", Boolean(plan.featured));
    card.querySelector(".ribbon").hidden = !plan.featured;
    card.querySelector(".plan-name").textContent = plan.name;
    card.querySelector(".plan-blurb").textContent = plan.blurb;
    card.querySelector(".cta").textContent = plan.cta;
    card.querySelector(".perks").replaceChildren(
      ...plan.perks.map((perk) => Object.assign(document.createElement("li"), { textContent: perk })),
    );
    return card;
  });
  plansEl.replaceChildren(...cards);
}

function updatePrices() {
  for (const plan of PLANS) {
    const card = plansEl.querySelector(`[data-plan="${plan.id}"]`);
    const perMonth = monthlyPrice(plan, state);
    const amountEl = card.querySelector(".amount");
    amountEl.textContent = plan.monthlyUsd === 0 ? "Free" : formatMoney(perMonth, state.currency);
    amountEl.classList.remove("flip");
    void amountEl.offsetWidth;
    amountEl.classList.add("flip");
    card.querySelector(".period").textContent = plan.monthlyUsd === 0 ? "" : "/mo";

    const billed = card.querySelector(".billed");
    if (plan.monthlyUsd === 0) {
      billed.textContent = "Free forever, no card needed";
    } else if (state.annual) {
      const yearly = Math.round(plan.monthlyUsd * ANNUAL_MONTHS_CHARGED * CURRENCIES[state.currency].rate);
      billed.textContent = `Billed ${formatMoney(yearly, state.currency)} yearly`;
    } else {
      billed.textContent = "Billed monthly, cancel anytime";
    }
  }
}

billingSwitch.addEventListener("click", () => {
  state.annual = !state.annual;
  billingSwitch.setAttribute("aria-checked", String(state.annual));
  document.body.classList.toggle("is-annual", state.annual);
  updatePrices();
});

currencySelect.addEventListener("change", () => {
  state.currency = currencySelect.value;
  updatePrices();
});

state.currency = guessCurrency();
currencySelect.value = state.currency;
buildCards();
updatePrices();
