// Base prices are monthly, in USD. Annual billing charges 10 months for 12.
export const PLANS = [
  {
    id: "hobby",
    name: "Hobby",
    blurb: "For side projects and personal sites.",
    monthlyUsd: 0,
    perks: ["5 monitors", "5-minute checks", "Email alerts", "1 public status page"],
    cta: "Start free",
  },
  {
    id: "team",
    name: "Team",
    blurb: "For startups with real users and a real pager.",
    monthlyUsd: 24,
    featured: true,
    perks: ["50 monitors", "30-second checks", "On-call rotations", "Slack, SMS & voice", "5 status pages"],
    cta: "Start 14-day trial",
  },
  {
    id: "scale",
    name: "Scale",
    blurb: "For platforms where every minute is money.",
    monthlyUsd: 89,
    perks: ["Unlimited monitors", "10-second checks", "SSO / SAML", "2-year retention", "Priority support"],
    cta: "Talk to us",
  },
];

export const CURRENCIES = {
  USD: { rate: 1, locale: "en-US" },
  INR: { rate: 84, locale: "en-IN" },
  EUR: { rate: 0.92, locale: "de-DE" },
};

export const ANNUAL_MONTHS_CHARGED = 10;

/** Price per month shown on the card, in the chosen currency (rounded to whole units). */
export function monthlyPrice(plan, { annual, currency }) {
  const { rate } = CURRENCIES[currency];
  const perMonthUsd = annual ? (plan.monthlyUsd * ANNUAL_MONTHS_CHARGED) / 12 : plan.monthlyUsd;
  return Math.round(perMonthUsd * rate);
}

export function formatMoney(amount, currency) {
  const { locale } = CURRENCIES[currency];
  return new Intl.NumberFormat(locale, { style: "currency", currency, maximumFractionDigits: 0 }).format(amount);
}
