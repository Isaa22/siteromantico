document.addEventListener('DOMContentLoaded', function() {
    // Personalização com nomes
    const namePlaceholder = document.getElementById('namePlaceholder');
    const yourName = document.getElementById('yourName');
    const footerName = document.getElementById('footerName');
    
    // Substitua com os nomes reais
    namePlaceholder.textContent = 'Meu Amor';
    yourName.textContent = 'Sua Namorada';
    footerName.textContent = 'Sua Namorada';

    // Data atual no footer
    const currentDate = document.getElementById('current-date');
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    currentDate.textContent = now.toLocaleDateString('pt-BR', options);

    // Contagem regressiva (configure para sua próxima data especial)
    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + 14); // Exemplo: 14 dias a partir de hoje
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = nextDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
        }
    }
    
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);

    // Player de música (simulação)
    const playBtn = document.getElementById('play-btn');
    const songTitle = document.getElementById('song-title');
    const artist = document.getElementById('artist');
    
    // Configure com sua música especial
    songTitle.textContent = 'Nossa Música';
    artist.textContent = 'Artista Favorito';
    
    let isPlaying = false;
    
    playBtn.addEventListener('click', function() {
        isPlaying = !isPlaying;
        if (isPlaying) {
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    });

    // Modal para adicionar memórias
    const modal = document.getElementById('memoryModal');
    const addMemoryBtn = document.getElementById('addMemoryBtn');
    const closeBtn = document.querySelector('.close-btn');
    
    addMemoryBtn.addEventListener('click', function() {
        modal.style.display = 'flex';
    });
    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Formulário para adicionar memórias
    const memoryForm = document.getElementById('memoryForm');
    
    memoryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const title = document.getElementById('memoryTitle').value;
        const description = document.getElementById('memoryDescription').value;
        const photo = document.getElementById('memoryPhoto').files[0];
        
        if (photo) {
            const reader = new FileReader();
            reader.onload = function(e) {
                addMemoryToGallery(title, description, e.target.result);
            };
            reader.readAsDataURL(photo);
        } else {
            addMemoryToGallery(title, description, null);
        }
        
        memoryForm.reset();
        modal.style.display = 'none';
    });
    
    function addMemoryToGallery(title, description, photoUrl) {
        const gallery = document.querySelector('.gallery');
        const memoryDiv = document.createElement('div');
        memoryDiv.className = 'photo-placeholder';
        
        if (photoUrl) {
            memoryDiv.style.backgroundImage = `url(${photoUrl})`;
            memoryDiv.style.backgroundSize = 'cover';
            memoryDiv.style.backgroundPosition = 'center';
            memoryDiv.innerHTML = `<div class="memory-overlay"><h3>${title}</h3><p>${description}</p></div>`;
        } else {
            memoryDiv.innerHTML = `<h3>${title}</h3><p>${description}</p>`;
        }
        
        gallery.appendChild(memoryDiv);
    }

    // Efeito de digitação na carta de amor (opcional)
    const loveLetter = document.querySelector('.love-letter');
    const paragraphs = loveLetter.querySelectorAll('p');
    
    paragraphs.forEach((p, index) => {
        const text = p.textContent;
        p.textContent = '';
        
        let i = 0;
        const typingEffect = setInterval(() => {
            if (i < text.length) {
                p.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typingEffect);
            }
        }, 50 * (index + 1));
    });
});
