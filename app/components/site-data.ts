import { BsPeople } from "react-icons/bs";
import { FaChartLine } from "react-icons/fa";
import { LuChefHat } from "react-icons/lu";
import { FaLaptop } from "react-icons/fa";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { GrPlan } from "react-icons/gr";
import { IoRocketOutline } from "react-icons/io5";
import { MdLoop } from "react-icons/md";









export const navItems = [
  { label: "O nas", href: "#o-nas" },
  { label: "Oferta", href: "#oferta" },
  { label: "Audyt", href: "#audyt" },
  { label: "Wyniki", href: "#wyniki" },
  { label: "Kontakt", href: "#kontakt" },
];

export const pillars = [
  {
    title: "Finanse",
    icon: BsPeople, 
    description: "Food cost, koszty pracy, kontrola strat, marża i KPI w jednym widoku.",
  },
  {
    title: "Praca",
    icon: FaChartLine,
    description: "Grafiki, standardy, onboarding i ergonomia stanowisk bez chaosu.",
  },
  {
    title: "Procesy",
    icon: LuChefHat,
    description: "Układ kuchni, kolejność działań, wydawanie i receptury, które działają.",
  },
  {
    title: "Systemy",
    icon: FaLaptop,
    description: "POS, raporty, checklisty i automatyzacje, które oszczędzają czas zespołu.",
  },
];



export const steps = [
  {
    icon: PiMagnifyingGlassBold,
    title: "Diagnoza",
    text: "Analizujemy dane, obserwujemy rytm pracy i szukamy najkrótszej drogi do poprawy.",
  },
  {
    icon: GrPlan,
    title: "Plan działania",
    text: "Ustalamy priorytety i zamieniamy je w wdrożenie dopasowane do lokalu.",
  },
  {
    icon: IoRocketOutline,
    title: "Wdrożenie",
    text: "Porządkujemy procesy, ustawiamy zespół i wprowadzamy prostsze zasady pracy.",
  },
  {
    icon: FaChartLine,
    title: "Pomiar efektów",
    text: "Sprawdzamy wyniki i korygujemy kierunek, żeby poprawa była trwała.",
  },
  {
    icon: MdLoop,
    title: "Stałe doskonalenie",
    text: "Zostawiamy system, który można dalej rozwijać bez wracania do chaosu.",
  },
];

export const results = [
  { value: "+15%", label: "średni wzrost rentowności lokali" },
  { value: "-20%", label: "redukcja kosztów operacyjnych" },
  { value: "+25%", label: "wzrost efektywności pracy zespołu" },
  { value: "100+", label: "lokali, którym pomogliśmy" },
];

export const heroHighlights = [
  "Praktyczne rozwiązania zamiast PDF-ów",
  "Wdrożenie i mierzalne efekty",
  "Partner, który zostaje do końca",
];

export const auditBenefits = [
  "analiza 360° Twojego lokalu",
  "identyfikacja strat i wąskich gardeł",
  "rekomendacje z planem wdrożenia",
  "priorytetyzacja szybkich wygranych",
];

export const auditChecklist = [
  "Porządek stanowisk i przepływ pracy",
  "Nadmierne ruchy i straty czasu",
  "Braki w danych i raportowaniu",
  "Niezdefiniowane odpowiedzialności",
  "Brak standardu dla powtarzalnych zadań",
];
