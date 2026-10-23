# 📈 TierUp: Pricing Page

> A pricing page for a fictional uptime-monitoring SaaS, built around **Flexbox**. It has a monthly/annual toggle, multi-currency pricing, a feature comparison table and a FAQ accordion.

**🔗 Live demo:** https://himanshuuem.github.io/tierup/

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3_Flexbox-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/ES_Modules-F7DF1E?logo=javascript&logoColor=black)
![Tests](https://img.shields.io/badge/tests-node%3Atest-339933?logo=node.js&logoColor=white)

## ✨ Features

- **Flexbox layout:** cards wrap responsively (`flex: 1 1 300px`), stretch to equal height, and `flex: 1` on the perk list pins every CTA to the bottom.
- **Billing toggle:** an accessible `role="switch"`. Annual billing charges 10 of 12 months and shows the yearly total.
- **Multi-currency:** INR, USD and EUR, formatted with `Intl.NumberFormat`. The default currency is guessed from the browser locale.
- **Pricing logic in its own module** (`pricing.js`), covered by unit tests.
- **Featured plan:** a gradient border made with the `padding-box` / `border-box` background trick, a ribbon and a subtle scale-up.
- **Comparison table** with proper `<th scope>` headers that scrolls horizontally on small screens.
- **FAQ** built from native `<details>`/`<summary>`, with no JavaScript.
- Automatic dark mode and reduced-motion support.

## 🛠 Tech Stack

HTML5 · CSS3 (Flexbox, custom properties, `color-mix()`) · Vanilla JS ES modules · `Intl.NumberFormat` · `node:test`

## 📁 Structure

```
tierup/
├── index.html        # Layout, table, FAQ, card template
├── styles.css        # Flexbox layout and theming
├── pricing.js        # Plan data + pure pricing functions
├── pricing.test.js   # Unit tests
├── app.js            # Rendering and toggles
└── package.json
```

## 🚀 Run Locally

```bash
git clone https://github.com/himanshuuem/tierup.git
cd tierup
npm start    # http://localhost:3000
npm test
```

## 📚 Origin

This is an expanded version of the *Flexbox Pricing Table* project from [The Complete Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/). TierUp is fictional and the exchange rates are illustrative.

---

Made by [Himanshu](https://github.com/himanshuuem)
