document.getElementById('toggleButton').addEventListener('click', function() {
    const container = document.getElementById('secondContainer');
    var asideColumn = document.getElementById('asideColumn');
    var productColumn = document.getElementById('productColumn');

      //when aside appear
    if (container.classList.contains('show')) {
      container.classList.remove('show');
      productColumn.classList.remove('col-md-11');
      productColumn.classList.add('col-md-12');
      asideColumn.classList.remove('col-md-1')
    } else {
      container.classList.add('show');
     asideColumn.classList.add('col-md-1')
      productColumn.classList.remove('col-md-12');
      productColumn.classList.add('col-md-11');
    }

    
    

      // if (asideColumn.style.display === 'none') {
      //     asideColumn.style.display = 'block';
      //     productColumn.classList.remove('col-md-12');
      //     productColumn.classList.add('col-md-11');
      // } else {
      //     asideColumn.style.display = 'none';
      //     productColumn.classList.remove('col-md-11');
      //     productColumn.classList.add('col-md-12');
      // }
  });

 




       // scripts pag
document.addEventListener('DOMContentLoaded', function() {
  const itemsPerPage = 16;
  const container = document.querySelector('.Special_Festival_type_product');
  const totalItems = container.children.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  let currentPage = 1;

  function showPage(page) {
      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      Array.from(container.children).forEach((item, index) => {
          item.style.display = (index >= start && index < end) ? 'block' : 'none';
      });
      updatePaginationControls(page);
  }

  function updatePaginationControls(page) {
      const pageNumbers = document.getElementById('page-numbers');
      pageNumbers.innerHTML = '';
      for (let i = 1; i <= totalPages; i++) {
          const btn = document.createElement('button');
          btn.innerText = i;
    
          btn.className = (i === page) ? ' btn btn-light border-btn-grey' : '';
          btn.addEventListener('click', () => showPage(i));
          pageNumbers.appendChild(btn);
      }
  }
    

  document.getElementById('prev').addEventListener('click', () => {
      if (currentPage > 1) {
          currentPage--;
          showPage(currentPage);
      }
  });

  document.getElementById('next').addEventListener('click', () => {
      if (currentPage < totalPages) {
          currentPage++;
          showPage(currentPage);
      }
  });

  // Initial load
  showPage(currentPage);
});