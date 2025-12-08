// Product data - 4 Core Accuflow Systems + Mobile Well Test
export const products = [
  {
    id: 1,
    name: "Accuflow 2-Phase SR & LT Series",
    category: "2-Phase Systems",
    shortDesc: "Standard (SR) and compact (LT) configurations for complete gas/liquid separation",
    description: "The patented Accuflow 2-phase Series multiphase metering system consists of a vertical pipe section and a horizontal pipe section connected together. Multiphase fluid (oil, water, gas) enters the vertical pipe tangentially, creating a cyclonic action where the majority of gas is separated and flows upward. Available in two configurations: SR (Standard) for general applications and LT (Compact) for space-limited areas such as offshore platforms.",
    features: [
      "SR Series: Standard configuration (6' W x 15' L)",
      "LT Series: Compact design for offshore duty (4' W x 12' L)",
      "Entire system made of common steel pipes; no pressure vessels required",
      "All components are commercially proven technologies",
      "Very low pressure drop (less than 3 psi)",
      "Low liquid inventory and fast response"
    ],
    benefits: [
      "Low equipment cost",
      "Easy to transport, install, & operate",
      "Very low maintenance",
      "Accurate measurement",
      "Handles wide range of flow rates",
      "Applicable for 0 to 100% water cut",
      "Applicable for 0 to 100% gas fraction",
      "Frequent well testing"
    ],
    specs: {
      "SR Footprint": "6' W x 15' L (typical)",
      "LT Footprint": "4' W x 12' L (typical)",
      "Height": "12' (typical)",
      "ANSI Rating": "150#, 300#, 600#, 900#",
      "Liquid Accuracy": "±1% of reading",
      "Gas Accuracy": "±5% of reading",
      "Water Cut Accuracy": "±2% absolute",
      "Pressure Drop": "Less than 3 psi"
    },
    images: ["2phase-1.png", "2phase-2.png", "2phase-6.png", "2phase-3.png","2phase-4.png", "2phase-5.png"],
    brochurePage: 3
  },
  {
    id: 2,
    name: "Accuflow 2-Phase JR Series",
    category: "2-Phase Systems",
    shortDesc: "Most compact 2-phase system with self-regulated liquid level",
    description: "The Accuflow 2-Phase JR (Junior) Series is the most compact configuration of the Accuflow 2-phase product line. It features a self-regulated liquid level control system that eliminates the need for control valves, making it ideal for gas condensate wells and space-limited installations.",
    features: [
      "Most compact 2-phase configuration",
      "Self-regulated liquid level (no control valves required)",
      "Simple and reliable operation",
      "Very low pressure drop",
      "Suitable for gas condensate wells"
    ],
    benefits: [
      "Smallest footprint in product line",
      "Reduced installation costs",
      "Minimal maintenance requirements",
      "Fast deployment",
      "Excellent for space-constrained locations",
      "No external power required for level control",
      "Proven reliability"
    ],
    specs: {
      "Footprint": "4' W x 8' L (typical)",
      "Height": "12' (typical)",
      "ANSI Rating": "150#, 300#, 600#, 900#",
      "Liquid Accuracy": "±1% of reading",
      "Gas Accuracy": "±5% of reading",
      "Water Cut Accuracy": "±2% absolute",
      "Pressure Drop": "Less than 3 psi"
    },
    images: ["2phase-jr-1.png", "2phase-jr-2.png","2phase-jr-3.png", "2phase-jr-4.png","2phase-jr-5.png"],
    brochurePage: 5
  },
  {
    id: 3,
    name: "Accuflow 3-Phase Series",
    category: "3-Phase Systems",
    shortDesc: "Advanced separation for high water cut applications",
    description: "The Accuflow 3-Phase Series is specifically designed for wells producing more than 85% water cut. It features an advanced weir-based separation system that efficiently separates oil, water, and gas in a single compact unit.",
    features: [
      "Weir-based water/oil separation",
      "Designed for high water cut (greater than 85%)",
      "Complete 3-phase separation",
      "Proven multiphase metering technology",
      "Compact integrated design"
    ],
    benefits: [
      "Accurate measurement at high water cuts",
      "Single unit for complete separation",
      "Reduced facility footprint",
      "Lower capital costs vs. traditional separators",
      "Easy to operate and maintain",
      "Fast response time",
      "Suitable for challenging well conditions"
    ],
    specs: {
      "Footprint": "6' W x 20' L (typical)",
      "Height": "12' (typical)",
      "ANSI Rating": "150#, 300#, 600#, 900#",
      "Liquid Accuracy": "±1% of reading",
      "Gas Accuracy": "±5% of reading",
      "Water Cut Accuracy": "±2% absolute",
      "Pressure Drop": "Less than 5 psi"
    },
    images: ["3phase-1.png", "3phase-2.png","3phase-3.png", "3phase-4.png","3phase-5.png"],
    brochurePage: 6
  },
  {
    id: 4,
    name: "Accuflow 3-Phase JR Series",
    category: "3-Phase Systems",
    shortDesc: "Compact 3-phase system with baffle plate technology",
    description: "The Accuflow 3-Phase JR (Junior) Series combines compact design with efficient 3-phase separation using advanced baffle plate technology. Features dual vertical pipe configuration for enhanced separation efficiency in a minimal footprint.",
    features: [
      "Compact 3-phase configuration",
      "Baffle plate separation technology",
      "Dual vertical pipe design",
      "Space-optimized footprint",
      "Complete oil/water/gas separation"
    ],
    benefits: [
      "Smallest 3-phase system available",
      "Ideal for space-limited installations",
      "Efficient separation at high water cuts",
      "Lower installation costs",
      "Reduced maintenance requirements",
      "Fast deployment capability",
      "Proven technology"
    ],
    specs: {
      "Footprint": "6' W x 8' L (typical)",
      "Height": "12' (typical)",
      "ANSI Rating": "150#, 300#, 600#, 900#",
      "Liquid Accuracy": "±1% of reading",
      "Gas Accuracy": "±5% of reading",
      "Water Cut Accuracy": "±2% absolute",
      "Pressure Drop": "Less than 5 psi"
    },
    images: ["3phase-jr-1.png", "3phase-jr-2.png","3phase-jr-3.png", "3phase-jr-4.png","3phase-jr-5.png"],
    brochurePage: 7
  },
  {
    id: 5,
    name: "Mobile Well Test Unit",
    category: "Mobile Solutions",
    shortDesc: "Truck-mounted well testing system with integrated Accuflow MPFM for rapid deployment",
    description: "The MPAS Mobile Well Test Unit combines proven Accuflow multiphase flow meter technology with a complete separation and testing system mounted on a heavy-duty truck platform. Designed for rapid deployment and continuous field operations, these units support over 10,000 well tests annually across Indonesia. Each unit features integrated three-phase separation, accurate metering, and comprehensive safety systems, providing a complete solution for production well testing without the need for permanent facilities.",
    features: [
      "Truck-mounted for rapid deployment",
      "Integrated Accuflow MPFM technology",
      "Complete 3-phase separation system",
      "Real-time production monitoring",
      "Automated well test sequencing",
      "PLC control with HMI interface",
      "SCADA connectivity for remote monitoring",
      "Gas flare system with safety interlocks",
      "Produced water handling system",
      "Self-contained power generation",
      "ASME-certified pressure vessels",
      "Full safety instrumentation package"
    ],
    benefits: [
      "Rapid mobilization to well sites",
      "Eliminates need for permanent test facilities",
      "Proven reliability - 10,000+ tests annually",
      "Reduced well testing costs",
      "Accurate production data for reservoir management",
      "Experienced field operations team",
      "Comprehensive HSE compliance",
      "Available for short-term rental or long-term contracts",
      "Minimal site preparation required",
      "Quick start-up and commissioning"
    ],
    specs: {
      "Liquid Capacity": "100 - 3000 BFPD",
      "Gas Capacity": "0.5 - 5 MMSCFD",
      "Operating Pressure": "50 - 500 Psig",
      "Separator Configuration": "Vertical 3-phase",
      "Oil Metering": "Turbine meter ±1% accuracy",
      "Water Metering": "Magnetic flowmeter ±0.5%",
      "Gas Metering": "Orifice/Ultrasonic ±2%",
      "MPFM Technology": "Accuflow GLCC-based",
      "Control System": "PLC with color HMI",
      "Data Storage": "90 days minimum",
      "Power Supply": "Onboard diesel generator",
      "Truck Platform": "Heavy-duty 6x4 configuration",
      "Crew Cabin": "Air-conditioned operator shelter",
      "Certifications": "ISO 9001, ASME, local HSE compliance"
    },
    applications: [
      "Production well testing",
      "New well commissioning",
      "Well performance evaluation",
      "Workover validation",
      "Field development campaigns",
      "Temporary production during facility maintenance",
      "Extended well testing",
      "Reservoir characterization"
    ],
    clients: [
      "PT Pertamina Hulu Rokan (2021-2027)",
      "Chevron Pacific Indonesia (2011-2021)",
      "PT Pertamina EP Zona 7 (2009-Present)",
      "Supreme Energy Geothermal (2018)"
    ],
    services: [
      "Mobile well test operations",
      "Sonolog fluid level measurement",
      "Proving and calibration services",
      "Field supervision and reporting",
      "24/7 operational support",
      "Data analysis and interpretation",
      "Equipment rental with operators",
      "Training and technical support"
    ],
    images: ["mobile well test 1.png", "mobile well test 2.png", "mobile well test 3.png", "mobile well test 4.png"]
  }
];

export const productCategories = [
  "All Products",
  "2-Phase Systems",
  "3-Phase Systems",
  "Mobile Solutions"
];

export const filterOptions = {
  pipeType: ["Pipe Type", "2-Phase", "3-Phase", "Mobile"],
  configuration: ["Configuration", "SR Series", "JR Series", "Mobile Unit"]
};
