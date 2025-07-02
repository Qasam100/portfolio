
fetch('assets/js/videos.json')
  .then(response => response.json())
  .then(data => {
    const grid = document.getElementById('portfolio-grid');
    data.forEach(video => {
      const item = document.createElement('div');
      item.className = 'portfolio-item';
      item.setAttribute('data-category', video.category);

      const wrapper = document.createElement('div');
      wrapper.className = 'video-wrapper';

      const iframe = document.createElement('iframe');
      iframe.src = `https://drive.google.com/file/d/${video.file_id}/preview`;
      iframe.setAttribute('allowfullscreen', true);
      wrapper.appendChild(iframe);

      const title = document.createElement('h3');
      title.textContent = video.title;

      item.appendChild(wrapper);
      item.appendChild(title);
      grid.appendChild(item);
    });

    // Filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        items.forEach(item => {
          const category = item.getAttribute('data-category');
          item.style.display = (filter === 'all' || category === filter) ? 'block' : 'none';
        });
      });
    });
  });
