// Contador regressivo
function updateCountdown() {
    // Define a data de expiração (7 dias a partir de agora)
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7);
    
    const now = new Date().getTime();
    const distance = expirationDate.getTime() - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Atualiza os elementos do contador
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    
    // Se o contador expirou
    if (distance < 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
    }
}

// Atualiza o contador a cada segundo
setInterval(updateCountdown, 1000);
updateCountdown(); // Executa imediatamente

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animação de scroll para elementos
function animateOnScroll() {
    const elements = document.querySelectorAll('.feature-card, .benefit-card, .testimonial-card, .offer-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate');
        }
    });
}

// Adiciona classe CSS para animação
const style = document.createElement('style');
style.textContent = `
    .feature-card, .benefit-card, .testimonial-card, .offer-card {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .feature-card.animate, .benefit-card.animate, .testimonial-card.animate, .offer-card.animate {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Listener para scroll
window.addEventListener('scroll', animateOnScroll);

// Executa uma vez no carregamento
window.addEventListener('load', animateOnScroll);

// Funcionalidade dos botões CTA
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Redireciona para o checkout
        window.open('https://pay.cakto.com.br/48byg93_515487', '_blank');
    });
});

// Efeito de hover nos cards
document.querySelectorAll('.feature-card, .benefit-card, .testimonial-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    });
});

// Validação de formulário (se houver)
function validateForm(form) {
    const email = form.querySelector('input[type="email"]');
    if (email && !email.value) {
        alert('Por favor, insira um email válido.');
        return false;
    }
    return true;
}

// Adiciona efeito de loading nos botões
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function() {
        const originalText = this.innerHTML;
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processando...';
        this.disabled = true;
        
        // Simula um delay de processamento
        setTimeout(() => {
            this.innerHTML = originalText;
            this.disabled = false;
        }, 2000);
    });
});

// Função para mostrar/ocultar menu mobile (se necessário)
function toggleMobileMenu() {
    const menu = document.querySelector('.mobile-menu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

// Adiciona classe para dispositivos móveis
function checkMobile() {
    if (window.innerWidth <= 768) {
        document.body.classList.add('mobile');
    } else {
        document.body.classList.remove('mobile');
    }
}

window.addEventListener('resize', checkMobile);
checkMobile(); // Executa no carregamento

// Efeito de parallax suave no hero
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Adiciona classe ativa no menu baseado na seção atual
function updateActiveMenu() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveMenu);

// Função para compartilhar nas redes sociais
function shareOnSocial(platform) {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent('Doces Sem Açúcar - E-book de Receitas Saudáveis');
    const text = encodeURIComponent('Descubra o prazer de doces sem açúcar! E-book com mais de 50 receitas exclusivas.');
    
    let shareUrl = '';
    
    switch(platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
            break;
        case 'whatsapp':
            shareUrl = `https://wa.me/?text=${text}%20${url}`;
            break;
    }
    
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
}

// Adiciona listeners para botões de compartilhamento (se existirem)
document.querySelectorAll('.share-button').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const platform = this.dataset.platform;
        shareOnSocial(platform);
    });
});

// Função para mostrar notificação de sucesso
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Adiciona estilos para a notificação
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4ade80' : '#ef4444'};
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Anima a entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove após 3 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Função para capturar leads (se houver formulário)
function captureLead(email) {
    // Aqui você pode integrar com seu sistema de email marketing
    console.log('Lead capturado:', email);
    showNotification('Obrigado! Você receberá nossas novidades em breve.', 'success');
}

// Adiciona funcionalidade aos formulários de captura
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]');
        if (email && email.value) {
            captureLead(email.value);
            email.value = '';
        }
    });
});

// Função para verificar se o usuário está no final da página
function checkScrollEnd() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
        // Usuário chegou ao final da página
        // Aqui você pode adicionar lógica para mostrar um popup ou CTA final
        console.log('Usuário chegou ao final da página');
    }
}

window.addEventListener('scroll', checkScrollEnd);

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página carregada com sucesso!');
    
    // Adiciona classe de carregamento
    document.body.classList.add('loaded');
    
    // Remove a classe após a animação
    setTimeout(() => {
        document.body.classList.remove('loaded');
    }, 1000);
}); 