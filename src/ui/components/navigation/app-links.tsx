import { AppLinks, FooterLinks } from "@/types/app-links";

const footerApplicationLinks: AppLinks[] = [
    {
        label: "Accueil",
        baseUrl: "/",
        type: "internal"
    },
    {
        label: "Projets",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Coders Monkeys",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Formation",
        baseUrl: "https://youtube.com/@remotemonkey",
        type: "external"
    }
]

const footerUsersLinks: AppLinks[] = [
    {
        label: "Mon espace",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Connexion",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Inscription",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Mot de passe oublié",
        baseUrl: "/#",
        type: "internal"
    }
]

const footerInformationLinks: AppLinks[] = [
    {
        label: "CGU",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Confidentialité",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "A propos",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Contact",
        baseUrl: "/#",
        type: "external"
    }
]

const footerSocialNetworksLinks: AppLinks[] = [
    {
        label: "Youtube",
        baseUrl: "https://youtube.com/@remotemonkey",
        type: "external"
    },
    {
        label: "Linkdin",
        baseUrl: "https://www.linkedin.com/in/arnaud-desportes-71999446/",
        type: "external"
    },
    {
        label: "Slack",
        baseUrl: "https://coders-monkeys.slack.com",
        type: "external"
    }
]

export const footerLinks = [
    {
        label: "App",
        links: footerApplicationLinks
    },
    {
        label: "Utilisateurs",
        links: footerUsersLinks
    },
    {
        label: "Informations",
        links: footerInformationLinks
    },
    {
        label: "Réseaux Sociaux",
        links: footerSocialNetworksLinks
    }
]