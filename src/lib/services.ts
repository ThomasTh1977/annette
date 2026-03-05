export interface ServiceOption {
  id: string;
  name: string;
  price: number;
  priceLabel: string;
  isStartingPrice?: boolean;
}

export interface ServiceCategory {
  id: string;
  name: string;
  icon: string;
  options: ServiceOption[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "haarschnitt",
    name: "Haarschnitt",
    icon: "scissors",
    options: [
      { id: "schnitt-kurz", name: "Schneiden Kurz", price: 40, priceLabel: "40\u20AC" },
      { id: "schnitt-mittel", name: "Schneiden Mittel", price: 45, priceLabel: "45\u20AC" },
      { id: "schnitt-lang", name: "Schneiden Lang", price: 50, priceLabel: "50\u20AC" },
      { id: "herren", name: "Herrenschnitt", price: 35, priceLabel: "35\u20AC" },
      { id: "kinder", name: "Kinder bis 12 J.", price: 20, priceLabel: "20\u20AC" },
      { id: "pony", name: "Pony schneiden", price: 5, priceLabel: "5\u20AC" },
    ],
  },
  {
    id: "farbe",
    name: "Farbe & Str\u00E4hnen",
    icon: "palette",
    options: [
      { id: "farbe-kurz", name: "Farbe kurzes Haar", price: 40, priceLabel: "40\u20AC" },
      { id: "farbe-mittel", name: "Farbe mittellanges Haar", price: 60, priceLabel: "60\u20AC" },
      { id: "farbe-lang", name: "Farbe langes Haar", price: 80, priceLabel: "80\u20AC" },
      { id: "ansatz-mittel", name: "Ansatzfarbe mittel", price: 45, priceLabel: "45\u20AC" },
      { id: "ansatz-lang", name: "Ansatzfarbe lang", price: 50, priceLabel: "50\u20AC" },
      { id: "straehnen-kurz", name: "Str\u00E4hnen kurz", price: 65, priceLabel: "ab 65\u20AC", isStartingPrice: true },
      { id: "straehnen-mittel", name: "Str\u00E4hnen mittel", price: 85, priceLabel: "ab 85\u20AC", isStartingPrice: true },
      { id: "straehnen-lang", name: "Str\u00E4hnen lang", price: 95, priceLabel: "ab 95\u20AC", isStartingPrice: true },
      { id: "toenung", name: "Glanz-Pflege-T\u00F6nung", price: 30, priceLabel: "ab 30\u20AC", isStartingPrice: true },
    ],
  },
  {
    id: "styling",
    name: "Styling & Pflege",
    icon: "sparkles",
    options: [
      { id: "foehnen", name: "F\u00F6hnen", price: 20, priceLabel: "15\u201330\u20AC", isStartingPrice: true },
      { id: "glaetten", name: "Gl\u00E4tten", price: 25, priceLabel: "20\u201330\u20AC", isStartingPrice: true },
      { id: "dauerwelle", name: "Dauerwelle inkl. Schneiden", price: 80, priceLabel: "80\u20AC" },
    ],
  },
  {
    id: "extras",
    name: "Augen & Extras",
    icon: "eye",
    options: [
      { id: "wimpern", name: "Wimpern f\u00E4rben", price: 15, priceLabel: "15\u20AC" },
      { id: "augenbrauen", name: "Augenbrauen f\u00E4rben", price: 7, priceLabel: "7\u20AC" },
    ],
  },
];
