import { _mock } from './_mock';
import { _tags } from './assets';

// ----------------------------------------------------------------------

const content = (name) => `
<div>

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

const content2 = (name) => `
<div">

<p><img alt="alt marketing" src="/assets/images/${name}/${name}_post_02.jpg" /></p>
<br/>

<h1>
    Politique de Confidentialité
</h1>
<br/>
<p>Date de prise d’effet : 5 février 2024</p>
<br/>
<h4>Nous nous soucions de vos données personnelles, c'est pourquoi nous avons préparé cette Politique de confidentialité pour expliquer comment nous les collectons, les utilisons et les partageons.</h4>
<br/>
<h2>
    1. GÉNÉRAL
</h2>
<br/>
<p>La présente Politique de confidentialité (« Politique de confidentialité ») détaille les données personnelles que Ici Japon co.,ltd (« Ici Japon », « nous », « notre » ou « nos ») reçoit à votre sujet, la manière dont nous les traitons et vos droits et obligations en ce qui concerne vos données personnelles. Ici Japon co.,ltd, société sous la forme juridique KABUSHIKI GAISHA est le contrôleur des données en conformité du Règlement général sur la protection des données (« RGPD ») et de toute législation locale pertinente (« Lois sur la protection des données »).</p>
<br/>
<p>En utilisant ou en accédant au Service, vous acceptez les termes de la présente Politique de confidentialité. Nous pouvons mettre à jour notre politique de confidentialité afin de refléter les modifications apportées à nos pratiques en matière d'information. Si nous le faisons et que les changements sont importants, nous publierons un avis indiquant que nous avons apporté des modifications à cette politique de confidentialité sur le site Web pendant au moins 7 jours avant que les changements ne soient effectués, et nous indiquerons la date de la dernière révision de ces conditions au bas de la politique de confidentialité. Toute révision de la présente politique de confidentialité entrera en vigueur à la fin de cette période de 7 jours.</p>
<br/>
<p>Nous nous engageons à respecter la confidentialité et la sécurité des informations personnelles que nous recevons et à traiter de manière appropriée et rapide les demandes et les instructions concernant les données personnelles, en conformité aux exigences légales applicables.</p>
<br/>
<h4>Définitions :</h4>
<br/>
<ul>
    <li>- Service : il s’agit de notre application mobile dénommée PlantMed</li>
    <li>- Données/informations personnelles : elles désignent des données concernant un individu vivant qui peut être identifié ou identifiable à partir de ces données.</li>
    <li>- Cookies : les cookies sont des fichiers enregistrés sur votre dispositif de lecture de notre application.</li>
</ul>
<br/>
<h2>
    2. INFORMATIONS RECUEILLIES
</h2>
<br/>
<p>La présente politique de confidentialité explique comment nous collectons, utilisons et partageons vosdonnées personnelles.</p>
<br/>
<h4>1 - Données à caractère personnel</h4>
<br/>
<p>Concernant les informations que vous fournissez, lorsque vous utilisez nos services, au cours du processus d’inscription, il est possible que vous nous fournissiez votre nom, votre ou une adresse électronique, et votre âge et/ou date de naissance, un numéro de téléphone. Il est également possible que vous nous fournissiez vos informations de transaction de paiement si vous optez pour nos services payants que nous proposons en plus.</p>
<br/>
<p>Les données personnelles que vous nous fournissez peuvent donc comprendre, de façon non exhaustive :</p>
<br/>
<ul>
    <li>- L’utilisation de formulaires de demande de renseignements et d’inscription.</li>
    <li>- Le processus d'achat lorsque vous décidez d’achetez l'un de nos produits et/ou services.
    </li>
    <li>- La fourniture de vos coordonnées, en ligne ou hors ligne.</li>
    <li>- Les éléments de vos données que nous collectons peuvent inclure : adresse IP et informations sur le navigateur, les données d'études de marché telles que les habitudes d'utilisation des clients. Autrement-dit, il est possible que nous vous demandions de nous fournir certaines données personnelles nominatives afin de pouvoir vous contacter ou vous identifier.</li>
</ul>
<br/>
<h4>2 - Données d’utilisation et d’activité</h4>
<br/>
<p>Concernant les données d’utilisation et d’activité, lorsque vous utilisez nos services, vous soumettez des informations et du contenu à votre profil. Il se peut que nous recueillions automatiquement certaines informations, de manière non limitative et non exhaustive. Nous générerons également des données sur votre utilisation de nos services, y compris votre engagement dans des activités éducatives sur le service, ou votre envoi de messages et la transmission d'informations à d'autres utilisateurs. Nous collectons également des données techniques sur la manière dont vous interagissez avec nos services (pour plus d'informations, voir Cookies). Nous pouvons enregistrer, notamment, la liste n’est pas limitative :</p>
<br/>
<ul>
    <li>- Modèles d’utilisation</li>
    <li>- Mouvements de la souris, clics, défilement</li>
    <li>- Défilement</li>
    <li>- Saisie</li>
    <li>- Spécifications techniques</li>
    <li>- Navigateur et navigation</li>
    <li>- Type d’appareil</li>
    <li>- Système d’exploitation</li>
    <li>- Taille du viseur</li>
    <li>- Erreurs de script</li>
    <li>- Adresse IP</li>
    <li>- Navigation</li>
    <li>- Pages visitées</li>
    <li>- Référents</li>
    <li>- Paramètres URL</li>
    <li>- Durée de la session</li>
    <li>- Activité d’apprentissage</li>
    <li>- Progression de la session</li>
    <li>- Réponses</li>
</ul>
<br/>
<p>Il est possible que vous puissiez réaliser des défis et/ou exercices oratoires, dans ce cas : il se peut que pour certaines leçons, vous devez parler dans l'application. Pour reconnaître la parole, vos données audio peuvent être envoyées à un fournisseur tiers. Nous pouvons vous demander une autorisation à collecter et à analyser vos données vocales pour nous aider à comprendre l'efficacité de nos leçons et à améliorer le produit/nos services. Si vous choisissez de ne pas partager votre audio avec nous, ou si nous ne vous l'avons pas encore demandé, certaines fonctionnalités seront probablement inactives.</p>
<br/>
<h4>3 - Recherche et développement de nos services</h4>
<br/>
<p>Nous pouvons vous contacter pour participer à des activités de recherche sur les produits. Il peut s'agir d'enquêtes, d'entretiens et d'autres types de sessions de feedback. Lorsque vous participez à ces activités de recherche, les informations que vous fournissez seront utilisées pour tester, améliorer et développer nos produits. Nous enregistrerons les transcriptions vidéo, audio et textuelles de ce retour d'information ainsi que toute information de contact supplémentaire que vous fournirez et conserverons ces données pendant un an. Vous pouvez à tout moment refuser d'être contacté pour des activités de recherche.</p>
<br/>
<h2>
    3. COOKIES
</h2>
<br/>
<p>Nous pouvons utiliser des cookies et d'autres dispositifs de suivi afin de personnaliser votre utilisation de notre service. En effet, nous pouvons stocker certaines informations de votre navigateur à l'aide de « cookies ». Pour donner une breve définition, un cookie est un élément de données stocké sur l’ordinateur, potentiellement sur le mobile, de l'utilisateur lié à des informations sur celui-ci. Nous pouvons utiliser des cookies d'identification de session pour confirmer que les utilisateurs sont connectés. Si vous ne souhaitez pas que des informations soient collectées par le biais des cookies, il existe une procédure simple dans la plupart des navigateurs qui vous permet de refuser ou d'accepter la fonction de cookies, dans le cas où vous passez par navigateur si nous vous en offrons la possibilité. Autrement-dit, si vous ne souhaitez pas nous aider à apprendre comment améliorer notre site, nos produits, nos offres et notre stratégie de marketing, vous pouvez ne pas accepter les cookies. Toutefois, les cookies peuvent être nécessaires pour vous fournir certaines fonctions disponibles. Nous pouvons avoir recours à des cookies ainsi qu’à d'autres technologies de suivi similaires pour effectuer un suivi des activités effectuées dans nos services. D'autres technologies de suivi telles que les pixels, les balises et les scripts peuvent également être utilisées pour recueillir et suivre des informations et toujours dans le but d'améliorer et d'analyser notre service.</p>
<br/>
<p>Ces informations peuvent inclure des informations relatives à votre utilisation de nos sites/applications et services en général. Aussi, des informations sur votre ordinateur, comme, par exemple, l'adresse IP, le type de navigateur, des données démographiques, si vous le souhaitez, des informations sur vos activités. La liste n’est pas exhaustive. Nous n'utilisons aucun dispositif de suivi pour suivre votre utilisation d'Internet sur d'autres sites non exploités par nous. Lorsque vous utilisez notre application mobile, nous recueillons votre type d'appareil, l'identifiant de votre appareil et votre adresse IP.</p>
<br/>
<p>Pour vous donner un exemple, voici une liste non limitative, nous utilisons les informations provenant des cookies à des fins qui peuvent inclure :</p>
<br/>
<ul>
    <li>- L’identification d’utilisateurs récurrents et les personnes inscrites.</li>
    <li>- Vous permettre de vous déplacer plus facilement sur le support qui met à votre disposition nos services.</li>
    <li>- Suivre votre utilisation de nos services afin de mieux développer nos sites en fonction de vos exigences.</li>
    <li>- Établir un profil démographique.</li>
</ul>
<br/>
<h2>
    4. UTILISATIONS DES INFORMATIONS PERSONNELLES
</h2>
<br/>
<p>Nous pouvons occasionnellement vous envoyer des annonces relatives aux services et aux modifications des produits dans le cadre du fonctionnement général du service que nous proposons. Nous traitons vos données pour vous fournir nos services et vous offrir des fonctions personnalisées, pour comprendre et améliorer notre service et pour assurer la sécurité de celui-ci.
</p>
<br/>
<p>Nous pouvons utiliser ou partager les données anonymes recueillies par le biais de nos services, y compris les données d'activité, sans limitation. En tant qu'entreprise, il est essentiel que nous exécutions notre contrat avec vous avec le meilleur service possible, et il est dans notre intérêt légitime d'exécuter ces fonctions de traitement et d'activer les e-mails de service par défaut pour garder vos données sécurisées et fournir notre service. Vous pouvez choisir de ne pas recevoir les courriels de service non essentiels à tout moment. Nous pouvons également utiliser vos coordonnées pour vous envoyer des notifications concernant les nouveaux services, les offres et les promotions proposés par notre Entreprise si vous consentez explicitement à recevoir ces communications.
</p>
<br/>
<p>Autrement-dit, nous utilisons ces informations pour vous fournir une assistance, vous envoyer des notifications essentielles, faire appliquer nos conditions et politiques, communiquer avec vous, administrer nos services et pour des opérations internes, y compris le dépannage, l'analyse des données, les tests, la recherche, les statistiques et les enquêtes.
</p>
<br/>
<p>Voici une liste non exhaustive des données que nous recueillions à des fins diverses qui sont, notamment, utilisées pour :
</p>
<br/>
<ul>
    <li>- Fournir, assurer et améliorer notre service</li>
    <li>- Partager les changements apportés à notre service</li>
    <li>- Utiliser les fonctions interactives de notre service</li>
    <li>- Contrôler l'utilisation de notre service et pour détecter et prévenir les problèmes techniques</li>
</ul>
<br/>
<h2>
    5. DIVULGATION DES INFORMATIONS PERSONNELLES
</h2>
<br/>
<p>Nous partageons vos données personnelles uniquement lorsque cela est nécessaire pour offrir ou pouvoir continuer d’offrir nos services, notamment lorsque cela est requis légalement ou autorisé par vous. Nous pouvons fournir des données personnelles à des fournisseurs d’hébergement, des fournisseurs de moteurs de recherche, des fournisseurs d'analyses et des fournisseurs d'assistance.
</p>
<br/>
<p>Ces processeurs de traitement des données nous aident à vous fournir notre service. Par exemple, nous pouvons partager vos informations afin de détecter où et comment vous avez rencontré un bug lors de l'utilisation de notre application mobile. Dans le cadre de ces opérations, nos prestataires de services auront accès aux données personnelles pendant une durée limitée. Lorsque nous faisons appel à des prestataires de services pour traiter des données personnelles, nous mettons en place des protections contractuelles limitant l'utilisation de ces données personnelles à la fourniture de nos services. Nous partagerons les données agrégées ou anonymes recueillies par le biais du service, y compris les données d'activité, à des fins telles que la compréhension ou l'amélioration du service.
</p>
<br/>
<p>Aussi, nous serons tenus d'accéder aux données personnelles et de les divulguer en réponse à des demandes légitimes, telles que des citations à comparaître ou des ordonnances judiciaires, ou pour toute mise en conformité avec les lois applicables. En outre, nous accéderons et partagerons des données de compte ou d'autres données personnelles si nous estimons que cela est nécessaire pour nous conformer à la loi, pour protéger nos intérêts ou nos biens, pour prévenir la fraude ou toute autre activité illégale perpétrée par le biais du service ou en utilisant le nom PlantMed, ou pour prévenir un dommage imminent. Cela comprendra l'accès aux données personnelles et leur partage avec d'autres sociétés, avocats, agents ou agences gouvernementales. Nous pouvons communiquer vos informations personnelles si nous estimons, de bonne foi, que cela est nécessaire pour s'acquitter d'une obligation légale, ou encore pour protéger et défendre les droits ou les biens de notre Entreprise, pour prévenir d'éventuels actes répréhensibles ou enquêter sur de tels actes dans le cadre de nos services, pour assurer la sécurité personnelle des utilisateurs de nos services ou du public, et bien sur pour se protéger contre la responsabilité civile. Cette liste n’est pas exhaustive.
</p>
<br/>
<p>Vous serez toujours informé lorsque des informations personnelles vous concernant seront partagées avec des tiers et vous aurez la possibilité de choisir de ne pas nous laisser partager ces informations. En sachant que nous utilisons également des informations sous forme anonymes et agrégées (de sorte qu'aucun utilisateur individuel ne soit identifié) : afin de pouvoir notamment établir des profils marketing, pour aider au développement stratégique, pour vérifier l'utilisation de nos services.
</p>
<br/>
<h2>
    6. TRANSFERT DES DONNÉES
</h2>
<br/>
<p>Internet est un environnement mondial. L'utilisation d'Internet pour collecter et traiter des données personnelles implique nécessairement la transmission de données sur une base internationale. Les informations vous concernant, notamment vos données à caractère personnel, peuvent être transférées de votre région, province, pays, ou autre division territoriale vers des ordinateurs/stockages situés à un endroit où la législation relative à la protection des données diffère de celle du territoire où vous résidez. Vos données ne seront transférées vers aucune organisation, stockages, ni aucun pays à moins que des contrôles adéquats ne soient en place, notamment en ce qui concerne la sécurité de vos données et d'autres données personnelles.
</p>
<br/>
<p>Si la propriété de la totalité ou de la quasi-totalité de notre Entreprise, ou des unités commerciales individuelles ou des actifs nous appartenant qui sont liés au service, devait changer, vos données personnelles seraient transférées au nouveau propriétaire. Dans le cadre d'un tel transfert d'informations, vos données personnelles resteront soumises à la présente section.
</p>
<br/>
<p>Nous prendrons toutes les mesures raisonnablement nécessaires pour faire en sorte que vos données soient traitées de manière sécurisée et conformément à la présente Politique de Confidentialité. En acceptant la présente Politique de Confidentialité puis en soumettant ces informations, vous consentez à ce transfert.
</p>
<br/>
<h2>
    7. POLITIQUE DE SÉCURITÉ
</h2>
<br/>
<p>Notre Entreprise a mis en place des mesures que nous jugeons appropriées pour contribuer à garantir la protection des données de nos utilisateurs contre l'accès ou l'utilisation non autorisés, l'altération, la destruction illégale ou accidentelle et la perte accidentelle.
</p>
<br/>
<p>Toutefois, avec des ressources suffisantes, un attaquant déterminé pourrait déjouer ces mesures de protection et, par conséquent, avoir accès aux données que nous cherchons à protéger. Bien que nous fassions des efforts raisonnables pour protéger vos informations personnelles contre la perte, l'utilisation abusive ou l'altération par des tiers, vous devez savoir que la transmission d'informations sur Internet comporte toujours un certain risque. Il existe notamment un risque que des voleurs trouvent le moyen de déjouer nos systèmes de sécurité. La sécurité de vos données est importante pour nous mais aucune méthode de transmission de données par Internet est totalement sûre.
</p>
<br/>
<h2>
    8. DROITS DES PERSONNES CONCERNÉES ET CONSERVATION DES DONNÉES
</h2>
<br/>
<p>En ce qui concerne les données personnelles que nous détenons à votre sujet, vous disposez notamment des droits suivants, sauf disposition contraire de la législation locale
</p>
<br/>
<ul>
    <li>- Demander l'accès aux données personnelles que nous détenons à votre sujet, ou leur effacement.</li>
    <li>- Demander de restreindre le traitement des données personnelles que nous détenons à votre sujet.</li>
    <li>- S'opposer à ce que nous traitions les données personnelles vous concernant.</li>
    <li>- Lorsque vous nous avez donné votre consentement pour traiter vos données personnelles, vous avez le droit de retirer ce consentement à tout moment.</li>
    <li>- Exporter les données personnelles que vous nous avez fournies dans un format qui peut être transféré électriquement à un tiers.</li>
    <li>- Supprimer votre compte.</li>
</ul>
<br/>
<p>Nous conserverons vos données jusqu'à la suppression de votre compte, après quoi nous conserverons les données anonymes recueillies par le biais de nos services qui peuvent être utilisées par nous et partagées avec des tiers de quelque manière que ce soit.
</p>
<br/>
<p>Veuillez noter que certains de ces droits ne sont pas absolus. Dans certains cas, nous pouvons refuser une demande d'exercice de certains droits si le fait de nous y conformer signifie que nous ne sommes plus en mesure de respecter notre obligation contractuelle de vous fournir certains produits et/ou services. Nous vous tiendrons informés des mesures que nous pouvons prendre lorsque vous faites votre demande.
</p>
<br/>
<p>Vous pouvez également avoir le droit de déposer une plainte auprès de l'autorité de surveillance compétente. Si vous avez besoin d'une assistance supplémentaire concernant vos droits, veuillez nous contacter et nous examinerons votre demande conformément à la loi applicable. Dans certains cas, notre capacité à faire respecter ces droits pour vous peut dépendre de nos obligations de traiter les informations personnelles pour des raisons de sécurité, de sûreté, de prévention de la fraude, de conformité aux exigences réglementaires ou légales, ou parce que le traitement est nécessaire pour fournir les services que vous avez demandés. Si tel est le cas, nous vous informerons des détails spécifiques en réponse à votre demande.
</p>
<br/>
<h2>
    9. PRESTATAIRES DE SERVICES
</h2>
<br/>
<p>Voir la section 5 « Divulgations des informations personnelles ». Pour rappel, nous pouvons fournir des données personnelles à des fournisseurs d’hébergement, des fournisseurs de moteurs de recherche, des fournisseurs d'analyses et des fournisseurs d’assistance. Ces acteurs nous aident à vous fournir notre service. Par exemple, nous pouvons partager vos informations afin de détecter où et comment vous avez rencontré un bug lors de l'utilisation de notre application mobile. Dans le cadre de ces opérations, nos prestataires de services auront accès aux données personnelles pendant une durée limitée. Lorsque nous faisons appel à des prestataires de services pour traiter des données personnelles, nous mettons en place des protections contractuelles limitant l'utilisation de ces données personnelles à la fourniture de nos services. Nous partagerons les données agrégées ou anonymes recueillies par le biais du service, y compris les données d'activité, à des fins telles que la compréhension ou l'amélioration du service. Nous pouvons faire appel à des prestataires tiers pour faciliter la prestation de nos services, assurer le service, assurer des services liés à notre service ou nous aider à analyser la façon dont notre service est utilisé. Ces tiers n'ont accès à vos données que pour ces raisons, ils ne peuvent pas les communiquer ou les utiliser à quelle qu'autre fin.
</p>
<br/>
<h2>
    10. ENFANTS N’AYANT PAS L’AGE DU CONSENTEMENT NUMÉRIQUE
</h2>
<br/>
<p>Nous ne collectons pas intentionnellement d'informations sur les enfants qui n’ont pas l’âge du consentement numérique, fixé à 13 ans en France à la date de rédaction de cette présente politique de Confidentialité. Nous nous engageons à supprimer toutes les données relatives à ces utilisateurs lorsqu'un parent ou un tuteur nous a informé que de telles données ont été obtenues. Aussi, si nous apprenons que nous avons recueilli des données personnelles auprès d’enfants, sans vérifier s'il y a consentement parental, nous ferons le nécessaire pour supprimer ces informations.
</p>
<br/>
<h2>
    11. CONTENU DE L’APPLICATION
</h2>
<br/>
<p>Toutes les marques, photographies, textes, commentaires, illustrations, images animées ou non, séquences vidéo, sons, ainsi que toutes les applications informatiques qui pourraient être utilisées pour faire fonctionner l’application PlantMed, et plus généralement tous les éléments reproduits ou utilisés sur l'application sont protégés par les lois en vigueur au titre de la propriété intellectuelle. Ils sont la propriété pleine et entière de l’éditeur ou de ses partenaires.
</p>
<br/>
<p>Toute reproduction, représentation, utilisation ou adaptation, sous quelque forme que ce soit, de tout ou partie de ces éléments, y compris les applications informatiques, sans l’accord préalable et écrit de l’éditeur, sont strictement interdites. Le fait pour l’éditeur de ne pas engager de procédure dès la prise de connaissance de ces utilisations non autorisées ne vaut pas acceptation desdites utilisations et renonciation aux poursuites. Les photographies de produits et services, accompagnant leur description, sont contractuelles avec l’entreprise. Les photos sont donc soumises aux droits d’auteurs. L’utilisation sans droits de ces photographies est passible d’un recours envers la loi.
</p>
<br/>
<h2>
    12. RESPONSABILITÉS DE L’ÉDITEUR ET DU RESPONSABLE DE TRAITEMENT
</h2>
<br/>
<p>La responsabilité de l’éditeur ne peut être engagée en cas de défaillance, panne, difficulté ou interruption de fonctionnement, empêchant l’accès à l'application ou à une de ses fonctionnalités. Le matériel de connexion à l'application que vous utilisez est sous votre entière responsabilité. Vous devez prendre toutes les mesures appropriées pour protéger votre matériel et vos propres données notamment d’attaques virales par Internet.
</p>
<br/>
<p>Vous êtes par ailleurs seul responsable des sites, applications et données que vous consultez. L’éditeur ne pourra être tenu responsable en cas de poursuites judiciaires à votre encontre, notamment : du fait de l’usage de l'application ou de tout service accessible via Internet, du fait du non-respect par vous de la présente Politique de confidentialité. L’éditeur n’est pas responsable des dommages causés à vous-même, à des tiers et/ou à votre équipement du fait de votre connexion ou de votre utilisation de l'application.
</p>
<br/>
<h2>
    13. LOI APPLICABLE
</h2>
<br/>
<p>La présente Politique de Confidentialité est régie par la loi française et soumise à la compétence des tribunaux du siège social de l’éditeur, sous réserve d’une attribution de compétence spécifique découlant d’un texte de loi ou réglementaire particulier.
</p>
<br/>
<h2>
    14. MODIFICATION DE LA PRÉSENTE POLITIQUE DE CONFIDENTIALITÉ
</h2>
<br/>
<p>Cette présente Politique de Confidentialité entre en vigueur le 5 février 2024. Nous pouvons apporter des modifications à cette Politique de Confidentialité afin de refléter les changements apportés à nos pratiques de confidentialité conformément aux législation, aux meilleures pratiques ou aux améliorations apportées à nos services. Nous vous informerons des changements importants apportés à la Politique de Confidentialité en envoyant une notification à l'adresse électronique que vous nous avez fournie ou en plaçant un avis bien visible sur le support de nos services. Nous vous conseillons de consulter la présente Politique de Confidentialité périodiquement pour prendre connaissance de toute modification. Les modifications apportées à la présente Politique de Confidentialité prennent effet lorsqu'elles sont publiées sur cette page.
</p>
<br/>
<p>Dernière révision : 5 février 2024</p>
<br/>
<h2>
    15. NOUS CONTACTER
</h2>

<p>Pour toute demande relative à la confidentialité des données et pour toute question concernant la présente Politique de Confidentialité, veuillez nous contacter à l’adresse : contact.jsprod972@gmail.com
</p>
</div>`;

const base2 = (index) => ({
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

export const _careerPosts2 = [...Array(12)].map((_, index) => ({
  ...base2(index),
  content2: content2('career'),
  coverUrl: _mock.image.career(index),
  heroUrl: `/assets/images/career/career_post_hero.jpg`,
}));

export const _coursePosts = [...Array(12)].map((_, index) => ({
  ...base(index),
  content: content('course'),
  coverUrl: _mock.image.course(index),
  heroUrl: `/assets/images/course/course_post_hero.jpg`,
}));
