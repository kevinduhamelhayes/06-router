import { Link } from '../components/Link';

const i18n = {
  es: {
    title: 'Sobre nosotros',
    button: 'Ir a la home',
    description: '¡Hola! Me llamo Kevin Duhamel Hayes y estoy creando un clon de React Router.'
  },
  en: {
    title: 'About us',
    button: 'Go to home page',
    description: 'Hi! My name is Kevin Duhamel Hayes and I am creating a clone of React Router.'
  }
};

const useI18n = (lang) => {
  return i18n[lang] || i18n.en;
};

export default function AboutPage ({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'es');

  return (
    <>
      <h1>{i18n.title}</h1>
      <div>
        <img src='https://media.licdn.com/dms/image/D4D03AQEL_XRbbjtYfg/profile-displayphoto-shrink_200_200/0/1696117331991?e=1707350400&v=beta&t=aV7cb97_n0wfnf06QVHW9Fpmjn6fAg_1YzTfxkBe5Uk' alt='Foto de kevin duhamel hayes' />
        <p>{i18n.description}</p>
      </div>
      <Link to='/'>{i18n.button}</Link>
    </>
  );
}
