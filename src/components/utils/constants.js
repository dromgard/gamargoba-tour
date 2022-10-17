import stuffDmitrii from "../../images/stuff-dmitrii.png";
import stuffJohn from "../../images/stuff-john.png";
import star from "../../images/star.svg";
import toursCard1 from "../../images/tour-card-1.png";
import toursCard2 from "../../images/tour-card-2.png";
import toursCard3 from "../../images/tour-card-3.png";
import toursCard4 from "../../images/tour-card-4.png";
import favouritePlace1 from "../../images/favourites-place-1.png";
import favouritePlace2 from "../../images/favourites-place-2.png";
import reviewsPhoto1 from "../../images/reviews-photo-1.png";
import reviewsPhoto2 from "../../images/reviews-photo-2.png";
import reviewsPhoto3 from "../../images/reviews-photo-3.png";

export const stuff = [
  {
    id: 1,
    photo: stuffDmitrii,
    name: "Дмитрий",
    placeFrom: "Грузия, Батуми",
    rating: 5,
    star: star,
    text: `Каждый из нас понимает очевидную вещь: высокотехнологичная концепция 
    социального заказа обеспечивает актуальность вывода оборотных средств.`,
  },
  {
    id: 2,
    photo: stuffJohn,
    name: "Джон",
    placeFrom: "Грузия, Батуми",
    rating: 4,
    star: star,
    text: `Каждый из нас понимает очевидную вещь: высокотехнологичная концепция 
    социального заказа обеспечивает актуальность вывода оборотных средств.`,
  },
];

export const toursCards = [
  {
    id: 1,
    photo: toursCard1,
    title: "Грузия за 7 дней",
    subtitle: "Для любителей старины и винишка",
    link: "/",
  },
  {
    id: 2,
    photo: toursCard2,
    title: "Горнолыжный курорт",
    subtitle: "Для любителей возить саночки",
    link: "/",
  },
  {
    id: 3,
    photo: toursCard3,
    title: "Новогодняя сказка: горы и вино",
    subtitle: "Для любителей пиков, ёлок и винишка",
    link: "/",
  },
  {
    id: 4,
    photo: toursCard4,
    title: "Индивидуальная перезагрузка",
    subtitle: "Для тех кто сгорел на работе",
    link: "/",
  },
  {
    id: 5,
    photo: toursCard1,
    title: "Грузия за 7 дней",
    subtitle: "Для любителей старины и винишка",
    link: "/",
  },
  {
    id: 6,
    photo: toursCard2,
    title: "Горнолыжный курорт",
    subtitle: "Для любителей возить саночки",
    link: "/",
  },
  {
    id: 7,
    photo: toursCard3,
    title: "Новогодняя сказка: горы и вино",
    subtitle: "Для любителей пиков, ёлок и винишка",
    link: "/",
  },
  {
    id: 8,
    photo: toursCard4,
    title: "Индивидуальная перезагрузка",
    subtitle: "Для тех кто сгорел на работе",
    link: "/",
  },
];

export const toursIncludes = [
  {
    id: 1,
    title: "Проживание",
    subtitle:
      "Готовы предоставить жилье — как в роскошном отеле холдинга Adjara Group, так и с подселением в аутентичную грузинскую семью.",
  },
  {
    id: 2,
    title: "Еда",
    subtitle:
      "Знакомство со страной невозможно без традиционной грузинской кухни. В каждый тур включена дегустация национальных блюд.",
  },
  {
    id: 3,
    title: "Трансфер",
    subtitle:
      "Поможем организовать трансфер от и до аэропорта и подготовим комфортное перемещение между городами регионов.",
  },
  {
    id: 4,
    title: "Новые знакоиства",
    subtitle:
      "Туры в группе — объединение единомышленников, из которого когда-то вырос и наш проект.",
  },
];

export const favouritePlaces = [
  {
    id: 1,
    photo: favouritePlace1,
    title: "Тбилиси",
  },
  {
    id: 2,
    photo: favouritePlace2,
    title: "Мцхета",
  },
  {
    id: 3,
    photo: favouritePlace1,
    title: "Тбилиси",
  },
  {
    id: 4,
    photo: favouritePlace2,
    title: "Мцхета",
  },
  {
    id: 5,
    photo: favouritePlace1,
    title: "Тбилиси",
  },
  {
    id: 6,
    photo: favouritePlace2,
    title: "Мцхета",
  },
];

export const reviews = [
  {
    id: 1,
    photo: reviewsPhoto1,
    name: "Луиза",
    date: "23.03.2022",
    text: `Не ошибусь, если скажу, что это был один из самых интересных 
    и самых сложных туров, представленных на сайте. Ежедневно разные 
    локации в нечасто посещаемых местах, глубокие рассказы о культуре, 
    истории, харак тере разных регионов`,
  },
  {
    id: 2,
    photo: reviewsPhoto2,
    name: "Михаил",
    date: "25.04.2022",
    text: `Тур превзошел все ожидания! Нам очень понравились древние монастыри, 
    потрясающие виды, вкусная и доступная еда и очень комфортная, 
    доброжелательная атмосфера.`,
  },
  {
    id: 3,
    photo: reviewsPhoto3,
    name: "Анастасия",
    date: "13.05.2022",
    text: `Насыщенная программа, интересно с исторической точки зрения 
    и очень удобно устроено`,
  },
  {
    id: 4,
    photo: reviewsPhoto1,
    name: "Луиза",
    date: "23.03.2022",
    text: `Не ошибусь, если скажу, что это был один из самых интересных 
    и самых сложных туров, представленных на сайте. Ежедневно разные 
    локации в нечасто посещаемых местах, глубокие рассказы о культуре, 
    истории, харак тере разных регионов`,
  },
  {
    id: 5,
    photo: reviewsPhoto2,
    name: "Михаил",
    date: "25.04.2022",
    text: `Тур превзошел все ожидания! Нам очень понравились древние монастыри, 
    потрясающие виды, вкусная и доступная еда и очень комфортная, 
    доброжелательная атмосфера.`,
  },
  {
    id: 6,
    photo: reviewsPhoto3,
    name: "Анастасия",
    date: "13.05.2022",
    text: `Насыщенная программа, интересно с исторической точки зрения 
    и очень удобно устроено`,
  },
];
