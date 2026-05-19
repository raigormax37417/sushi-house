document.addEventListener('DOMContentLoaded', () => {
    fetch('images.json')
        .then(response => response.json())
        .then(images => {
            // Shuffle
            for (let i = images.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [images[i], images[j]] = [images[j], images[i]];
            }

            const shapes = [
                'card-vertical-long', 'card-small', 'card-vertical', 'card-double-height', 'card-small'
            ];
            const colors = [
                'bg-orange', 'bg-red-dark', 'bg-white', 'bg-red-gradient', 'bg-beige', 'bg-orange-dark', 'bg-red'
            ];

            const container = document.querySelector('.grid-container');

            images.forEach((img, index) => {
                const shape = shapes[index % shapes.length];
                const color = colors[index % colors.length];

                const card = document.createElement('div');
                card.className = `card ${shape} ${color} flex-center`;
                card.style.position = 'relative';
                card.style.overflow = 'hidden';

                card.innerHTML = `
                    <img src="${img.path}" alt="${img.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: inherit; position: absolute; top: 0; left: 0; z-index: 1;">
                    <div class="card-text-bottom" style="text-shadow: 1px 1px 3px rgba(0,0,0,0.9); z-index: 10; position: absolute; bottom: 15px; left: 15px; color: white; font-weight: bold;">${img.name}</div>
                `;

                container.appendChild(card);

                // Add mouse move interaction for the gradient effect
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                    
                    if (card.classList.contains('bg-red-dark') || card.classList.contains('bg-red')) {
                        // Apply a subtle white gradient to interact with mouse move on red backgrounds
                        // In order not to hide the image, we apply it via an overlay effect using ::after in css, 
                        // or we can adjust the box-shadow
                        // Just retaining original logic as fallback:
                        card.style.background = `radial-gradient(circle 120px at ${x}px ${y}px, rgba(255,255,255,0.25), transparent), var(--red-dark)`;
                    }
                });

                card.addEventListener('mouseleave', () => {
                    card.style.background = '';
                });
            });
        })
        .catch(err => console.error('Error loading images:', err));
});