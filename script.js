// Timer de 15 minutos
function updatePromoTimer() {
    const now = new Date().getTime();
    const endTime = new Date(now + 15 * 60 * 1000); // 15 minutos a partir de agora
    
    const timer = setInterval(() => {
        const currentTime = new Date().getTime();
        const distance = endTime - currentTime;
        
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Atualiza os elementos do timer
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');
        
        if (minutesElement) minutesElement.textContent = minutes.toString().padStart(2, '0');
        if (secondsElement) secondsElement.textContent = seconds.toString().padStart(2, '0');
        
        // Se o timer expirou
        if (distance < 0) {
            clearInterval(timer);
            if (minutesElement) minutesElement.textContent = '00';
            if (secondsElement) secondsElement.textContent = '00';
            
            // Mostra mensagem de promoção encerrada
            const timerSection = document.querySelector('.promo-timer-nav');
            if (timerSection) {
                timerSection.innerHTML = `
                    <div class="container">
                        <div class="timer-nav-content">
                            <div class="timer-nav-left">
                                <i class="fas fa-clock"></i>
                                <span class="timer-text">⏰ PROMOÇÃO ENCERRADA!</span>
                            </div>
                            <div class="timer-nav-center">
                                <div class="countdown-nav">
                                    <span>00</span>
                                    <span class="separator">:</span>
                                    <span>00</span>
                                </div>
                            </div>
                            <div class="timer-nav-right">
                                <button class="cta-button timer-btn" onclick="window.open('https://pay.cakto.com.br/48byg93_515487', '_blank')">
                                    <i class="fas fa-info-circle"></i>
                                    SABER MAIS
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            }
        }
    }, 1000);
}

// Inicializa o timer quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    updatePromoTimer();
});

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
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    if (daysElement) daysElement.textContent = days.toString().padStart(2, '0');
    if (hoursElement) hoursElement.textContent = hours.toString().padStart(2, '0');
    if (minutesElement) minutesElement.textContent = minutes.toString().padStart(2, '0');
    if (secondsElement) secondsElement.textContent = seconds.toString().padStart(2, '0');
    
    // Se o contador expirou
    if (distance < 0) {
        if (daysElement) daysElement.textContent = '00';
        if (hoursElement) hoursElement.textContent = '00';
        if (minutesElement) minutesElement.textContent = '00';
        if (secondsElement) secondsElement.textContent = '00';
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

// Funcionalidade do Carrossel de Doces Fit
let currentSlide = 0;
let slides, track, slideWidth;
let carouselInterval;

function initializeCarousel() {
    slides = document.querySelectorAll('.carousel-slide');
    track = document.querySelector('.carousel-track');
    
    if (track && slides.length > 0) {
        // Calcula a largura do slide baseada no tamanho da tela
        const isMobile = window.innerWidth <= 768;
        slideWidth = isMobile ? 270 : 320; // Largura do slide + gap
        
        updateCarouselButtons();
        
        // Auto-play do carrossel
        carouselInterval = setInterval(() => {
            const totalSlides = slides.length;
            const maxSlides = Math.floor(track.offsetWidth / slideWidth);
            const maxIndex = Math.max(0, totalSlides - maxSlides);
            
            if (currentSlide >= maxIndex) {
                currentSlide = 0;
            } else {
                currentSlide++;
            }
            
            const translateX = -currentSlide * slideWidth;
            track.style.transform = `translateX(${translateX}px)`;
            updateCarouselButtons();
        }, 3000); // Muda a cada 3 segundos
    }
}

function moveCarousel(direction) {
    if (!track || !slides.length) return;
    
    // Para o auto-play temporariamente
    if (carouselInterval) {
        clearInterval(carouselInterval);
    }
    
    const totalSlides = slides.length;
    const maxSlides = Math.floor(track.offsetWidth / slideWidth);
    const maxIndex = Math.max(0, totalSlides - maxSlides);
    
    currentSlide += direction;
    
    // Limita o índice
    if (currentSlide < 0) {
        currentSlide = 0;
    } else if (currentSlide > maxIndex) {
        currentSlide = maxIndex;
    }
    
    // Atualiza a posição do carrossel
    const translateX = -currentSlide * slideWidth;
    track.style.transform = `translateX(${translateX}px)`;
    
    // Atualiza os botões
    updateCarouselButtons();
    
    // Reinicia o auto-play após 5 segundos
    setTimeout(() => {
        carouselInterval = setInterval(() => {
            const totalSlides = slides.length;
            const maxSlides = Math.floor(track.offsetWidth / slideWidth);
            const maxIndex = Math.max(0, totalSlides - maxSlides);
            
            if (currentSlide >= maxIndex) {
                currentSlide = 0;
            } else {
                currentSlide++;
            }
            
            const translateX = -currentSlide * slideWidth;
            track.style.transform = `translateX(${translateX}px)`;
            updateCarouselButtons();
        }, 3000);
    }, 5000);
}

function updateCarouselButtons() {
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    
    if (prevBtn) {
        prevBtn.disabled = currentSlide === 0;
    }
    
    if (nextBtn) {
        const totalSlides = slides.length;
        const maxSlides = Math.floor(track?.offsetWidth / slideWidth) || 3;
        const maxIndex = Math.max(0, totalSlides - maxSlides);
        nextBtn.disabled = currentSlide >= maxIndex;
    }
}

// Inicializa o carrossel quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    initializeCarousel();
});

// Recalcula o carrossel quando a janela é redimensionada
window.addEventListener('resize', function() {
    const isMobile = window.innerWidth <= 768;
    slideWidth = isMobile ? 270 : 320;
    updateCarouselButtons();
});

// Função para validar formulários
function validateForm(form) {
    const email = form.querySelector('input[type="email"]');
    const name = form.querySelector('input[name="name"]');
    
    if (email && !email.value) {
        showNotification('Por favor, insira seu email.', 'error');
        return false;
    }
    
    if (email && !isValidEmail(email.value)) {
        showNotification('Por favor, insira um email válido.', 'error');
        return false;
    }
    
    if (name && !name.value) {
        showNotification('Por favor, insira seu nome.', 'error');
        return false;
    }
    
    return true;
}

// Função para validar email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Função para alternar menu mobile
function toggleMobileMenu() {
    const menu = document.querySelector('.mobile-menu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

// Função para verificar se é mobile
function checkMobile() {
    const isMobile = window.innerWidth <= 768;
    const mobileMenu = document.querySelector('.mobile-menu');
    const desktopMenu = document.querySelector('.desktop-menu');
    
    if (isMobile) {
        if (mobileMenu) mobileMenu.style.display = 'block';
        if (desktopMenu) desktopMenu.style.display = 'none';
    } else {
        if (mobileMenu) mobileMenu.style.display = 'none';
        if (desktopMenu) desktopMenu.style.display = 'block';
    }
}

// Listener para redimensionamento da janela
window.addEventListener('resize', checkMobile);

// Executa no carregamento
window.addEventListener('load', checkMobile);

// Função para atualizar menu ativo
function updateActiveMenu() {
    const sections = document.querySelectorAll('section[id]');
    const menuItems = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });
    
    menuItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${currentSection}`) {
            item.classList.add('active');
        }
    });
}

// Listener para scroll para atualizar menu
window.addEventListener('scroll', updateActiveMenu);

// Função para compartilhar nas redes sociais
function shareOnSocial(platform) {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent('Doces Sem Açúcar - E-book de Receitas Saudáveis');
    const text = encodeURIComponent('Descubra o prazer de doces sem açúcar! Receitas deliciosas e saudáveis.');
    
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
        case 'telegram':
            shareUrl = `https://t.me/share/url?url=${url}&text=${text}`;
            break;
    }
    
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
}

// Função para mostrar notificações
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()">&times;</button>
        </div>
    `;
    
    // Adiciona estilos para a notificação
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4ade80' : '#ef4444'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove a notificação após 5 segundos
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Função para capturar leads
function captureLead(email) {
    // Aqui você pode implementar a lógica para salvar o email
    // Por exemplo, enviar para um CRM ou API
    
    console.log('Lead capturado:', email);
    
    // Mostra notificação de sucesso
    showNotification('Email cadastrado com sucesso! Você receberá nossas novidades em breve.', 'success');
    
    // Limpa o campo de email
    const emailInput = document.querySelector('input[type="email"]');
    if (emailInput) {
        emailInput.value = '';
    }
}

// Função para verificar se o usuário chegou ao final da página
function checkScrollEnd() {
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    if (scrollTop + windowHeight >= documentHeight - 100) {
        // Usuário chegou ao final da página
        // Aqui você pode implementar ações como mostrar um popup ou CTA
        console.log('Usuário chegou ao final da página');
    }
}

// Listener para scroll para verificar final da página
window.addEventListener('scroll', checkScrollEnd);

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

// Pop-ups de Vendas Recentes
const salesNames = [
    'Maria Silva', 'João Santos', 'Ana Costa', 'Pedro Oliveira', 'Lucia Ferreira',
    'Carlos Rodrigues', 'Fernanda Lima', 'Roberto Alves', 'Patricia Souza', 'Marcos Pereira',
    'Juliana Santos', 'Ricardo Costa', 'Camila Oliveira', 'André Silva', 'Vanessa Lima',
    'Diego Santos', 'Carolina Ferreira', 'Thiago Alves', 'Amanda Costa', 'Lucas Pereira',
    'Isabela Silva', 'Gabriel Santos', 'Mariana Lima', 'Rafael Costa', 'Beatriz Oliveira',
    'Daniel Ferreira', 'Larissa Silva', 'Matheus Santos', 'Natalia Costa', 'Felipe Lima'
];

const salesMessages = [
    'acabou de comprar o e-book!',
    'adquiriu o guia de receitas!',
    'fez a compra do e-book!',
    'acabou de garantir o e-book!',
    'comprou o guia de doces fit!',
    'adquiriu o e-book de receitas!',
    'fez a compra do guia!',
    'acabou de comprar!',
    'garantiu o e-book!',
    'fez a aquisição!'
];

const salesIcons = [
    'fas fa-shopping-cart',
    'fas fa-heart',
    'fas fa-star',
    'fas fa-gift',
    'fas fa-check-circle',
    'fas fa-thumbs-up',
    'fas fa-fire',
    'fas fa-bolt',
    'fas fa-crown',
    'fas fa-gem'
];

let activePopups = 0;
const maxPopups = 3;

function createSalesPopup() {
    if (activePopups >= maxPopups) return;
    
    const container = document.getElementById('sales-popup-container');
    if (!container) return;
    
    const randomName = salesNames[Math.floor(Math.random() * salesNames.length)];
    const randomMessage = salesMessages[Math.floor(Math.random() * salesMessages.length)];
    const randomIcon = salesIcons[Math.floor(Math.random() * salesIcons.length)];
    
    const popup = document.createElement('div');
    popup.className = 'sales-popup';
    popup.innerHTML = `
        <button class="sales-popup-close" onclick="removeSalesPopup(this.parentElement)">×</button>
        <div class="sales-popup-header">
            <div class="sales-popup-icon">
                <i class="${randomIcon}"></i>
            </div>
            <div class="sales-popup-title">Nova Venda!</div>
        </div>
        <div class="sales-popup-content">
            <span class="sales-popup-name">${randomName}</span> ${randomMessage}
        </div>
        <div class="sales-popup-time">Agora mesmo</div>
    `;
    
    container.appendChild(popup);
    activePopups++;
    
    // Adiciona efeito shimmer após 1 segundo
    setTimeout(() => {
        popup.classList.add('show-shimmer');
    }, 1000);
    
    // Remove o popup automaticamente após 8 segundos
    setTimeout(() => {
        removeSalesPopup(popup);
    }, 5000);
    
    // Remove o efeito shimmer após 2 segundos
    setTimeout(() => {
        popup.classList.remove('show-shimmer');
    }, 3000);
}

function removeSalesPopup(popup) {
    if (!popup || !popup.parentElement) return;
    
    popup.classList.add('removing');
    
    setTimeout(() => {
        if (popup.parentElement) {
            popup.parentElement.removeChild(popup);
            activePopups--;
        }
    }, 500);
}

// Inicia os pop-ups de vendas após 3 segundos
setTimeout(() => {
    // Primeiro popup
    createSalesPopup();
    
    // Pop-ups subsequentes a cada 15-30 segundos
    setInterval(() => {
        if (Math.random() > 0.3) { // 70% de chance de aparecer
            createSalesPopup();
        }
    }, Math.random() * 15000 + 15000); // Entre 15 e 30 segundos
}, 3000);

// Pop-up adicional após 10 segundos
setTimeout(() => {
    createSalesPopup();
}, 10000);

// Pop-up adicional após 20 segundos
setTimeout(() => {
    createSalesPopup();
}, 20000); 