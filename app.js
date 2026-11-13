(function () {
  'use strict';

  /* ===== Configuração: links do rodapé ===== */
  var LINKS = [
    { name: 'CurseForge', url: 'https://www.curseforge.com/members/esquilodk/projects' },
    { name: 'Discord', url: 'https://discord.com/invite/vdVAbyZrGv' },
    { name: 'YouTube', url: 'https://www.youtube.com/@esquiloscr' },
    { name: 'Instagram', url: 'https://www.instagram.com/esquiloscr' }
  ];

  /* ===== Textos da interface ===== */
  var T = {
    pt: {
      search: 'Buscar item, receita, planta…', home: 'Início', items: 'Itens', recipes: 'Receitas', plants: 'Plantas',
      pot: 'Panela', guide: 'Guia', commands: 'Comandos', all: 'Todos', results: 'Resultados para', none: 'Nada encontrado.',
      welcome: 'Tudo sobre o addon de comidas e plantações para Minecraft Bedrock: plantas, árvores frutíferas, a panela, pratos, bolos, bebidas e muito mais.',
      nItems: 'itens', nRecipes: 'receitas', nPlants: 'plantas', version: 'Versão do addon',
      homeItems: 'Todos os itens e blocos com imagem e como obter.', homeRecipes: 'Bancada, fornalha, defumador, fogueira e panela.',
      homePlants: 'Plantações, arbustos, árvores e onde nascem.', homePot: 'Como usar a panela e as receitas dela.',
      homeGuide: 'O livro Wiki do jogo, capítulo por capítulo.', homeCmds: '/pot, /recipebook e mais.',
      group: 'Categoria', food: 'Alimento', hunger: 'Fome', saturation: 'Saturação', stack: 'Empilha até',
      howGet: 'Como obter', usedIn: 'Usado em', recipeOf: 'Receita', wild: 'Silvestre', grows: 'Nasce em', growsNot: 'exceto',
      trade: 'Troca com aldeão', trades: 'Trocas com aldeões', gives: 'dá', wants: 'quer', tier: 'nível', crafting: 'Receita de criação',
      liquid0: 'Panela com água', liquid1: 'Panela com leite', liquid2: 'Panela com creme', liquid3: 'Panela com leite condensado',
      flintNote: 'Use o isqueiro na panela com leite (sem ingredientes) para fazer creme.',
      ing: 'Ingredientes', seed: 'Semente / muda', yields: 'Rende', kindcrop: 'Plantação', kindbush: 'Arbusto', kindtree: 'Árvore', kindother: 'Outro',
      worldNone: 'Não nasce naturalmente.', craftedFrom: 'Feito com', cooks: 'Cozinhar', in: 'em',
      cmdPot: 'Mostra os ingredientes de uma receita da panela. Sem cheats.', cmdPotList: 'Lista os pratos feitos na panela.',
      cmdPotAll: 'Lista todas as receitas da panela.', cmdBook: 'Entrega o livro de receitas.',
      cmdLang: 'Muda o idioma do seu livro de receitas (ex.: pt, en, es, fr, it, ru, ja, zh).',
      cmdIntro: 'Comandos que funcionam em qualquer mundo, sem precisar ativar cheats.',
      potTitle: 'A panela', potIntro: 'Receitas que se fazem dentro da panela, em cima de um defumador.',
      madeBy: 'Feito por EsquiloDK', notAffil: 'Wiki não oficial. Minecraft é marca da Mojang/Microsoft.', updated: 'Gerada em',
      guideTitle: 'Guia do jogo', guideSub: 'O mesmo texto do livro Wiki que vem no addon.', viewAll: 'Ver todos'
    },
    en: {
      search: 'Search item, recipe, plant…', home: 'Home', items: 'Items', recipes: 'Recipes', plants: 'Plants',
      pot: 'Cooking pot', guide: 'Guide', commands: 'Commands', all: 'All', results: 'Results for', none: 'Nothing found.',
      welcome: 'Everything about the food and farming addon for Minecraft Bedrock: crops, fruit trees, the cooking pot, dishes, cakes, drinks and more.',
      nItems: 'items', nRecipes: 'recipes', nPlants: 'plants', version: 'Addon version',
      homeItems: 'Every item and block with picture and how to get it.', homeRecipes: 'Crafting table, furnace, smoker, campfire and pot.',
      homePlants: 'Crops, bushes, trees and where they grow.', homePot: 'How to use the pot and its recipes.',
      homeGuide: 'The in-game Wiki book, chapter by chapter.', homeCmds: '/pot, /recipebook and more.',
      group: 'Category', food: 'Food', hunger: 'Hunger', saturation: 'Saturation', stack: 'Stacks to',
      howGet: 'How to get', usedIn: 'Used in', recipeOf: 'Recipe', wild: 'Wild', grows: 'Grows in', growsNot: 'except',
      trade: 'Villager trade', trades: 'Villager trades', gives: 'gives', wants: 'wants', tier: 'tier', crafting: 'Crafting recipe',
      liquid0: 'Pot with water', liquid1: 'Pot with milk', liquid2: 'Pot with cream', liquid3: 'Pot with condensed milk',
      flintNote: 'Use flint and steel on a pot of milk (no ingredients) to make cream.',
      ing: 'Ingredients', seed: 'Seed / sapling', yields: 'Yields', kindcrop: 'Crop', kindbush: 'Bush', kindtree: 'Tree', kindother: 'Other',
      worldNone: 'Does not generate naturally.', craftedFrom: 'Made with', cooks: 'Cook', in: 'in',
      cmdPot: 'Shows the ingredients of a pot recipe. No cheats needed.', cmdPotList: 'Lists the dishes made in the pot.',
      cmdPotAll: 'Lists every pot recipe.', cmdBook: 'Gives you the recipe book.',
      cmdLang: 'Changes the language of your recipe book (e.g. pt, en, es, fr, it, ru, ja, zh).',
      cmdIntro: 'Commands that work in any world, with no need to enable cheats.',
      potTitle: 'The cooking pot', potIntro: 'Recipes made inside the pot, on top of a smoker.',
      madeBy: 'Made by EsquiloDK', notAffil: 'Unofficial wiki. Minecraft is a trademark of Mojang/Microsoft.', updated: 'Generated on',
      guideTitle: 'In-game guide', guideSub: 'The same text as the Wiki book that comes with the addon.', viewAll: 'View all'
    }
  };
  var STATIONS = {
    crafting_table: { pt: 'Bancada', en: 'Crafting table' }, furnace: { pt: 'Fornalha', en: 'Furnace' },
    smoker: { pt: 'Defumador', en: 'Smoker' }, campfire: { pt: 'Fogueira', en: 'Campfire' }, pot: { pt: 'Panela', en: 'Cooking pot' }
  };
  var TABS = [['home', '#/'], ['items', '#/items'], ['recipes', '#/recipes'], ['plants', '#/plants'], ['pot', '#/pot'], ['guide', '#/guide'], ['commands', '#/commands']];

  var D = null, LANG = 'pt';
  var $ = function (s) { return document.querySelector(s); };
  var t = function (k) { return (T[LANG] && T[LANG][k]) || T.pt[k] || k; };
  var nm = function (o) { return o ? (o[LANG] || o.pt || '') : ''; };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }

  /* ===== nomes e ícones ===== */
  function itemName(id) {
    if (D.items[id]) return nm(D.items[id].name);
    if (D.vanilla[id]) return nm(D.vanilla[id]);
    if (id.indexOf('tag:') === 0) return id.slice(4).split(':').pop().replace(/_/g, ' ');
    return id;
  }
  function slot(id, n) {
    var name = esc(itemName(id)), inner, cnt = n && n > 1 ? '<span class="n">' + n + '</span>' : '';
    var it = D.items[id], van = D.vanilla[id];
    if (it && it.icon) inner = '<img src="' + it.icon + '" alt="' + name + '" loading="lazy">';
    else if (van && van.icon) inner = '<img src="' + van.icon + '" alt="' + name + '" loading="lazy">';
    else inner = '<span class="vname">' + name + '</span>'; // item do jogo base: sem imagem, mostra o nome
    var cls = 'slot', tag = 'span', href = '';
    if (it) { tag = 'a'; href = ' href="#/item/' + encodeURIComponent(id) + '"'; }
    return '<' + tag + ' class="' + cls + '"' + href + ' title="' + name + '">' + inner + cnt + '</' + tag + '>';
  }
  function emptySlot() { return '<span class="slot blank"></span>'; }
  function resultName(r) {
    if (r.result) return itemName(r.result);
    if (r.special && D.specialNames[r.special]) return nm(D.specialNames[r.special]);
    return r.id;
  }
  function resultSlot(r) {
    if (r.result) return slot(r.result, r.count);
    return '<span class="slot" title="' + esc(resultName(r)) + '"><span class="ph">' + esc(resultName(r).charAt(0)) + '</span></span>';
  }

  /* ===== receitas ===== */
  function groupIngredients(list) {
    var order = [], cnt = {};
    list.forEach(function (i) { if (!(i in cnt)) { cnt[i] = 0; order.push(i); } cnt[i]++; });
    return order.map(function (i) { return [i, cnt[i]]; });
  }
  function recipeHTML(r, showTitle) {
    var head = '<div class="recipe-head"><div class="rname">' +
      (showTitle ? '<a href="#/item/' + encodeURIComponent(r.result || '') + '">' + esc(resultName(r)) + '</a>' : esc(resultName(r))) +
      '</div><span class="station">' + esc(nm(STATIONS[r.station] || { pt: r.station, en: r.station })) + '</span></div>';
    var body = '', note = '';
    if (r.type === 'shaped') {
      var cells = '';
      for (var y = 0; y < 3; y++) for (var x = 0; x < 3; x++) {
        var id = r.grid[y] && r.grid[y][x];
        cells += id ? slot(id) : emptySlot();
      }
      body = '<div class="craft-grid">' + cells + '</div><span class="arrow">➜</span>' + resultSlot(r);
    } else if (r.type === 'shapeless' || r.type === 'cook') {
      body = '<div class="ings">' + groupIngredients(r.ingredients).map(function (g) { return slot(g[0], g[1]); }).join('') + '</div><span class="arrow">➜</span>' + resultSlot(r);
    } else if (r.type === 'pot') {
      var ings = groupIngredients(r.ingredients).map(function (g) { return slot(g[0], g[1]); }).join('');
      if (r.tool) ings += slot(r.tool);
      body = '<div class="ings">' + ings + '</div><span class="arrow">➜</span>' + resultSlot(r);
      note = '<div class="note">' + esc(t('liquid' + (r.liquid || 0))) + (r.special === 'cream' ? ' — ' + esc(t('flintNote')) : '') + '</div>';
    }
    return '<div class="recipe">' + head + '<div class="recipe-body">' + body + '</div>' + note + '</div>';
  }

  /* ===== texto do guia (códigos de cor do jogo) ===== */
  function mcText(s) {
    // destaca comandos antes de criar as tags de cor, para não casar com "</span>"
    var safe = esc(s).replace(/(^|[\s(])(\/(?:recipebooklang|recipebook|pot)(?:\s(?:list|all|&lt;[a-z]+&gt;))?)/g, '$1<code>$2</code>');
    var out = '', parts = safe.split(/§6/);
    parts.forEach(function (p, i) {
      if (i === 0) { out += p.replace(/§./g, ''); return; }
      var k = p.indexOf('§r');
      if (k < 0) out += '<span class="gold">' + p.replace(/§./g, '') + '</span>';
      else out += '<span class="gold">' + p.slice(0, k).replace(/§./g, '') + '</span>' + p.slice(k + 2).replace(/§./g, '');
    });
    return out.replace(/\n/g, '<br>');
  }

  /* ===== páginas ===== */
  function pageHome() {
    var n = [Object.keys(D.items).length, D.recipes.length, D.plants.length];
    var cards = [['items', '#/items', '🍎', 'homeItems'], ['recipes', '#/recipes', '📜', 'homeRecipes'], ['plants', '#/plants', '🌱', 'homePlants'],
      ['pot', '#/pot', '🍲', 'homePot'], ['guide', '#/guide', '📖', 'homeGuide'], ['commands', '#/commands', '⌨️', 'homeCmds']];
    return '<section class="hero"><img src="img/logo.png" alt=""><div><h1>Culinary Farmer\'s</h1><p>' + esc(t('welcome')) + '</p>' +
      '<div class="stats"><span class="stat"><b>' + n[0] + '</b>' + t('nItems') + '</span><span class="stat"><b>' + n[1] + '</b>' + t('nRecipes') +
      '</span><span class="stat"><b>' + n[2] + '</b>' + t('nPlants') + '</span><span class="stat">' + t('version') + ' <b>' + esc(D.meta.version) + '</b></span></div></div></section>' +
      '<h2>' + esc(t('guide')) + '</h2><div class="cards">' + cards.map(function (c) {
        return '<a class="card" href="' + c[1] + '"><span class="big">' + c[2] + '</span><div><h3>' + esc(t(c[0])) + '</h3><p>' + esc(t(c[3])) + '</p></div></a>';
      }).join('') + '</div>';
  }

  function tile(id) {
    var it = D.items[id];
    var img = it.icon ? '<img src="' + it.icon + '" alt="" loading="lazy" width="56" height="56">' : '<span class="ph">?</span>';
    return '<a class="tile" href="#/item/' + encodeURIComponent(id) + '">' + img + '<span>' + esc(nm(it.name)) + '</span></a>';
  }
  function sortedIds(filter) {
    return Object.keys(D.items).filter(filter || function () { return true; }).sort(function (a, b) { return nm(D.items[a].name).localeCompare(nm(D.items[b].name), LANG); });
  }

  function pageItems(arg) {
    var cur = arg || 'all', counts = {};
    Object.keys(D.items).forEach(function (id) { var g = D.items[id].group; counts[g] = (counts[g] || 0) + 1; });
    var chips = '<a class="chip' + (cur === 'all' ? ' on' : '') + '" href="#/items">' + esc(t('all')) + ' (' + Object.keys(D.items).length + ')</a>' +
      Object.keys(counts).sort(function (a, b) { return nm(D.groups[a]).localeCompare(nm(D.groups[b]), LANG); }).map(function (g) {
        return '<a class="chip' + (cur === g ? ' on' : '') + '" href="#/items/' + encodeURIComponent(g) + '">' + esc(nm(D.groups[g])) + ' (' + counts[g] + ')</a>';
      }).join('');
    var ids = sortedIds(function (id) { return cur === 'all' || D.items[id].group === cur; });
    return '<h1>' + esc(t('items')) + '</h1><div class="chips">' + chips + '</div><div class="grid">' + ids.map(tile).join('') + '</div>';
  }

  function pageItem(id) {
    var it = D.items[id];
    if (!it) return '<p class="empty">' + esc(t('none')) + '</p>';
    var facts = '<span class="fact">' + esc(t('group')) + ': <b>' + esc(nm(D.groups[it.group] || { pt: it.group })) + '</b></span>';
    if (it.food) facts += '<span class="fact">' + esc(t('hunger')) + ': <b>' + it.food.nutrition + '</b></span><span class="fact">' + esc(t('saturation')) + ': <b>' + it.food.saturation + '</b></span>';
    if (it.stack) facts += '<span class="fact">' + esc(t('stack')) + ': <b>' + it.stack + '</b></span>';
    var html = '<div class="crumbs"><a href="#/items">' + esc(t('items')) + '</a> › <a href="#/items/' + encodeURIComponent(it.group) + '">' + esc(nm(D.groups[it.group] || { pt: it.group })) + '</a></div>' +
      '<div class="item-head"><div class="bigicon">' + (it.icon ? '<img src="' + it.icon + '" alt="">' : '') + '</div><div><h1>' + esc(nm(it.name)) + '</h1><div class="facts">' + facts + '</div></div></div>';

    var made = D.recipes.filter(function (r) { return r.result === id; });
    var used = D.recipes.filter(function (r) { return r.ingredients.indexOf(id) >= 0 && r.result !== id; });
    var plants = D.plants.filter(function (p) { return p.seed === id || p.product === id; });
    var trades = D.trades.filter(function (tr) { return tr.wants.concat(tr.gives).some(function (x) { return x[0] === id; }); });

    if (made.length) html += '<h2>' + esc(t('howGet')) + '</h2>' + made.map(function (r) { return recipeHTML(r); }).join('');
    if (plants.length) html += '<h2>' + esc(t('plants')) + '</h2><ul class="how">' + plants.map(function (p) { return '<li><a href="#/plants">' + esc(nm(p.name)) + '</a></li>'; }).join('') + '</ul>';
    if (trades.length) html += '<h2>' + esc(t('trades')) + '</h2>' + trades.map(tradeHTML).join('');
    if (used.length) html += '<h2>' + esc(t('usedIn')) + ' (' + used.length + ')</h2>' + used.map(function (r) { return recipeHTML(r, true); }).join('');
    if (!made.length && !plants.length && !trades.length && !used.length) html += '<p class="empty">—</p>';
    return html;
  }
  function tradeHTML(tr) {
    var side = function (l) { return l.map(function (x) { return slot(x[0], x[1]); }).join(''); };
    return '<div class="recipe"><div class="recipe-head"><div class="rname">' + esc(t('trade')) + '</div><span class="station">' + esc(tr.profession.replace('_trades', '').replace(/_/g, ' ')) + ' · ' + esc(t('tier')) + ' ' + tr.tier + '</span></div>' +
      '<div class="recipe-body"><div class="ings">' + side(tr.wants) + '</div><span class="arrow">➜</span><div class="ings">' + side(tr.gives) + '</div></div></div>';
  }

  function pageRecipes(arg) {
    var cur = arg || 'all', stations = {};
    D.recipes.forEach(function (r) { stations[r.station] = (stations[r.station] || 0) + 1; });
    var chips = '<a class="chip' + (cur === 'all' ? ' on' : '') + '" href="#/recipes">' + esc(t('all')) + ' (' + D.recipes.length + ')</a>' +
      Object.keys(STATIONS).filter(function (s) { return stations[s]; }).map(function (s) {
        return '<a class="chip' + (cur === s ? ' on' : '') + '" href="#/recipes/' + s + '">' + esc(nm(STATIONS[s])) + ' (' + stations[s] + ')</a>';
      }).join('');
    var list = D.recipes.filter(function (r) { return cur === 'all' || r.station === cur; })
      .sort(function (a, b) { return resultName(a).localeCompare(resultName(b), LANG); });
    return '<h1>' + esc(t('recipes')) + '</h1><div class="chips">' + chips + '</div><div class="rlist">' + list.map(function (r) { return recipeHTML(r, !!r.result); }).join('') + '</div>';
  }

  function worldText(w) {
    if (!w) return esc(t('worldNone'));
    var names = function (a) { return a.map(function (b) { return nm(D.biomes[b]); }); };
    var s = names(w.in).join(w.mode === 'all' ? ' + ' : ' / ');
    if (w.out && w.out.length) s += ' (' + esc(t('growsNot')) + ' ' + names(w.out).join(', ') + ')';
    return esc(s);
  }
  function pagePlants() {
    var kinds = { crop: 'kindcrop', bush: 'kindbush', tree: 'kindtree', other: 'kindother' };
    return '<h1>' + esc(t('plants')) + '</h1><p class="sub">' + esc(t('homePlants')) + '</p><div class="plants">' + D.plants.map(function (p) {
      var row = '';
      if (p.seed) row += '<div class="row"><b>' + esc(t('seed')) + ':</b> ' + slot(p.seed) + '</div>';
      if (p.product) row += '<div class="row"><b>' + esc(t('yields')) + ':</b> ' + slot(p.product) + '</div>';
      row += '<div class="row"><b>' + esc(t('grows')) + ':</b> ' + worldText(p.world) + '</div>';
      var big = p.icon ? '<span class="slot" style="width:64px;height:64px"><img src="' + p.icon + '" alt="" style="width:44px;height:44px"></span>' : '';
      return '<div class="plant">' + big + '<div class="info"><div class="kind">' + esc(t(kinds[p.kind] || 'kindother')) + '</div><h3>' + esc(nm(p.name)) + '</h3>' + row + '</div></div>';
    }).join('') + '</div>';
  }

  function guidePages(ch) {
    return ch.pages.map(function (p) {
      return '<article class="page"><h3>' + esc(nm(p.title)) + '</h3><div class="txt">' + mcText(nm(p.body)) + '</div></article>';
    }).join('');
  }
  function pagePot() {
    var pots = D.recipes.filter(function (r) { return r.type === 'pot'; });
    var ch = D.guide.filter(function (c) { return c.id === 'pot'; })[0];
    return '<h1>' + esc(t('potTitle')) + '</h1><p class="sub">' + esc(t('potIntro')) + '</p>' + (ch ? guidePages(ch) : '') +
      '<h2>' + esc(t('recipes')) + ' (' + pots.length + ')</h2><div class="rlist">' + pots.map(function (r) { return recipeHTML(r, !!r.result); }).join('') + '</div>';
  }
  function pageGuide(arg) {
    var cur = arg || D.guide[0].id, ch = D.guide.filter(function (c) { return c.id === cur; })[0] || D.guide[0];
    var side = D.guide.map(function (c) { return '<a class="' + (c.id === ch.id ? 'on' : '') + '" href="#/guide/' + c.id + '">' + esc(nm(c.title)) + '</a>'; }).join('');
    return '<h1>' + esc(t('guideTitle')) + '</h1><p class="sub">' + esc(t('guideSub')) + '</p><div class="guide"><nav class="side">' + side + '</nav><div>' + guidePages(ch) + '</div></div>';
  }
  function pageCommands() {
    var rows = [['/pot &lt;' + (LANG === 'pt' ? 'receita' : 'recipe') + '&gt;', 'cmdPot'], ['/pot list', 'cmdPotList'], ['/pot all', 'cmdPotAll'],
      ['/recipebook', 'cmdBook'], ['/recipebooklang &lt;' + (LANG === 'pt' ? 'idioma' : 'language') + '&gt;', 'cmdLang']];
    return '<h1>' + esc(t('commands')) + '</h1><p class="sub">' + esc(t('cmdIntro')) + '</p>' +
      rows.map(function (r) { return '<div class="cmdbox"><span class="cmd">' + r[0] + '</span><p class="muted">' + esc(t(r[1])) + '</p></div>'; }).join('');
  }
  function pageSearch(q) {
    q = decodeURIComponent(q || '').trim();
    var low = q.toLowerCase();
    var ids = sortedIds(function (id) { return nm(D.items[id].name).toLowerCase().indexOf(low) >= 0 || id.toLowerCase().indexOf(low) >= 0; });
    var recs = D.recipes.filter(function (r) { return resultName(r).toLowerCase().indexOf(low) >= 0; });
    var pls = D.plants.filter(function (p) { return nm(p.name).toLowerCase().indexOf(low) >= 0; });
    var html = '<h1>' + esc(t('results')) + ' “' + esc(q) + '”</h1>';
    if (!q || (!ids.length && !recs.length && !pls.length)) return html + '<p class="empty">' + esc(t('none')) + '</p>';
    if (ids.length) html += '<h2>' + esc(t('items')) + ' (' + ids.length + ')</h2><div class="grid">' + ids.map(tile).join('') + '</div>';
    if (pls.length) html += '<h2>' + esc(t('plants')) + '</h2><div class="chips">' + pls.map(function (p) { return '<a class="chip" href="#/plants">' + esc(nm(p.name)) + '</a>'; }).join('') + '</div>';
    if (recs.length) html += '<h2>' + esc(t('recipes')) + ' (' + recs.length + ')</h2><div class="rlist">' + recs.slice(0, 20).map(function (r) { return recipeHTML(r, !!r.result); }).join('') + '</div>';
    return html;
  }

  /* ===== roteador ===== */
  var ROUTES = { '': pageHome, items: pageItems, item: pageItem, recipes: pageRecipes, plants: pagePlants, pot: pagePot, guide: pageGuide, commands: pageCommands, search: pageSearch };
  function render() {
    if (!D) return;
    var parts = location.hash.replace(/^#\/?/, '').split('/');
    var route = parts[0], arg = parts.slice(1).join('/');
    if (route === 'item' || route === 'items') arg = decodeURIComponent(arg);
    var fn = ROUTES[route] || pageHome;
    $('#app').innerHTML = fn(arg);
    document.title = 'Culinary Farmer\'s — Wiki';
    var h1 = $('#app h1'); if (h1 && route !== '') document.title = h1.textContent + ' · Culinary Farmer\'s';
    var tab = route === 'item' ? 'items' : (route === 'search' ? '' : (route || 'home'));
    document.querySelectorAll('#tabs a').forEach(function (a) { a.classList.toggle('on', a.dataset.t === tab); });
    if (route !== 'search') window.scrollTo(0, 0);
  }

  function chrome() {
    document.documentElement.lang = LANG === 'pt' ? 'pt-BR' : 'en';
    $('#q').placeholder = t('search');
    $('#tabs').innerHTML = TABS.map(function (x) { return '<a data-t="' + x[0] + '" href="' + x[1] + '">' + esc(t(x[0])) + '</a>'; }).join('');
    document.querySelectorAll('.lang button').forEach(function (b) { b.classList.toggle('on', b.dataset.lang === LANG); });
    $('#foot').innerHTML = '<div class="links">' + LINKS.map(function (l) { return '<a href="' + l.url + '" target="_blank" rel="noopener">' + esc(l.name) + '</a>'; }).join('') + '</div>' +
      '<div>' + esc(t('madeBy')) + ' · ' + esc(t('version')) + ' ' + esc(D.meta.version) + ' · ' + esc(t('updated')) + ' ' + esc(D.meta.generated) + '</div><div>' + esc(t('notAffil')) + '</div>';
  }

  function setLang(l) { LANG = l; store('cf-lang', l); chrome(); render(); }

  function start() {
    var saved = store('cf-lang');
    LANG = saved === 'pt' || saved === 'en' ? saved : (/^pt/i.test(navigator.language || '') ? 'pt' : 'en');
    document.querySelectorAll('.lang button').forEach(function (b) { b.addEventListener('click', function () { setLang(b.dataset.lang); }); });
    var timer;
    $('#q').addEventListener('input', function (e) {
      clearTimeout(timer); var v = e.target.value.trim();
      timer = setTimeout(function () { if (v) location.hash = '#/search/' + encodeURIComponent(v); else if (/^#\/search/.test(location.hash)) location.hash = '#/'; }, 200);
    });
    window.addEventListener('hashchange', render);
    chrome(); render();
  }

  fetch('data/wiki.json').then(function (r) { return r.json(); }).then(function (d) { D = d; start(); })
    .catch(function () { $('#app').innerHTML = '<p class="empty">Não foi possível carregar os dados da wiki. / Could not load wiki data.</p>'; });
})();
