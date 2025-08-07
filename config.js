// Configurações do Site - E-book "Doces Sem Açúcar"
// Personalize estas configurações conforme suas necessidades

const CONFIG = {
    // Informações do Produto
    product: {
        name: "Doces Sem Açúcar",
        subtitle: "E-book de Receitas Saudáveis",
        originalPrice: 97.00,
        currentPrice: 47.00,
        currency: "R$",
        discount: 50.00
    },

    // Bônus
    bonuses: [
        {
            name: "Guia Completo de Substitutos",
            value: 37.00,
            description: "Aprenda todos os substitutos saudáveis para o açúcar"
        },
        {
            name: "Lista de Compras Organizada",
            value: 27.00,
            description: "Lista completa de ingredientes organizados por categoria"
        },
        {
            name: "Plano Semanal de Receitas",
            value: 33.00,
            description: "Plano de 7 dias com receitas variadas"
        },
        {
            name: "Vídeos Explicativos",
            value: 30.00,
            description: "Vídeos mostrando o passo a passo das receitas"
        }
    ],

    // Contador Regressivo (em dias)
    countdown: {
        days: 7,
        showSeconds: true
    },

    // Informações de Contato
    contact: {
        email: "contato@docessemacucar.com",
        phone: "(11) 99999-9999",
        website: "https://docessemacucar.com"
    },

    // Redes Sociais
    social: {
        facebook: "https://facebook.com/docessemacucar",
        instagram: "https://instagram.com/docessemacucar",
        youtube: "https://youtube.com/docessemacucar"
    },

    // Configurações de Garantia
    guarantee: {
        days: 7,
        text: "Garantia de 7 dias ou seu dinheiro de volta"
    },

    // URLs de Checkout (substitua pelos seus)
    checkout: {
        primary: "https://pay.cakto.com.br/48byg93_515487",
        secondary: "https://pay.cakto.com.br/48byg93_515487"
    },

    // Configurações de Analytics
    analytics: {
        googleAnalyticsId: "GA_MEASUREMENT_ID", // Substitua pelo seu ID
        facebookPixelId: "FACEBOOK_PIXEL_ID",   // Substitua pelo seu ID
        hotjarId: "HOTJAR_ID"                   // Substitua pelo seu ID
    },

    // Configurações de Email Marketing
    emailMarketing: {
        provider: "mailchimp", // ou "convertkit", "activecampaign", etc.
        apiKey: "YOUR_API_KEY",
        listId: "YOUR_LIST_ID"
    },

    // Configurações de Notificações
    notifications: {
        enabled: true,
        position: "top-right", // "top-right", "top-left", "bottom-right", "bottom-left"
        duration: 3000 // em milissegundos
    },

    // Configurações de Animações
    animations: {
        enabled: true,
        duration: 600, // em milissegundos
        easing: "ease"
    },

    // Configurações de Cores (você pode personalizar)
    colors: {
        primary: "#4ade80",      // Verde
        secondary: "#667eea",    // Azul
        accent: "#764ba2",       // Roxo
        dark: "#1f2937",         // Cinza escuro
        light: "#f8f9fa",        // Cinza claro
        white: "#ffffff",        // Branco
        success: "#4ade80",      // Verde sucesso
        error: "#ef4444"         // Vermelho erro
    },

    // Configurações de Textos (você pode personalizar)
    texts: {
        hero: {
            title: "Descubra o Prazer de Doces Sem Açúcar!",
            subtitle: "Aprenda a fazer sobremesas deliciosas e saudáveis que não comprometem sua dieta. Transforme sua relação com os doces e mantenha-se saudável!"
        },
        cta: {
            primary: "Comprar Agora",
            secondary: "Quero o E-book"
        },
        guarantee: {
            title: "Garantia de 7 Dias",
            description: "Se por qualquer motivo você não ficar satisfeito com o e-book, devolvemos 100% do seu dinheiro em até 7 dias. Sem perguntas, sem complicações!"
        }
    },

    // Configurações de SEO
    seo: {
        title: "Doces Sem Açúcar - E-book de Receitas Saudáveis",
        description: "Descubra o prazer de doces sem açúcar! E-book com mais de 50 receitas exclusivas, saudáveis e deliciosas. Transforme sua relação com os doces!",
        keywords: "doces sem açúcar, receitas saudáveis, sobremesas naturais, e-book receitas, alimentação saudável",
        ogImage: "https://exemplo.com/og-image.jpg"
    }
};

// Exporta as configurações para uso global
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else {
    window.CONFIG = CONFIG;
}

// Função para obter configurações
function getConfig(key) {
    return key.split('.').reduce((obj, k) => obj && obj[k], CONFIG);
}

// Função para atualizar configurações
function updateConfig(key, value) {
    const keys = key.split('.');
    const lastKey = keys.pop();
    const obj = keys.reduce((o, k) => o[k] = o[k] || {}, CONFIG);
    obj[lastKey] = value;
}

// Exemplo de uso:
// console.log(getConfig('product.name')); // "Doces Sem Açúcar"
// updateConfig('product.currentPrice', 39.90); // Atualiza o preço 