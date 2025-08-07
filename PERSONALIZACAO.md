# Guia de Personalização - Site de Vendas

Este guia irá ajudá-lo a personalizar o site de vendas do e-book "Doces Sem Açúcar" de acordo com suas necessidades.

## 🎨 Personalização Rápida

### 1. Alterando Informações Básicas

Edite o arquivo `config.js` para alterar as informações principais:

```javascript
// Exemplo de alteração de preço
CONFIG.product.currentPrice = 39.90; // Altera o preço para R$ 39,90

// Exemplo de alteração de contato
CONFIG.contact.email = "seu-email@exemplo.com";
CONFIG.contact.phone = "(11) 88888-8888";
```

### 2. Alterando Cores

No arquivo `styles.css`, você pode alterar as cores principais:

```css
/* Cores principais - substitua pelos seus valores */
:root {
    --primary-color: #4ade80;    /* Verde principal */
    --secondary-color: #667eea;  /* Azul secundário */
    --accent-color: #764ba2;     /* Roxo de destaque */
    --dark-color: #1f2937;       /* Cinza escuro */
    --light-color: #f8f9fa;      /* Cinza claro */
}
```

### 3. Alterando Imagens

Substitua os URLs das imagens no arquivo `index.html`:

```html
<!-- Exemplo de alteração de imagem -->
<img src="sua-imagem.jpg" alt="Descrição da sua imagem">
```

## 📝 Alterações de Conteúdo

### 1. Títulos e Subtítulos

Edite os textos no arquivo `index.html`:

```html
<!-- Banner Principal -->
<h1>Seu Título Personalizado</h1>
<p class="hero-subtitle">Seu subtítulo personalizado</p>
```

### 2. Benefícios

Altere os benefícios na seção correspondente:

```html
<div class="benefit-card">
    <i class="fas fa-heart"></i>
    <h3>Seu Benefício</h3>
    <p>Descrição do seu benefício</p>
</div>
```

### 3. Depoimentos

Substitua os depoimentos por depoimentos reais:

```html
<div class="testimonial-card">
    <div class="stars">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
    </div>
    <p>"Seu depoimento real aqui"</p>
    <div class="testimonial-author">
        <img src="foto-cliente.jpg" alt="Nome do Cliente">
        <div>
            <h4>Nome do Cliente</h4>
            <span>Profissão/Cargo</span>
        </div>
    </div>
</div>
```

## 🔗 Integração com Sistemas

### 1. Checkout

Para integrar com seu sistema de pagamento, edite o arquivo `script.js`:

```javascript
// Substitua esta linha nos botões CTA
window.location.href = 'https://seu-checkout.com';
```

### 2. Email Marketing

Configure a integração no arquivo `config.js`:

```javascript
CONFIG.emailMarketing = {
    provider: "mailchimp", // ou "convertkit", "activecampaign"
    apiKey: "SUA_API_KEY",
    listId: "SEU_LIST_ID"
};
```

### 3. Analytics

Adicione seus códigos de rastreamento no `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>

<!-- Facebook Pixel -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'FACEBOOK_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

## 🎯 Otimizações para Conversão

### 1. A/B Testing

Para testar diferentes versões, crie variações:

```html
<!-- Versão A -->
<h1>Descubra o Prazer de Doces Sem Açúcar!</h1>

<!-- Versão B -->
<h1>50 Receitas de Doces Saudáveis que Você Precisa Conhecer!</h1>
```

### 2. Urgência

Ajuste o contador regressivo no `config.js`:

```javascript
CONFIG.countdown.days = 3; // Reduz para 3 dias para mais urgência
```

### 3. Garantia

Personalize a garantia no `config.js`:

```javascript
CONFIG.guarantee.days = 7; // Garantia de 7 dias
CONFIG.guarantee.text = "Garantia de 7 dias ou seu dinheiro de volta";
```

## 📱 Responsividade

### 1. Teste em Diferentes Dispositivos

Use as ferramentas de desenvolvedor do navegador para testar:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

### 2. Ajustes Mobile

Se necessário, adicione estilos específicos no `styles.css`:

```css
@media (max-width: 768px) {
    .hero-text h1 {
        font-size: 2rem; /* Reduz o tamanho no mobile */
    }
}
```

## 🔧 Funcionalidades Avançadas

### 1. Popup de Captura

Adicione um popup para capturar leads:

```html
<!-- Popup de captura -->
<div id="lead-popup" class="popup">
    <div class="popup-content">
        <h3>Quer receber 3 receitas grátis?</h3>
        <form>
            <input type="email" placeholder="Seu email" required>
            <button type="submit">Quero as receitas!</button>
        </form>
    </div>
</div>
```

### 2. Chat Widget

Integre um chat widget (ex: Tawk.to, Crisp):

```html
<!-- Tawk.to Widget -->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/YOUR_TAWK_ID/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
```

## 📊 Monitoramento

### 1. Métricas Importantes

Monitore estas métricas:
- Taxa de conversão
- Tempo na página
- Taxa de rejeição
- Origem do tráfego
- Dispositivos utilizados

### 2. Ferramentas Recomendadas

- Google Analytics
- Google Tag Manager
- Hotjar (heatmaps)
- Facebook Pixel
- Google Search Console

## 🚀 Deploy

### 1. Hospedagem

Opções recomendadas:
- Netlify (gratuito)
- Vercel (gratuito)
- GitHub Pages (gratuito)
- Hostinger
- GoDaddy

### 2. Domínio

Configure seu domínio personalizado:
- Compre um domínio (.com, .com.br)
- Configure os DNS
- Ative HTTPS

## 📞 Suporte

Para dúvidas sobre personalização:
1. Consulte a documentação
2. Verifique os comentários no código
3. Entre em contato: contato@docessemacucar.com

---

**Dica**: Sempre teste as alterações em um ambiente de desenvolvimento antes de aplicar em produção! 