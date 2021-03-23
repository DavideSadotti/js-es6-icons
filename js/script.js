// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
const icons = [
  {
    name: 'apple-alt',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'ice-cream',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'fish',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'lemon',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'hamburger',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'pizza-slice',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'beer',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-whiskey',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'wine-bottle',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'cocktail',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'coffee',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-martini',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'dragon',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'kiwi-bird',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'frog',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'hippo',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'otter',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'horse',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
];
const iconContainer = $('.icons');

const colors = [
  'yellow',
  'coral',
  'green'
];

const categories = [];

icons.forEach((item, i) => {
  if(categories.includes(item.category) == false){
    categories.push(item.category);
  }
});


// Milestone 2
// Coloriamo le icone per tipo
const iconsColored = icons.map((icon) => {
  const categoryIndex = categories.indexOf(icon.category);
  const colorItem = colors[categoryIndex];

  icon.color = colorItem;
  return icon;
});

stampaIcone(iconContainer, iconsColored);


// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone
const select = $('#type');

categories.forEach((item) => {
  const optionHtml = `
    <option value="${item}">${item}</option>
  `;

  select.append(optionHtml);
});

select.change(function() {
  const optionSelezionata = $(this).val();
  let filtered = iconsColored.filter((icon) => {
    return icon.category == optionSelezionata;
  });

  if(filtered.length == 0){
    filtered = iconsColored;
  }

  stampaIcone(iconContainer, filtered);
});

function stampaIcone(container, icons){
  container.html('');

  icons.forEach((icon) => {

    const {name, family, prefix, category, color} = icon;

    const html = `
      <div>
      <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
      <div class="title">${name}</div>
      </div>
    `
    container.append(html);

  });
}
