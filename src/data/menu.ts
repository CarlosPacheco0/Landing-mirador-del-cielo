export interface MenuCategory {
  id: string;
  name: string;
  icon: string;
}

import { url } from '../utils/paths';

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  categoryName: string;
  price: number;
  description?: string;
  image?: string; // Opcional (por ahora todas sin imagen)
  badge?: string;
  featured?: boolean; // Para "Más Vendidos"
  isSpecialty?: boolean; // Si es true, se muestra en "Especialidades de El Mirador" en el Inicio
}

export const DEFAULT_PLACEHOLDER_IMAGE = url('/images/placeholder-food.svg');

export const menuCategories: MenuCategory[] = [
  { id: 'mas-vendidos', name: '🔥 Más Vendidos', icon: '⭐' },
  { id: 'pizzetas', name: 'Pizzetas', icon: '🍕' },
  { id: 'granizados', name: 'Granizados', icon: '🍧' },
  { id: 'calientes', name: 'Bebidas Calientes', icon: '☕' },
  { id: 'cocteles', name: 'Cócteles', icon: '🍸' },
  { id: 'cervezas', name: 'Cervezas', icon: '🍺' },
  { id: 'frias', name: 'Bebidas Frías', icon: '🧋' },
  { id: 'horneados', name: 'Horneados', icon: '🥟' },
  { id: 'tortas', name: 'Tortas', icon: '🍰' },
  { id: 'sodas', name: 'Sodas', icon: '🍹' },
  { id: 'malteada', name: 'Malteadas', icon: '🥤' },
  { id: 'pizza-dogs', name: 'Pizza Dogs', icon: '🌭' },
  { id: 'michelada', name: 'Micheladas', icon: '🍋' },
  { id: 'tradicional', name: 'Tradicional', icon: '🌽' },
  { id: 'combos', name: 'Combos', icon: '🥪' },
  { id: 'pasaporte', name: 'Pasaportes', icon: '🎟️' },
  { id: 'bebidas', name: 'Bebidas', icon: '🧊' },
  { id: 'adicionales', name: 'Adicionales', icon: '➕' },
  { id: 'todos', name: 'Ver Todo', icon: '📋' }
];

export const menuItems: MenuItem[] = [
  // *** PIZZETAS (Con foto real) ***
  {
    id: 'pizza-belena',
    name: 'Pizza Beleña',
    category: 'pizzetas',
    categoryName: 'Pizzetas',
    price: 20000,
    description: 'Queso fundido, bocadillo veleño artesanal y un toque especial de la casa.',
    featured: true,
    isSpecialty: true,
    badge: 'Popular'
  },
  {
    id: 'pizza-nutella',
    name: 'Pizza de Nutella',
    category: 'pizzetas',
    categoryName: 'Pizzetas',
    price: 22000,
    description: 'Crujiente masa artesanal cubierta con abundante Nutella y topping dulce.',
    badge: 'Dulce'
  },
  {
    id: 'la-colombiana',
    name: 'La Colombiana',
    category: 'pizzetas',
    categoryName: 'Pizzetas',
    price: 25000,
    description: 'Sabores tradicionales colombianos con abundante queso y proteína seleccionada.',
    featured: true,
    badge: 'Especial'
  },
  {
    id: 'pizza-hawaiana',
    name: 'Pizza Hawaiana',
    category: 'pizzetas',
    categoryName: 'Pizzetas',
    price: 22000,
    description: 'Clásica combinación de piña caramelizada, jamón selecto y queso mozzarella.',
  },
  {
    id: 'pizzeritos',
    name: 'Pizzeritos',
    category: 'pizzetas',
    categoryName: 'Pizzetas',
    price: 40000,
    description: 'Porción especial para compartir entre amigos en la terraza.',
    badge: 'Para Compartir'
  },
  {
    id: 'pizza-pera-cielo',
    name: 'Pizza Pera Cielo',
    category: 'pizzetas',
    categoryName: 'Pizzetas',
    price: 25000,
    description: 'Exquisita combinación de pera caramelizada, queso suave y reducción especial.',
    featured: true,
    isSpecialty: true,
    badge: 'Chef Choice'
  },
  {
    id: 'pizza-italianisima',
    name: 'Pizza Italianísima',
    category: 'pizzetas',
    categoryName: 'Pizzetas',
    price: 22000,
    description: 'Hierbas aromáticas, salsa napolitana de la casa y mezcla de quesos.',
  },
  {
    id: 'pizza-pollo-trufa',
    name: 'Pizza Pollo Trufa',
    category: 'pizzetas',
    categoryName: 'Pizzetas',
    price: 25000,
    description: 'Trozos de pollo jugoso con delicado toque y aroma a trufa.',
    badge: 'Gourmet'
  },
  {
    id: 'pizza-pepperoni-parmesano',
    name: 'Pizza Pepperoni Queso Parmesano',
    category: 'pizzetas',
    categoryName: 'Pizzetas',
    price: 20000,
    description: 'Abundante pepperoni crocante coronado con queso parmesano rallado.',
    featured: true
  },

  // *** PIZZA DOGS ***
  {
    id: 'pizza-dogs-mexicano',
    name: 'Pizza Dogs Mexicano',
    category: 'pizza-dogs',
    categoryName: 'Pizza Dogs',
    price: 15000,
    description: 'Fusión de hot dog gratinado al estilo pizza con jalapeños y guacamole.'
  },
  {
    id: 'pizza-dogs-argentino',
    name: 'Pizza Dogs Argentino',
    category: 'pizza-dogs',
    categoryName: 'Pizza Dogs',
    price: 12000,
    description: 'Delicioso hot dog gratinado con queso fundido y chimichurri especial.'
  },

  // *** GRANIZADOS (Con foto real) ***
  {
    id: 'granizado-maracuya',
    name: 'Granizado de Maracuyá',
    category: 'granizados',
    categoryName: 'Granizados',
    price: 10000,
    description: 'Fruta fresca de maracuyá, escarchado cítrico y extremadamente refrescante.',
    featured: true,
    isSpecialty: true,
    badge: '🔥 Más Vendido'
  },
  {
    id: 'granizado-coco',
    name: 'Granizado de Coco',
    category: 'granizados',
    categoryName: 'Granizados',
    price: 13000,
    description: 'Cremoso coco natural granizado con toque tropical de montaña.',
    featured: true,
    isSpecialty: true,
    badge: 'Favorito'
  },
  {
    id: 'granizado-limon',
    name: 'Granizado de Limón',
    category: 'granizados',
    categoryName: 'Granizados',
    price: 10000,
    description: 'Cítrico, helado y perfecto para refrescar la tarde soleada.',
  },
  {
    id: 'granizado-sandia',
    name: 'Granizados de Sandía',
    category: 'granizados',
    categoryName: 'Granizados',
    price: 10000,
    description: 'Sabor dulce y natural a sandía fresca, servido ultra frío.',
  },
  {
    id: 'granizado-natural',
    name: 'Granizado Natural',
    category: 'granizados',
    categoryName: 'Granizados',
    price: 11000,
    description: 'Pura fruta natural sin conservantes preparada al instante.',
  },
  {
    id: 'granizado-cerezas',
    name: 'Granizado Cerezas',
    category: 'granizados',
    categoryName: 'Granizados',
    price: 10000,
    description: 'Intenso sabor a cerezas con toque dulce y escarchado.',
  },

  // *** BEBIDAS CALIENTES ***
  {
    id: 'manzanilla-anis-menta',
    name: 'Manzanilla, Anís y Menta',
    category: 'calientes',
    categoryName: 'Bebidas Calientes',
    price: 4000,
    description: 'Infusión digestiva natural, relajante y reconfortante.'
  },
  {
    id: 'aromatica-hierbabuena',
    name: 'Aromática de Hierbabuena',
    category: 'calientes',
    categoryName: 'Bebidas Calientes',
    price: 4000,
    description: 'Hojas frescas de hierbabuena en agua caliente aromática.'
  },
  {
    id: 'aromatica-te-verde',
    name: 'Aromática Té Verde',
    category: 'calientes',
    categoryName: 'Bebidas Calientes',
    price: 4000,
    description: 'Té verde antioxidante natural servido bien caliente.'
  },
  {
    id: 'aromatica-vainilla-almendra',
    name: 'Aromática Vainilla Almendra',
    category: 'calientes',
    categoryName: 'Bebidas Calientes',
    price: 4000,
    description: 'Mezcla suave y dulce con notas tostadas de almendra.'
  },
  {
    id: 'aromatica-te-negro',
    name: 'Aromática Té Negro',
    category: 'calientes',
    categoryName: 'Bebidas Calientes',
    price: 4000,
    description: 'Té negro clásico de aroma intenso y energizante.'
  },
  {
    id: 'aromatica-frutos-rojos',
    name: 'Aromática Frutos Rojos',
    category: 'calientes',
    categoryName: 'Bebidas Calientes',
    price: 4000,
    description: 'Notas a fresa, mora y arándanos con vibrante color rubí.',
    featured: true,
    badge: 'Recomendada'
  },
  {
    id: 'cafe-espresso-doble',
    name: 'Café Espresso Doble',
    category: 'calientes',
    categoryName: 'Bebidas Calientes',
    price: 4500,
    description: 'Doble extracción de café 100% colombiano de altura.'
  },
  {
    id: 'aromatica-con-frutas',
    name: 'Aromática con Frutas',
    category: 'calientes',
    categoryName: 'Bebidas Calientes',
    price: 7000,
    description: 'Copa caliente con trozos frescos de fresa, uva, manzana y hierbabuena.',
    badge: 'Especial'
  },
  {
    id: 'aromatica-tradicional',
    name: 'Aromática Tradicional',
    category: 'calientes',
    categoryName: 'Bebidas Calientes',
    price: 4000,
    description: 'Infusión clásica de hierbas de la huerta.'
  },
  {
    id: 'aguapanela',
    name: 'Aguapanela Caliente',
    category: 'calientes',
    categoryName: 'Bebidas Calientes',
    price: 4000,
    description: 'Tradicional aguapanela colombiana servida bien caliente.'
  },
  {
    id: 'milo-caliente',
    name: 'Milo Caliente',
    category: 'calientes',
    categoryName: 'Bebidas Calientes',
    price: 8000,
    description: 'Cremoso Milo con leche caliente espumada.'
  },
  {
    id: 'migao',
    name: 'Migao Tradicional',
    category: 'calientes',
    categoryName: 'Bebidas Calientes',
    price: 15000,
    description: 'Clásico migao campesino con queso y acompañamiento caliente.',
    badge: 'Típico'
  },
  {
    id: 'chocolate-caliente',
    name: 'Chocolate Caliente',
    category: 'calientes',
    categoryName: 'Bebidas Calientes',
    price: 7500,
    description: 'Chocolate espumoso de mesa tradicional colombiano.'
  },
  {
    id: 'latte',
    name: 'Café Latte',
    category: 'calientes',
    categoryName: 'Bebidas Calientes',
    price: 7000,
    description: 'Espresso balanceado con abundante leche vaporizada y capa de microespuma.'
  },
  {
    id: 'mocaccino',
    name: 'Mocaccino',
    category: 'calientes',
    categoryName: 'Bebidas Calientes',
    price: 8500,
    description: 'Armoniosa unión de café espresso, chocolate artesanal y leche.'
  },
  {
    id: 'capuchino',
    name: 'Capuchino',
    category: 'calientes',
    categoryName: 'Bebidas Calientes',
    price: 7000,
    description: 'Espresso intenso coronado con crema de leche y canela.',
    featured: true,
    isSpecialty: true
  },
  {
    id: 'carajillo-whiskey',
    name: 'Carajillo con Whiskey',
    category: 'calientes',
    categoryName: 'Bebidas Calientes',
    price: 10000,
    description: 'Café caliente aromatizado con un shot de whiskey selecto.'
  },
  {
    id: 'carajillo-bolegancho',
    name: 'Carajillo con Bolegancho',
    category: 'calientes',
    categoryName: 'Bebidas Calientes',
    price: 6500,
    description: 'El tradicional carajillo con licor autóctono de la región.',
    badge: 'Regional'
  },
  {
    id: 'cafe-americano',
    name: 'Café Americano',
    category: 'calientes',
    categoryName: 'Bebidas Calientes',
    price: 5000,
    description: 'Café suave y aromático servido al estilo americano.'
  },

  // *** BEBIDAS FRIAS ***
  {
    id: 'milo-frio',
    name: 'Milo Frío',
    category: 'frias',
    categoryName: 'Bebidas Frías',
    price: 10000,
    description: 'Milo helado batido con leche fresca y hielo.'
  },
  {
    id: 'latte-frio',
    name: 'Latte Frío',
    category: 'frias',
    categoryName: 'Bebidas Frías',
    price: 8000,
    description: 'Espresso servido sobre leche helada y cubos de hielo.'
  },
  {
    id: 'ginger-coffee',
    name: 'Ginger Coffee',
    category: 'frias',
    categoryName: 'Bebidas Frías',
    price: 10000,
    description: 'Audaz mezcla de café concentrado con ginger ale refrescante.'
  },
  {
    id: 'orange-coffee',
    name: 'Orange Coffee',
    category: 'frias',
    categoryName: 'Bebidas Frías',
    price: 10000,
    description: 'Cítrico zumo de naranja coronado con un shot de café espresso frío.',
    badge: 'Novedad'
  },
  {
    id: 'frappuccino',
    name: 'Frappuccino',
    category: 'frias',
    categoryName: 'Bebidas Frías',
    price: 13000,
    description: 'Café batido con hielo, leche y sirope decorado con crema.',
    featured: true
  },
  {
    id: 'affogato',
    name: 'Affogato',
    category: 'frias',
    categoryName: 'Bebidas Frías',
    price: 8500,
    description: 'Bola de helado de vainilla ahogada en un shot de espresso caliente.',
    badge: 'Italiano'
  },

  // *** CERVEZAS ***
  {
    id: 'aguila-original',
    name: 'Águila Original',
    category: 'cervezas',
    categoryName: 'Cervezas',
    price: 5000,
    description: 'Cerveza nacional tradicional bien helada.'
  },
  {
    id: 'club-colombia-dorada',
    name: 'Club Colombia Dorada Lata',
    category: 'cervezas',
    categoryName: 'Cervezas',
    price: 6000,
    description: 'Cerveza premium tipo lager dorada 100% malta.'
  },
  {
    id: 'budweiser-lata',
    name: 'Budweiser Lata',
    category: 'cervezas',
    categoryName: 'Cervezas',
    price: 6000,
    description: 'Cerveza lager americana suave y refrescante.'
  },
  {
    id: 'heineken-lata',
    name: 'Heineken Lata',
    category: 'cervezas',
    categoryName: 'Cervezas',
    price: 6000,
    description: 'Cerveza holandesa premium de sabor balanceado.'
  },
  {
    id: 'poker-lata',
    name: 'Poker Lata',
    category: 'cervezas',
    categoryName: 'Cervezas',
    price: 5000,
    description: 'La cerveza de los amigos servida a punto de nieve.'
  },
  {
    id: 'stella-artois',
    name: 'Stella Artois',
    category: 'cervezas',
    categoryName: 'Cervezas',
    price: 8000,
    description: 'Cerveza belga de distinguido amargor floral y refinado.',
    badge: 'Importada'
  },
  {
    id: 'coronita',
    name: 'Coronita',
    category: 'cervezas',
    categoryName: 'Cervezas',
    price: 6000,
    description: 'Clásica Coronita servida con rodaja de limón fresco.'
  },

  // *** COCTELES ***
  {
    id: 'shot-tequila',
    name: 'Shot Tequila',
    category: 'cocteles',
    categoryName: 'Cócteles',
    price: 9000,
    description: 'Tequila servido con limón y sal.'
  },
  {
    id: 'tequila-sunrise',
    name: 'Tequila Sunrise',
    category: 'cocteles',
    categoryName: 'Cócteles',
    price: 18000,
    description: 'Tequila, zumo de naranja y granadina emulando el atardecer.',
    badge: 'Atardecer'
  },
  {
    id: 'bailys-orgasmo',
    name: 'Baileys Orgasmo',
    category: 'cocteles',
    categoryName: 'Cócteles',
    price: 22000,
    description: 'Cremoso cóctel con licor de café, crema irlandesa y amaretto.'
  },
  {
    id: 'gin-and-tonic',
    name: 'Gin and Tonic',
    category: 'cocteles',
    categoryName: 'Cócteles',
    price: 20000,
    description: 'Ginebra destilada, agua tónica burbujeante y botánicos.'
  },
  {
    id: 'pina-colada',
    name: 'Piña Colada',
    category: 'cocteles',
    categoryName: 'Cócteles',
    price: 23000,
    description: 'Ron blanco, crema de coco y zumo de piña natural batido.',
    featured: true,
    isSpecialty: true,
    badge: 'Tropical'
  },
  {
    id: 'margarita',
    name: 'Margarita',
    category: 'cocteles',
    categoryName: 'Cócteles',
    price: 18000,
    description: 'Tequila, triple sec y zumo de limón fresco con copa escarchada.'
  },
  {
    id: 'mojito',
    name: 'Mojito',
    category: 'cocteles',
    categoryName: 'Cócteles',
    price: 19000,
    description: 'Ron, hierbabuena macerada, azúcar, lima y soda burbujeante.',
    featured: true
  },

  // *** COMBO ***
  {
    id: 'chicha-cuca',
    name: 'Chicha + Cuca',
    category: 'combos',
    categoryName: 'Combos',
    price: 6500,
    description: 'La combinación autóctona más representativa de Río de Oro.',
    featured: true,
    isSpecialty: true,
    badge: '100% Autóctono'
  },

  // *** HORNEADOS (Con foto real) ***
  {
    id: 'empanada-velena',
    name: 'Empanada Veleña',
    category: 'horneados',
    categoryName: 'Horneados',
    price: 3500,
    description: 'Empanada rellena de dulce bocadillo veleño con queso fundido.',
    featured: true,
    isSpecialty: true,
    badge: 'Popular'
  },
  {
    id: 'deditos-bocadillo-queso',
    name: 'Deditos de Bocadillo y Queso',
    category: 'horneados',
    categoryName: 'Horneados',
    price: 4500,
    description: 'Hojaldre horneado relleno de queso campesino y bocadillo.',
    featured: true
  },
  {
    id: 'deditos-queso',
    name: 'Deditos de Queso',
    category: 'horneados',
    categoryName: 'Horneados',
    price: 4500,
    description: 'Crocantes deditos dorados rellenos de abundante queso blanco.',
  },
  {
    id: 'empanada-pollo',
    name: 'Empanada de Pollo',
    category: 'horneados',
    categoryName: 'Horneados',
    price: 3500,
    description: 'Empanada horneada con jugoso guiso de pechuga desmechada.',
  },
  {
    id: 'empanada-carne',
    name: 'Empanada de Carne',
    category: 'horneados',
    categoryName: 'Horneados',
    price: 3500,
    description: 'Carne sazonada con especias tradicionales en masa dorada.',
  },

  // *** MALTEADAS ***
  {
    id: 'malteada-arequipe',
    name: 'Malteada Arequipe',
    category: 'malteada',
    categoryName: 'Malteadas',
    price: 16000,
    description: 'Batido espeso con helado de vainilla y abundante arequipe artesanal.'
  },
  {
    id: 'malteada-chocolate',
    name: 'Malteada Chocolate',
    category: 'malteada',
    categoryName: 'Malteadas',
    price: 16000,
    description: 'Intenso helado de chocolate belga batido con sirope y crema.'
  },
  {
    id: 'malteada-cielo-rose',
    name: 'Malteada Cielo Rose',
    category: 'malteada',
    categoryName: 'Malteadas',
    price: 17000,
    description: 'Edición exclusiva de la casa con fresas, rosas y crema chantilly.',
    featured: true,
    badge: 'De la Casa'
  },

  // *** MICHELADAS ***
  {
    id: 'michelada-cerezas',
    name: 'Michelada Cerezas',
    category: 'michelada',
    categoryName: 'Micheladas',
    price: 6000,
    description: 'Vaso escarchado con limón, sal, zumo y toque de cereza.'
  },
  {
    id: 'michelada-tradicional',
    name: 'Michelada Tradicional',
    category: 'michelada',
    categoryName: 'Micheladas',
    price: 3000,
    description: 'El clásico escarchado con limón natural y sal marina para tu cerveza.'
  },

  // *** PASAPORTE ***
  {
    id: 'pasaporte-combo-2',
    name: 'Combo 2',
    category: 'pasaporte',
    categoryName: 'Pasaportes',
    price: 12000,
    description: 'Combinación especial para degustar en pareja o individual.'
  },
  {
    id: 'pasaporte-combo-1',
    name: 'Combo 1',
    category: 'pasaporte',
    categoryName: 'Pasaportes',
    price: 33000,
    description: 'Experiencia completa del Mirador para compartir.',
    badge: 'Super Ahorro'
  },

  // *** SODAS SABORIZADAS ***
  {
    id: 'soda-rosas',
    name: 'Soda con Rosas',
    category: 'sodas',
    categoryName: 'Sodas',
    price: 12000,
    description: 'Elegante infusión gasificada con jarabe artesanal de rosas comestibles.',
    badge: 'Especial'
  },
  {
    id: 'soda-sandia',
    name: 'Soda con Sandía',
    category: 'sodas',
    categoryName: 'Sodas',
    price: 12000,
    description: 'Soda italiana con pulpa de sandía fresca, hielo y limón.'
  },
  {
    id: 'soda-maracuya',
    name: 'Soda con Maracuyá',
    category: 'sodas',
    categoryName: 'Sodas',
    price: 12000,
    description: 'Burbujas chispeantes con jugo concentrado de maracuyá y menta.'
  },
  {
    id: 'soda-mango',
    name: 'Soda con Mango',
    category: 'sodas',
    categoryName: 'Sodas',
    price: 13000,
    description: 'Trozos de mango maduro con soda helada y toque cítrico.'
  },

  // *** TORTAS ***
  {
    id: 'torta-pina',
    name: 'Torta de Piña',
    category: 'tortas',
    categoryName: 'Tortas',
    price: 8000,
    description: 'Bizcocho esponjoso con piña acaramelada en almíbar.'
  },
  {
    id: 'torta-queso',
    name: 'Torta de Queso',
    category: 'tortas',
    categoryName: 'Tortas',
    price: 4500,
    description: 'Deliciosa torta tradicional con queso campesino rallado.'
  },
  {
    id: 'torta-cuca',
    name: 'Torta de Cuca',
    category: 'tortas',
    categoryName: 'Tortas',
    price: 4000,
    description: 'Tradicional receta local con panela y especias dulces.',
    badge: 'Tradición'
  },
  {
    id: 'torta-cafe',
    name: 'Torta de Café',
    category: 'tortas',
    categoryName: 'Tortas',
    price: 8000,
    description: 'Horneada con café colombiano y cobertura aromática.'
  },
  {
    id: 'torta-chocolate-arequipe',
    name: 'Torta Chocolate con Arequipe',
    category: 'tortas',
    categoryName: 'Tortas',
    price: 8000,
    description: 'Húmedo bizcocho de chocolate relleno y bañado en arequipe.',
    featured: true,
    badge: 'Favorita'
  },
  {
    id: 'torta-naranja-amapola',
    name: 'Torta Naranja y Amapola',
    category: 'tortas',
    categoryName: 'Tortas',
    price: 8000,
    description: 'Sutil sabor cítrico de naranja fresca con semillas de amapola.'
  },

  // *** TRADICIONAL ***
  {
    id: 'pan-de-bono',
    name: 'Pan de Bono',
    category: 'tradicional',
    categoryName: 'Tradicional',
    price: 3500,
    description: 'Recién horneado, suave, esponjoso y con rico sabor a queso costeño.'
  },
  {
    id: 'chicha',
    name: 'Chicha',
    category: 'tradicional',
    categoryName: 'Tradicional',
    price: 3500,
    description: 'Bebida fermentada ancestral a base de maíz dulce.',
    badge: 'Ancestral'
  },

  // *** BEBIDAS GENERALES ***
  {
    id: 'hit-caja',
    name: 'Hit Caja',
    category: 'bebidas',
    categoryName: 'Bebidas',
    price: 2500,
    description: 'Jugo de frutas en caja práctico para niños y adultos.'
  },
  {
    id: 'vaso-leche',
    name: 'Vaso de Leche',
    category: 'bebidas',
    categoryName: 'Bebidas',
    price: 2000,
    description: 'Vaso de leche entera fresca servida fría o tibia.'
  },
  {
    id: 'agua-600ml',
    name: 'Agua 600ml',
    category: 'bebidas',
    categoryName: 'Bebidas',
    price: 3000,
    description: 'Agua pura de manantial sin gas 600ml.'
  },
  {
    id: 'soda-400ml',
    name: 'Soda 400ml',
    category: 'bebidas',
    categoryName: 'Bebidas',
    price: 4000,
    description: 'Agua con gas / soda 400ml en botella.'
  },
  {
    id: 'gingger-400ml',
    name: 'Ginger 400ml',
    category: 'bebidas',
    categoryName: 'Bebidas',
    price: 5000,
    description: 'Ginger ale refrescante con notas picantes de jengibre.'
  },
  {
    id: 'coca-cola-250ml',
    name: 'Coca Cola 250ml',
    category: 'bebidas',
    categoryName: 'Bebidas',
    price: 3500,
    description: 'Coca Cola original en presentación personal 250ml.'
  },
  {
    id: 'coca-cola-400ml',
    name: 'Coca Cola 400ml',
    category: 'bebidas',
    categoryName: 'Bebidas',
    price: 5000,
    description: 'Coca Cola fría original 400ml.'
  },
  {
    id: 'coca-cola-zero-400ml',
    name: 'Coca Cola Zero 400ml',
    category: 'bebidas',
    categoryName: 'Bebidas',
    price: 5000,
    description: 'Coca Cola sin azúcar ni calorías 400ml.'
  },

  // *** ADICIONALES ***
  {
    id: 'bola-helado',
    name: 'Bola de Helado',
    category: 'adicionales',
    categoryName: 'Adicionales',
    price: 3500,
    description: 'Porción extra de helado cremoso para acompañar tus postres.'
  },
  {
    id: 'shot-soda',
    name: 'Shot Soda',
    category: 'adicionales',
    categoryName: 'Adicionales',
    price: 1000,
    description: 'Shot adicional de soda gasificada.'
  },
  {
    id: 'shot-limon',
    name: 'Shot de Limón',
    category: 'adicionales',
    categoryName: 'Adicionales',
    price: 1,
    description: 'Zumo de limón fresco adicional.'
  },
  {
    id: 'papitas',
    name: 'Papitas',
    category: 'adicionales',
    categoryName: 'Adicionales',
    price: 1,
    description: 'Porción de papitas crocantes.'
  },
  {
    id: 'queso-costello',
    name: 'Queso Costello',
    category: 'adicionales',
    categoryName: 'Adicionales',
    price: 2000,
    description: 'Porción adicional de queso costello artesanal.'
  },
  {
    id: 'queso-mozzarella',
    name: 'Queso Mozzarella',
    category: 'adicionales',
    categoryName: 'Adicionales',
    price: 1,
    description: 'Porción de queso mozzarella fundido para tus platos.'
  },
  {
    id: 'caja-para-pizza',
    name: 'Caja para Pizza',
    category: 'adicionales',
    categoryName: 'Adicionales',
    price: 1500,
    description: 'Caja de empaque especial para llevar tus pizzetas a casa.'
  }
];
