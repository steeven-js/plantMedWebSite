import { _mock } from './_mock';
import { _tags } from './assets';

// ----------------------------------------------------------------------

const content = (name) => `
<div className="container">

<p><img alt="alt marketing" src="/assets/images/${name}/${name}_post_02.jpg" /></p>
<br/>

<p>Date d'entrée en vigueur : 05 Février 2024</p>
<br/>
<p>Bienvenue sur notre application mobile dédiée aux plantes médicinales. Nous accordons une grande importance à la confidentialité de vos données. Cette politique de confidentialité vise à vous informer sur la manière dont nous collectons, utilisons, partageons et protégeons vos informations lorsque vous utilisez notre application.</p>
<br/>
<h2>
    1. Collecte des Informations
</h2>
<br/>
<p>Lors de la création d'un compte et de l'utilisation de l'application, nous pouvons collecter les informations suivantes : Informations d'inscription : nom, adresse e-mail, mot de passe. Données de profil : photo de profil (optionnelle) et autres informations que vous choisissez de fournir. Données sur les plantes ajoutées aux favoris et autres interactions avec l'application.</p>
<br/>
<h2>
    2. Utilisation des Informations
</h2>
<br/>
<p>Nous utilisons les informations collectées pour : Fournir, personnaliser et améliorer notre application. Permettre aux utilisateurs de se connecter, d'ajouter des plantes aux favoris et d'utiliser d'autres fonctionnalités de l'application. Communiquer avec les utilisateurs par le biais de notifications relatives à l'application.</p>
<br/>
<h2>
    3. Partage des Informations
</h2>
<br/>
<p>Nous ne partageons pas vos informations personnelles avec des tiers, sauf dans les cas suivants : Avec votre consentement explicite. Pour se conformer à des obligations légales. Pour protéger nos droits, notre confidentialité et notre sécurité, ainsi que ceux de nos utilisateurs.</p>
<br/>
<h2>
    4. Sécurité des Informations
</h2>
<br/>
<p>Nous mettons en place des mesures de sécurité pour protéger vos informations contre tout accès non autorisé, altération, divulgation ou destruction.
</p>
<br/>
<h2>
    5. Accès et Contrôle de vos Informations
</h2>
<br/>
<p>Vous avez le droit d'accéder, de mettre à jour ou de supprimer vos informations personnelles depuis les paramètres de votre compte. Pour toute assistance, veuillez nous contacter à [contact.jsprod972@gmail.com].
</p>
<br/>
<h2>
    6. Cookies et Technologies Similaires
</h2>
<br/>
<p>Nous pouvons utiliser des cookies et des technologies similaires pour améliorer l'expérience utilisateur et analyser les tendances d'utilisation.
</p>
<br/>
<h2>
    7. Modifications de la Politique de Confidentialité
</h2>
<br/>
<p>Nous nous réservons le droit de mettre à jour cette politique de confidentialité à tout moment. Les modifications seront publiées sur cette page avec indication de la date de la dernière mise à jour.
</p>
<br/>
<p>En utilisant notre application, vous consentez à cette politique de confidentialité. Si vous n'acceptez pas ces termes, veuillez ne pas utiliser l'application.
</p>
<br/>
<p>Pour toute question concernant cette politique, veuillez nous contacter à [contact.jsprod972@gmail.com].
</p>
<br/>
</div>`;

const base = (index) => ({
  id: _mock.id(index),
  title: _mock.postTitle(index),
  description: _mock.description(index),
  category: 'Marketing',
  favorited: _mock.boolean(index),
  createdAt: _mock.time(index),
  duration: '8 minutes read',
  tags: _tags.slice(index + 1, index + 2),
  author: {
    name: 'Jacques Steeven',
    role: 'CEO',
    avatarUrl: _mock.image.avatar(index),
    quotes: 'Membre depuis le 08 novembre 2023',
    about:
      'Concepteur développeur d\'application depuis 2022, je suis passionné par le développement d\'applications mobiles et web. Je suis également le créateur de PlantMed.',
  },
});

// ----------------------------------------------------------------------

export const _marketingPosts = [...Array(12)].map((_, index) => ({
  ...base(index),
  content: content('marketing'),
  coverUrl: _mock.image.marketing(index),
  heroUrl: `/assets/images/marketing/marketing_post_hero.jpg`,
}));

export const _travelPosts = [...Array(12)].map((_, index) => ({
  ...base(index),
  content: content('travel'),
  coverUrl: _mock.image.travel(index),
  heroUrl: `/assets/images/travel/travel_post_hero.jpg`,
}));

export const _careerPosts = [...Array(12)].map((_, index) => ({
  ...base(index),
  content: content('career'),
  coverUrl: _mock.image.career(index),
  heroUrl: `/assets/images/career/career_post_hero.jpg`,
}));

export const _coursePosts = [...Array(12)].map((_, index) => ({
  ...base(index),
  content: content('course'),
  coverUrl: _mock.image.course(index),
  heroUrl: `/assets/images/course/course_post_hero.jpg`,
}));
