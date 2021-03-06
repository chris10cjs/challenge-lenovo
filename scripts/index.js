function handleOnClick() {
  let nav = document.getElementById('navSubProducts');
  nav.className === 'hide' ? (nav.className = 'show') : (nav.className = 'hide');
}

function handleOnClickFilters() {
  let filters = document.getElementById('filters');
  let arrow = document.getElementById('arrow');

  if (filters.className === 'hide-filters') {
    filters.className = 'show-filters';
    arrow.className = 'arrowDown';
  } else {
    filters.className = 'hide-filters';
    arrow.className = 'arrowUp';
  }
}

function handleOnActiveUser() {
  let nav = document.getElementById('navUser');
  let logo = document.getElementById('logo');

  if (nav.className === 'hide-user') {
    nav.className = 'show-user';
    logo.className = 'hide-logo';
  } else {
    nav.className = 'hide-user';
    logo.className = 'show-logo';
  }
}
