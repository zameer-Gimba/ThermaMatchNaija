# ThermaMatch Nigeria 🇳🇬
> **The Industrial Thermal Waste & Circular Energy Matchmaking Platform**

ThermaMatch Nigeria is an enterprise-grade prototype designed to address industrial energy overheads within Nigeria's major manufacturing hubs (Lagos, Ogun, Kano, Anambra). By offering a secure, anonymous interface, the platform allows factories to list their thermal waste streams (flue gas, exhaust streams, cooling water) while enabling nearby off-takers to bid for integration—slashing up to 40% of operational energy costs.

This framework is built to align conceptually with the data collection and resource optimization objectives of the **GEF-UNIDO Industrial Energy Efficiency (IEE) Project** and the **Manufacturers Association of Nigeria (MAN)**.

---

## Key Features

- **Data Privacy Anonymity:** Factory identities are completely masked behind encrypted Reference IDs until a mutual NDA protocol is signed.
- **Dynamic Cluster Filtering:** Sort asset profiles instantly by key Nigerian industrial corridors (Ikeja Industrial Estate, Agbara Hub, Sharada Estate, etc.).
- **Thermodynamic Visibility:** Real-time visibility into temperature profiles (°C), fluid flow rates (m³/h), and available cycle timelines.
- **Turnkey Regulatory Mockup:** Features integrated corporate compliance forms mapping straight into existing international green funding prerequisites.

---

## Architecture & Tech Stack

- **Frontend:** Next.js (App Router), React, Tailwind CSS (for native utility layouts), Lucide Icons.
- **Deployment:** Optimized for instant edge rendering via Vercel Connect workflows.

---

## Project Structure

```text
├── src/
│   ├── data/
│   │   └── dummyData.js        # Realistic Nigerian industrial cluster data profiles
│   ├── components/
│   │   ├── MetricCard.jsx      # Reusable executive-level reporting stat cards
│   │   └── MatchModal.jsx      # Corporate NDA workflow & request portal overlay
│   └── app/
│       └── page.js             # Main responsive dashboard workspace
├── requirements.txt            # Analytical dependency targets 
└── README.md                   # System documentation
```

---

## Getting Started & Deployment

### Vercel One-Click Deployment (Recommended)
1. Fork or push this repository directly to your personal GitHub account.
2. Log into your **Vercel Dashboard**.
3. Click `Add New > Project` and select this repository.
4. Leave settings at default (Next.js preset automatically recognized) and click **Deploy**.

### Local Workspace Setup
If you want to pull down and run the workspace locally:
```bash
# Clone the repository
git clone https://github.com

# Move into root
cd thermamatch-nigeria

# Install node packets
npm install

# Fire up development server
npm run dev
```
Open `http://localhost:3000` to review the local simulation environment.

---

## 💡 Academic & Research Context
For international research grant tracks or MSc applications, this setup models a decentralized matchmaking heuristic aimed at solving localized thermal degradation across short-distance spatial distributions in developing energy grids. 

---

## ⚖️ License
Distributed under the MIT License. Feel free to clone, build upon, or share with industry stakeholders.
