<<<<<<< HEAD
# Portfolio-Community-Management
Un portfolio pour les recruteur dans le domaine du Community Management
=======
# Portfolio Abdou SEYE

Portfolio personnel d'Abdou SEYE, specialise en community management, creation visuelle, montage video et developpement web.

Le site est construit avec **Next.js 15**, **React 19**, **TypeScript** et l'App Router. Il est disponible en francais et en anglais, avec un formulaire de contact connecte a Resend.

## Fonctionnalites

- Pages francaise (`/`) et anglaise (`/en`)
- Presentation des services, experiences, competences et projets
- Galerie d'images et de videos
- Liens vers Instagram, WhatsApp et YouTube
- Formulaire de contact avec validation et protection anti-robot
- Design responsive pour mobile, tablette et ordinateur
- Deploiement compatible avec Vercel

## Technologies

- Next.js 15 et React 19
- TypeScript
- CSS natif avec variables de theme
- React Icons
- Resend pour l'envoi des messages

## Installation locale

Prerequis : Node.js 20 ou une version plus recente.

```bash
npm install
```

Copier le fichier d'environnement :

```bash
cp .env.example .env.local
```

Sous PowerShell, utiliser :

```powershell
Copy-Item .env.example .env.local
```

Renseigner ensuite les variables dans `.env.local`, puis lancer le serveur :

```bash
npm run dev
```

Le site est disponible sur <http://localhost:3000>.

## Variables d'environnement

```env
RESEND_API_KEY=cle_api_resend
CONTACT_TO=bayeseyedarou@gmail.com
CONTACT_FROM="Portfolio <onboarding@resend.dev>"
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

`RESEND_API_KEY` est obligatoire pour le formulaire de contact. Avec `onboarding@resend.dev`, Resend autorise l'envoi vers l'adresse du compte Resend. Pour utiliser un autre expéditeur, verifier un domaine dans Resend et remplacer `CONTACT_FROM`.

## Commandes disponibles

```bash
npm run dev       # serveur de developpement
npm run build     # compilation de production
npm run start     # demarre la version compilee
```

Avant un deploiement, verifier la compilation :

```bash
npm run build
```

## Deploiement sur Vercel

1. Creer un depot GitHub et y envoyer le projet :

	 ```bash
	 git init
	 git add .
	 git commit -m "Initial portfolio"
	 git branch -M main
	 git remote add origin https://github.com/UTILISATEUR/NOM-DU-REPO.git
	 git push -u origin main
	 ```

2. Ouvrir [vercel.com](https://vercel.com) et choisir **Add New Project**.
3. Importer le depot GitHub.
4. Ajouter les variables `RESEND_API_KEY`, `CONTACT_TO`, `CONTACT_FROM` et `NEXT_PUBLIC_SITE_URL` dans **Environment Variables**.
5. Cliquer sur **Deploy**.

Vercel detecte automatiquement Next.js. Chaque nouveau `git push` declenche ensuite un redeploiement.

## Organisation du projet

```text
src/
	app/                 Routes Next.js, layouts et styles globaux
	components/          Composants de la page et formulaire de contact
	data/site.ts         Coordonnees, liens, experiences et projets
	i18n/                Textes francais et anglais
public/
	images/              Images et logos
	videos/              Videos locales
```

## Modifier le contenu

- Textes francais : `src/i18n/fr.ts`
- Textes anglais : `src/i18n/en.ts`
- Coordonnees, liens et experiences : `src/data/site.ts`
- Images : `public/images`
- Videos : `public/videos`
- Styles : `src/app/globals.css`
- Structure de la page : `src/components/Home.tsx`

Pour ajouter une organisation, ajouter son entree dans `experiences`, son logo dans `public/images/logos`, puis ses traductions dans `exp.items` de `fr.ts` et `en.ts`.
>>>>>>> c3d6a77 (premier mvp)
