google.load("visualization", "1", {packages: ["corechart", "treemap", "timeline","calendar"]});
google.charts.setOnLoadCallback(drawChart1);
google.charts.setOnLoadCallback(drawChart2);
google.charts.setOnLoadCallback(drawChart3);
google.charts.setOnLoadCallback(drawChart4);
google.charts.setOnLoadCallback(drawChart5);
google.charts.setOnLoadCallback(drawChart6);
google.charts.setOnLoadCallback(drawChart7);
google.charts.setOnLoadCallback(drawChart8);
// Chart 1: Age at Death
function drawChart1() {
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1PzmQ1IlplTBZiEftG7tHTAaJyA1yyoZjJGBDjCfGMtE/gviz/tq?range=A:B&headers=1&gid=0');
  query.send(handleQueryResponse);

  function handleQueryResponse(response) {
    var data = response.getDataTable();
    var options = {
      title: 'Age at Death',
      'hAxis': {
        'title': 'age',
        ticks: [25,40,65,90]
      },
      'legend': {
        position: 'none'
      },
      'vAxis': {
        format: 'short',
        title: 'deaths'
      }
    }
    var chart = new google.visualization.ColumnChart(document.getElementById('ageAtDeath'));
    chart.draw(data, options);
  }
}

// Chart 2: Rank at Death
function drawChart2() {
 var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1PzmQ1IlplTBZiEftG7tHTAaJyA1yyoZjJGBDjCfGMtE/gviz/tq?range=D:E&headers=1&gid=0');
  query.send(handleQueryResponse);

function handleQueryResponse(response) {
  var data = response.getDataTable();
  var options = {title: 'Rank at Death'}
  var chart = new google.visualization.PieChart(document.getElementById('rankAtDeath'));
  chart.draw(data, options);
}
}

// Chart 3: Collection Sizes
function drawChart3() {
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1PzmQ1IlplTBZiEftG7tHTAaJyA1yyoZjJGBDjCfGMtE/gviz/tq?range=G:H&headers=1&gid=0');
  query.send(handleQueryResponse);

  function handleQueryResponse(response) {
    var data = response.getDataTable();
    var options = {
      title: 'Collection Sizes'
    }
    var chart = new google.visualization.PieChart(document.getElementById('collSize'));
    chart.draw(data, options);
  }
}

//Chart 4 Enlistment Date WW1
function drawChart4(){
 var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1PzmQ1IlplTBZiEftG7tHTAaJyA1yyoZjJGBDjCfGMtE/gviz/tq?range=R:S&headers=1&gid=0');
  query.send(handleQueryResponse);

function handleQueryResponse(response) {
  var data = response.getDataTable();
  var options = {
    title: 'Enlistment Date WW1',
    legend: {position: 'none'},
    vAxis: {ticks: [0,50,100]},
    hAxis: {ticks: [new Date(1914,6,28), new Date(1916,11,28), new Date(1918,4,11)] }
  }
  var chart = new google.visualization.ColumnChart(document.getElementById('enlistdate'));
  chart.draw(data, options);
}
}

//Chart 5: Trees of NS coll relative sizes
function drawChart5() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'ID');
    data.addColumn('string', 'Parent');
    data.addColumn('number', 'Number Of Lines');
    data.addRows([
        ['Natural Science', null, 0],

        ['Birds/Land Vertebrates', 'Natural Science', null],
        ['Botany', 'Natural Science', null],


        ['Dacelo', 'Alcedinidae', 3],
        ['Acridotheres', 'Sturnidae', 1],
        ['Nestor', 'Strigopidae', 5],
        ['Porzana', 'Rallidae', 4],
        ['Gallus', 'Phasianidae', 1],
        ['Puffinus', 'Procellariidae', 5],
        ['Pachyptila', 'Procellariidae', 13],
        ['Poliocephalus', 'Podicipedidae', 1],
        ['Notiomystis', 'Notiomystidae', 3],
        ['Carduelis', 'Fringillidae', 4],
        ['Larus', 'Laridae', 7],
        ['Strigops', 'Strigopidae', 3],
        ['Clytorhynchus', 'Dicruridae', 1],
        ['Accipiter', 'Accipitridae', 1],
        ['Phalacrocorax', 'Phalacrocoracidae', 6],
        ['Thalassarche', 'Diomedeidae', 3],
        ['Nycticorax', 'Ardeidae', 1],
        ['Dinornis', 'Dinornithidae', 5],
        ['Charadrius', 'Charadriidae', 4],
        ['Pterodroma', 'Procellariidae', 4],
        ['Pygoscelis', 'Spheniscidae', 1],
        ['Lugensa', 'Procellariidae', 1],
        ['Pagodroma', 'Procellariidae', 1],
        ['Paroaria', 'Emberizidae', 1],
        ['Dromas', 'Dromadidae', 1],
        ['Turnagra', 'Ptilonorhynchidae', 1],
        ['Anas', 'Anatidae', 6],
        ['Petroica', 'Petroicidae', 4],
        ['Phaethon', 'Phaethontidae', 2],
        ['Cyanoramphus', 'Psittacidae', 4],
        ['Cygnus', 'Anatidae', 3],
        ['Procellaria', 'Procellariidae', 1],
        ['Ducula', 'Columbidae', 2],
        ['Anomalopteryx', 'Emeidae', 1],
        ['Corvus', 'Corvidae', 2],
        ['Todiramphus', 'Alcedinidae', 6],
        ['Leucocarbo', 'Phalacrocoracidae', 1],
        ['Numenius', 'Scolopacidae', 1],
        ['Bowdleria', 'Sylviidae', 4],
        ['Sterna', 'Sternidae', 3],
        ['Pericrocotus', 'Campephagidae', 1],
        ['Stictocarbo', 'Phalacrocoracidae', 4],
        ['Porphyrio', 'Rallidae', 3],
        ['Diomedea', 'Diomedeidae', 1],
        ['Fulmarus', 'Procellariidae', 1],
        ['Parus', 'Paridae', 2],
        ['Riparia', 'Hirundinidae', 1],
        ['Pica', 'Corvidae', 2],
        ['Anthus', 'Motacillidae', 2],
        ['Emeus', 'Emeidae', 1],
        ['Prosthemadera', 'Meliphagidae', 2],
        ['Haematopus', 'Haematopodidae', 2],
        ['Philesturnus', 'Callaeidae', 4],
        ['Strepera', 'Artamidae', 1],
        ['Gallirallus', 'Rallidae', 5],
        ['Uria', 'Alcidae', 1],
        ['Zosterops', 'Zosteropidae', 1],
        ['Coracina', 'Campephagidae', 1],
        ['Paradisaea', 'Paradisaeidae', 1],
        ['Parula', 'Parulidae', 1],
        ['Egretta', 'Ardeidae', 2],
        ['Philemon', 'Meliphagidae', 1],
        ['Gygis', 'Sternidae', 2],
        ['Ardea', 'Ardeidae', 1],
        ['Ardeola', 'Ardeidae', 1],
        ['Hydroprogne', 'Sternidae', 1],
        ['Eudyptula', 'Spheniscidae', 4],
        ['Turdus', 'Turdidae', 5],
        ['Didunculus', 'Columbidae', 1],
        ['Sylvia', 'Sylviidae', 1],
        ['Apteryx', 'Apterygidae', 6],
        ['Heteralocha', 'Callaeidae', 1],
        ['Morus', 'Sulidae', 1],
        ['Thinornis', 'Charadriidae', 1],
        ['Tringa', 'Scolopacidae', 1],
        ['Megalaima', 'Capitonidae', 1],
        ['Stercorarius', 'Stercorariidae', 1],
        ['Picoides', 'Picidae', 2],
        ['Agelaius', 'Icteridae', 1],
        ['Pelecanus', 'Pelecanidae', 1],
        ['Fringilla', 'Fringillidae', 1],
        ['Mohoua', 'Pachycephalidae', 2],
        ['Pluvialis', 'Charadriidae', 1],
        ['Megapodius', 'Megapodiidae', 1],
        ['Vini', 'Loridae', 1],
        ['Chrysolophus', 'Phasianidae', 1],
        ['Pachycephala', 'Pachycephalidae', 1],
        ['Aceros', 'Bucerotidae', 1],
        ['Sericulus', 'Ptilonorhynchidae', 1],
        ['Pachyornis', 'Emeidae', 1],
        ['Balearica', 'Gruidae', 1],
        ['Catharus', 'Turdidae', 1],
        ['Ptilinopus', 'Columbidae', 1],
        ['Sturnus', 'Sturnidae', 1],
        ['Emberiza', 'Emberizidae', 2],
        ['Streptopelia', 'Columbidae', 1],
        ['Gerygone', 'Acanthizidae', 1],
        ['Boissonneaua', 'Trochilidae', 1],
        ['Cereopsis', 'Anatidae', 1],
        ['Himantopus', 'Recurvirostridae', 2],
        ['Euryapteryx', 'Emeidae', 1],
        ['Passer', 'Passeridae', 1],
        ['Origma', 'Acanthizidae', 1],
        ['Butorides', 'Ardeidae', 1],
        ['Dicrurus', 'Dicruridae', 1],
        ['Tanysiptera', 'Alcedinidae', 1],
        ['Nectarinia', 'Nectariniidae', 1],
        ['Lanius', 'Laniidae', 1],
        ['Limosa', 'Scolopacidae', 3],
        ['Francolinus', 'Phasianidae', 1],
        ['Anthornis', 'Meliphagidae', 2],
        ['Athene', 'Strigidae', 1],
        ['Sula', 'Sulidae', 2],
        ['Foulehaio', 'Meliphagidae', 1],
        ['Streptocitta', 'Sturnidae', 1],
        ['Gallicolumba', 'Columbidae', 1],
        ['Grallina', 'Dicruridae', 1],
        ['Eudynamys', 'Cuculidae', 1],
        ['Botaurus', 'Ardeidae', 1],
        ['Pheucticus', 'Emberizidae', 1],
        ['Lophura', 'Phasianidae', 1],
        ['Podiceps', 'Podicipedidae', 1],
        ['Pycnonotus', 'Pycnonotidae', 1],
        ['Hirundo', 'Hirundinidae', 1],
        ['Aplonis', 'Sturnidae', 1],
        ['Fulica', 'Rallidae', 1],
        ['Oriolus', 'Oriolidae', 2],
        ['Haliaeetus', 'Accipitridae', 1],
        ['Eudyptes', 'Spheniscidae', 1],
        ['Catharacta', 'Stercorariidae', 1],
        ['Macronectes', 'Procellariidae', 2],
        ['Gymnorhina', 'Artamidae', 2],
        ['Platycercus', 'Psittacidae', 1],
        ['Acanthisitta', 'Acanthisittidae', 1],
        ['Tadorna', 'Anatidae', 1],
        ['Gavia', 'Gaviidae', 1],
        ['Rhipidura', 'Dicruridae', 2],

        ['Acanthisittidae', 'Birds/Land Vertebrates', 1],
        ['Acanthizidae', 'Birds/Land Vertebrates', 2],
        ['Accipitridae', 'Birds/Land Vertebrates', 2],
        ['Alcedinidae', 'Birds/Land Vertebrates', 10],
        ['Alcidae', 'Birds/Land Vertebrates', 1],
        ['Anatidae', 'Birds/Land Vertebrates', 11],
        ['Apterygidae', 'Birds/Land Vertebrates', 6],
        ['Ardeidae', 'Birds/Land Vertebrates', 7],
        ['Artamidae', 'Birds/Land Vertebrates', 3],
        ['Bucerotidae', 'Birds/Land Vertebrates', 1],
        ['Callaeidae', 'Birds/Land Vertebrates', 5],
        ['Campephagidae', 'Birds/Land Vertebrates', 2],
        ['Capitonidae', 'Birds/Land Vertebrates', 1],
        ['Charadriidae', 'Birds/Land Vertebrates', 6],
        ['Columbidae', 'Birds/Land Vertebrates', 6],
        ['Corvidae', 'Birds/Land Vertebrates', 4],
        ['Cuculidae', 'Birds/Land Vertebrates', 1],
        ['Dicruridae', 'Birds/Land Vertebrates', 5],
        ['Dinornithidae', 'Birds/Land Vertebrates', 5],
        ['Diomedeidae', 'Birds/Land Vertebrates', 4],
        ['Dromadidae', 'Birds/Land Vertebrates', 1],
        ['Emberizidae', 'Birds/Land Vertebrates', 4],
        ['Emeidae', 'Birds/Land Vertebrates', 4],
        ['Fringillidae', 'Birds/Land Vertebrates', 5],
        ['Gaviidae', 'Birds/Land Vertebrates', 1],
        ['Gruidae', 'Birds/Land Vertebrates', 1],
        ['Haematopodidae', 'Birds/Land Vertebrates', 2],
        ['Hirundinidae', 'Birds/Land Vertebrates', 2],
        ['Icteridae', 'Birds/Land Vertebrates', 1],
        ['Laniidae', 'Birds/Land Vertebrates', 1],
        ['Laridae', 'Birds/Land Vertebrates', 7],
        ['Loridae', 'Birds/Land Vertebrates', 1],
        ['Megapodiidae', 'Birds/Land Vertebrates', 1],
        ['Meliphagidae', 'Birds/Land Vertebrates', 6],
        ['Motacillidae', 'Birds/Land Vertebrates', 2],
        ['Nectariniidae', 'Birds/Land Vertebrates', 1],
        ['Notiomystidae', 'Birds/Land Vertebrates', 3],
        ['Oriolidae', 'Birds/Land Vertebrates', 2],
        ['Pachycephalidae', 'Birds/Land Vertebrates', 3],
        ['Paradisaeidae', 'Birds/Land Vertebrates', 1],
        ['Paridae', 'Birds/Land Vertebrates', 2],
        ['Parulidae', 'Birds/Land Vertebrates', 1],
        ['Passeridae', 'Birds/Land Vertebrates', 1],
        ['Pelecanidae', 'Birds/Land Vertebrates', 1],
        ['Petroicidae', 'Birds/Land Vertebrates', 4],
        ['Phaethontidae', 'Birds/Land Vertebrates', 2],
        ['Phalacrocoracidae', 'Birds/Land Vertebrates', 11],
        ['Phasianidae', 'Birds/Land Vertebrates', 4],
        ['Picidae', 'Birds/Land Vertebrates', 2],
        ['Ploceidae', 'Birds/Land Vertebrates', 1],
        ['Podicipedidae', 'Birds/Land Vertebrates', 2],
        ['Procellariidae', 'Birds/Land Vertebrates', 28],
        ['Psittacidae', 'Birds/Land Vertebrates', 5],
        ['Ptilonorhynchidae', 'Birds/Land Vertebrates', 2],
        ['Pycnonotidae', 'Birds/Land Vertebrates', 1],
        ['Rallidae', 'Birds/Land Vertebrates', 13],
        ['Recurvirostridae', 'Birds/Land Vertebrates', 2],
        ['Scolopacidae', 'Birds/Land Vertebrates', 5],
        ['Spheniscidae', 'Birds/Land Vertebrates', 6],
        ['Stercorariidae', 'Birds/Land Vertebrates', 2],
        ['Sternidae', 'Birds/Land Vertebrates', 6],
        ['Strigidae', 'Birds/Land Vertebrates', 1],
        ['Strigopidae', 'Birds/Land Vertebrates', 8],
        ['Sturnidae', 'Birds/Land Vertebrates', 4],
        ['Sulidae', 'Birds/Land Vertebrates', 3],
        ['Sylviidae', 'Birds/Land Vertebrates', 5],
        ['Trochilidae', 'Birds/Land Vertebrates', 1],
        ['Turdidae', 'Birds/Land Vertebrates', 6],
        ['Zosteropidae', 'Birds/Land Vertebrates', 1],

        ['Cenchrus', 'Poaceae', 2],
        ['Notogrammitis', 'Polypodiaceae', 1],
        ['Cordyline', 'Agavaceae', 1],
        ['Hymenophyllum', 'Hymenophyllaceae', 6],
        ['Alectryon', 'Sapindaceae', 1],
        ['Podocarpus', 'Podocarpaceae', 1],
        ['Poa', 'Poaceae', 6],
        ['Correa', 'Rutaceae', 1],
        ['Potamogeton', 'Potamogetonaceae', 1],
        ['Araucaria', 'Araucariaceae', 1],
        ['Heterodermia', 'Physciaceae', 3],
        ['Hydrocotyle', 'Apiaceae', 4],
        ['Zonaria', 'Dictyotaceae', 2],
        ['Tayloria', 'Splachnaceae', 1],
        ['Deschampsia', 'Poaceae', 1],
        ['Uncinia', 'Cyperaceae', 2],
        ['Achillea', 'Asteraceae', 1],
        ['Pterostylis', 'Orchidaceae', 2],
        ['Tibouchina', 'Melastomataceae', 1],
        ['Lycopodium', 'Lycopodiaceae', 1],
        ['Canavalia', 'Fabaceae', 1],
        ['Cyathea', 'Cyatheaceae', 1],
        ['Hedychium', 'Zingiberaceae', 1],
        ['Leucanthemum', 'Asteraceae', 1],
        ['Ramalina', 'Ramalinaceae', 1],
        ['Isopterygium', 'Plagiotheciaceae', 1],
        ['Eryngium', 'Apiaceae', 1],
        ['Callistachys', 'Fabaceae', 1],
        ['Asphodelus', 'Liliaceae', 1],
        ['Lepidium', 'Brassicaceae', 1],
        ['Stereocaulon', 'Stereocaulaceae', 1],
        ['Orthoceras', 'Orchidaceae', 1],
        ['Solanum', 'Solanaceae', 3],
        ['Psidium', 'Myrtaceae', 1],
        ['Parmelia', 'Parmeliaceae', 1],
        ['Cytisus', 'Fabaceae', 1],
        ['Azolla', 'Salviniaceae', 1],
        ['Pseudotaxiphyllum', 'Hypnaceae', 1],
        ['Hebe', 'Scrophulariaceae', 2],
        ['Petalochilus', 'Orchidaceae', 1],
        ['Chiloglottis', 'Orchidaceae', 1],
        ['Dacrycarpus', 'Podocarpaceae', 1],
        ['Aporostylis', 'Orchidaceae', 1],
        ['Neofuscelia', 'Parmeliaceae', 1],
        ['Coprosma', 'Rubiaceae', 6],
        ['Blechnum', 'Blechnaceae', 3],
        ['Sticta', 'Stictaceae', 2],
        ['Carex', 'Cyperaceae', 4],
        ['Myriophyllum', 'Haloragaceae', 1],
        ['Dahlia', 'Asteraceae', 2],
        ['Wijkia', 'Sematophyllaceae', 1],
        ['Acer', 'Aceraceae', 1],
        ['Achlys', 'Berberidaceae', 1],
        ['Weissia', 'Pottiaceae', 1],
        ['Typha', 'Typhaceae', 1],
        ['Eucalyptus', 'Myrtaceae', 2],
        ['Cladonia', 'Cladoniaceae', 5],
        ['Coenogonium', 'Gyalectaceae', 1],
        ['Nertera', 'Rubiaceae', 2],
        ['Myriogramme', 'Delesseriaceae', 1],
        ['Papaver', 'Papaveraceae', 1],
        ['Rhacocarpus', 'Hedwigiaceae', 1],
        ['Nephroma', 'Nephromataceae', 1],
        ['Paesia', 'Dennstaedtiaceae', 1],
        ['Stellaria', 'Caryophyllaceae', 2],
        ['Thelymitra', 'Orchidaceae', 2],
        ['Austrohondaella', 'Hypnaceae', 1],
        ['Racopilum', 'Racopilaceae', 2],
        ['Eschscholzia', 'Papaveraceae', 1],
        ['Doodia', 'Blechnaceae', 1],
        ['Symphyotrichum', 'Asteraceae', 1],
        ['Pisonia', 'Nyctaginaceae', 1],
        ['Pilayella', 'Ectocarpaceae', 1],
        ['Polystichum', 'Dryopteridaceae', 2],
        ['Callophyllis', 'Kallymeniaceae', 1],
        ['Paracromastigum', 'Lepidoziaceae', 2],
        ['Metrosideros', 'Myrtaceae', 48],
        ['Schoenus', 'Cyperaceae', 3],
        ['Ranunculus', 'Ranunculaceae', 2],
        ['Colobanthus', 'Caryophyllaceae', 1],
        ['Aster', 'Asteraceae', 1],
        ['Parmotrema', 'Parmeliaceae', 1],
        ['Senecio', 'Asteraceae', 3],
        ['Coccocarpia', 'Coccocarpiaceae', 1],
        ['Brugmansia', 'Solanaceae', 1],
        ['Planchonella', 'Sapotaceae', 2],
        ['Trigonella', 'Fabaceae', 1],
        ['Astragalus', 'Fabaceae', 1],
        ['Anarthrophyllum', 'Fabaceae', 1],
        ['Carpobrotus', 'Aizoaceae', 1],
        ['Hypolepis', 'Dennstaedtiaceae', 4],
        ['Peraxilla', 'Loranthaceae', 1],
        ['Canalohypopterygium', 'Hypopterygiaceae', 1],
        ['Dicranoloma', 'Dicranaceae', 2],
        ['Aciphylla', 'Apiaceae', 1],
        ['Leptopteris', 'Osmundaceae', 1],
        ['Cora', 'Thelephoraceae', 1],
        ['Oxalis', 'Oxalidaceae', 2],
        ['Campylium', 'Amblystegiaceae', 1],
        ['Pteris', 'Pteridaceae', 1],
        ['Lastreopsis', 'Dryopteridaceae', 2],
        ['Anomodon', 'Thuidiaceae', 1],
        ['Chionochloa', 'Poaceae', 1],
        ['Raukaua', 'Araliaceae', 1],
        ['Gahnia', 'Cyperaceae', 1],
        ['Gunnera', 'Gunneraceae', 1],
        ['Actinidia', 'Actinidiaceae', 1],
        ['Pteridium', 'Dennstaedtiaceae', 1],
        ['Chara', 'Characeae', 1],
        ['Dasya', 'Dasyaceae', 1],
        ['Chondracanthus', 'Gigartinaceae', 2],
        ['Rytidosperma', 'Poaceae', 2],
        ['Pseudocyphellaria', 'Lobariaceae', 1],
        ['Collema', 'Collemataceae', 1],
        ['Fissidens', 'Fissidentaceae', 1],
        ['Psoroma', 'Pannariaceae', 1],
        ['Crocodia', 'Lobariaceae', 1],
        ['Clematis', 'Ranunculaceae', 1],
        ['Adiantum', 'Pteridaceae', 2],
        ['Dipogon', 'Fabaceae', 1],
        ['Ulva', 'Ulvaceae', 3],
        ['Laurencia', 'Rhodomelaceae', 6],
        ['Lyngbya', 'Oscillatoriaceae', 1],
        ['Champia', 'Champiaceae', 1],
        ['Dictyota', 'Dictyotaceae', 1],
        ['Cladophora', 'Cladophoraceae', 1],
        ['Gelidium', 'Gelidiaceae', 1],
        ['Lophurella', 'Rhodomelaceae', 9],
        ['Sarcothalia', 'Gigartinaceae', 2],
        ['Grateloupia', 'Halymeniaceae', 2],
        ['Placentophora', 'Solieriaceae', 1],
        ['Polysiphonia', 'Rhodomelaceae', 9],
        ['Jania', 'Corallinaceae', 1],
        ['Helminthocladia', 'Helminthocladiaceae', 1],
        ['Gymnogongrus', 'Phyllophoraceae', 1],
        ['Gigartina', 'Gigartinaceae', 4],
        ['Gracilaria', 'Gracilariaceae', 1],
        ['Anredera', 'Basellaceae', 2],
        ['Rhodoglossum', 'Gigartinaceae', 1],
        ['Araujia', 'Asclepiadaceae', 1],
        ['Persicaria', 'Polygonaceae', 6],
        ['Ligustrum', 'Oleaceae', 1],
        ['Oenothera', 'Onagraceae', 1],
        ['Senna', 'Caesalpiniaceae', 1],
        ['Galium', 'Rubiaceae', 2],
        ['Artemisia', 'Asteraceae', 1],
        ['Melaleuca', 'Myrtaceae', 1],
        ['Chenopodium', 'Chenopodiaceae', 1],
        ['Arctotis', 'Asteraceae', 1],
        ['Bolboschoenus', 'Cyperaceae', 1],
        ['Polygonum', 'Polygonaceae', 1],
        ['Salix', 'Salicaceae', 2],
        ['Alisma', 'Alismataceae', 1],
        ['Centipeda', 'Asteraceae', 1],
        ['Rubus', 'Rosaceae', 1],
        ['Brogniartella', 'Rhodomelaceae', 5],
        ['Anthemis', 'Asteraceae', 1],
        ['Echinothamnion', 'Rhodomelaceae', 3],
        ['Muehlenbeckia', 'Polygonaceae', 2],
        ['Linaria', 'Scrophulariaceae', 1],
        ['Chamaesyce', 'Euphorbiaceae', 1],
        ['Epilobium', 'Onagraceae', 2],
        ['Sison', 'Apiaceae', 1],
        ['Melicope', 'Rutaceae', 1],
        ['Tsengia', 'Nemastomataceae', 1],
        ['Bostrychia', 'Rhodomelaceae', 1],
        ['Prionitis', 'Gloiosiphoniaeceae', 1],
        ['Hypericum', 'Hypericaceae', 1],
        ['Ceratophyllum', 'Ceratophyllaceae', 1],
        ['Agrostis', 'Poaceae', 1],
        ['Setaria', 'Poaceae', 1],
        ['Echinochloa', 'Poaceae', 2],
        ['Melothria', 'Cucurbitaceae', 1],
        ['Bidens', 'Asteraceae', 1],
        ['Entolasia', 'Poaceae', 1],
        ['Lythrum', 'Lythraceae', 1],
        ['Sida', 'Malvaceae', 1],
        ['Paspalum', 'Poaceae', 1],
        ['Cardamine', 'Brassicaceae', 1],
        ['Convallaria', 'Liliaceae', 1],
        ['Carduus', 'Asteraceae', 1],
        ['Herposiphonia', 'Rhodomelaceae', 1],
        ['Porphyra', 'Bangiaceae', 1],
        ['Chiloscyphus', 'Lophocoleaceae', 1],
        ['Telaranea', 'Lepidoziaceae', 1],
        ['Heteroscyphus', 'Lophocoleaceae', 2],
        ['Lamellocolea', 'Geocalycaceae', 1],
        ['Frullania', 'Jubulaceae', 2],
        ['Metalejeunea', 'Lejeuneaceae', 2],
        ['Pallavicinia', 'Hymenophytaceae', 2],
        ['Podomitrium', 'Hymenophytaceae', 1],
        ['Sambucus', 'Caprifoliaceae', 1],
        ['Oreobolus', 'Cyperaceae', 2],
        ['Salvia', 'Lamiaceae', 1],
        ['Pittosporum', 'Pittosporaceae', 2],
        ['Euchiton', 'Asteraceae', 1],
        ['Hymenophyton', 'Hymenophytaceae', 1],
        ['Passiflora', 'Passifloraceae', 1],
        ['Aphanocladia', 'Rhodomelaceae', 1],
        ['Leifidium', 'Sphaerophoraceae', 1],
        ['Splachnidium', 'Splachnidiaceae', 1],
        ['Asplenium', 'Aspleniaceae', 1],
        ['Aristotelia', 'Elaeocarpaceae', 1],
        ['Banksia', 'Proteaceae', 1],
        ['Eleocharis', 'Cyperaceae', 1],
        ['Scytosiphon', 'Scytosiphonaceae', 1],
        ['Ugni', 'Myrtaceae', 1],
        ['Megalospora', 'Megalosporaceae', 1],
        ['Leptinella', 'Asteraceae', 1],
        ['Radula', 'Radulaceae', 47],
        ['Lepidozia', 'Lepidoziaceae', 1],
        ['Lepidolaena', 'Lepidolaenaceae', 1],
        ['Ctenidium', 'Hypnaceae', 1],
        ['Calyptopogon', 'Pottiaceae', 2],
        ['Buddleja', 'Buddlejaceae', 1],
        ['Justicia', 'Acanthaceae', 1],
        ['Juncus', 'Juncaceae', 1],
        ['Vulpia', 'Poaceae', 1],
        ['Geniostoma', 'Geniostomaceae', 1],
        ['Hypochaeris', 'Asteraceae', 1],
        ['Ophioglossum', 'Ophioglossaceae', 1],
        ['Callitriche', 'Callitrichaceae', 1],
        ['Veronica', 'Scrophulariaceae', 1],

        ['Acanthaceae', 'Botany', 1],
        ['Aceraceae', 'Botany', 1],
        ['Actinidiaceae', 'Botany', 1],
        ['Agavaceae', 'Botany', 1],
        ['Aizoaceae', 'Botany', 1],
        ['Alismataceae', 'Botany', 1],
        ['Amblystegiaceae', 'Botany', 1],
        ['Apiaceae', 'Botany', 7],
        ['Araliaceae', 'Botany', 1],
        ['Araucariaceae', 'Botany', 1],
        ['Asclepiadaceae', 'Botany', 1],
        ['Aspleniaceae', 'Botany', 1],
        ['Asteraceae', 'Botany', 18],
        ['Bangiaceae', 'Botany', 1],
        ['Basellaceae', 'Botany', 2],
        ['Berberidaceae', 'Botany', 1],
        ['Blechnaceae', 'Botany', 4],
        ['Brassicaceae', 'Botany', 2],
        ['Buddlejaceae', 'Botany', 1],
        ['Caesalpiniaceae', 'Botany', 1],
        ['Callitrichaceae', 'Botany', 1],
        ['Caprifoliaceae', 'Botany', 1],
        ['Caryophyllaceae', 'Botany', 3],
        ['Ceratophyllaceae', 'Botany', 1],
        ['Champiaceae', 'Botany', 1],
        ['Characeae', 'Botany', 1],
        ['Chenopodiaceae', 'Botany', 1],
        ['Cladoniaceae', 'Botany', 5],
        ['Cladophoraceae', 'Botany', 1],
        ['Coccocarpiaceae', 'Botany', 1],
        ['Collemataceae', 'Botany', 1],
        ['Corallinaceae', 'Botany', 1],
        ['Cucurbitaceae', 'Botany', 1],
        ['Cyatheaceae', 'Botany', 1],
        ['Cyperaceae', 'Botany', 14],
        ['Dasyaceae', 'Botany', 1],
        ['Delesseriaceae', 'Botany', 1],
        ['Dennstaedtiaceae', 'Botany', 6],
        ['Dicranaceae', 'Botany', 2],
        ['Dictyotaceae', 'Botany', 3],
        ['Dryopteridaceae', 'Botany', 4],
        ['Ectocarpaceae', 'Botany', 1],
        ['Elaeocarpaceae', 'Botany', 1],
        ['Euphorbiaceae', 'Botany', 1],
        ['Fabaceae', 'Botany', 7],
        ['Fissidentaceae', 'Botany', 1],
        ['Gelidiaceae', 'Botany', 1],
        ['Geniostomaceae', 'Botany', 1],
        ['Geocalycaceae', 'Botany', 1],
        ['Gigartinaceae', 'Botany', 9],
        ['Gloiosiphoniaeceae', 'Botany', 1],
        ['Gracilariaceae', 'Botany', 1],
        ['Gunneraceae', 'Botany', 1],
        ['Gyalectaceae', 'Botany', 1],
        ['Haloragaceae', 'Botany', 1],
        ['Halymeniaceae', 'Botany', 2],
        ['Hedwigiaceae', 'Botany', 1],
        ['Helminthocladiaceae', 'Botany', 1],
        ['Hymenophyllaceae', 'Botany', 6],
        ['Hymenophytaceae', 'Botany', 4],
        ['Hypericaceae', 'Botany', 1],
        ['Hypnaceae', 'Botany', 3],
        ['Hypopterygiaceae', 'Botany', 1],
        ['Jubulaceae', 'Botany', 2],
        ['Juncaceae', 'Botany', 1],
        ['Kallymeniaceae', 'Botany', 1],
        ['Lamiaceae', 'Botany', 1],
        ['Lejeuneaceae', 'Botany', 2],
        ['Lepidolaenaceae', 'Botany', 1],
        ['Lepidoziaceae', 'Botany', 4],
        ['Liliaceae', 'Botany', 2],
        ['Lobariaceae', 'Botany', 2],
        ['Lophocoleaceae', 'Botany', 3],
        ['Loranthaceae', 'Botany', 1],
        ['Lycopodiaceae', 'Botany', 1],
        ['Lythraceae', 'Botany', 1],
        ['Malvaceae', 'Botany', 1],
        ['Megalosporaceae', 'Botany', 1],
        ['Melastomataceae', 'Botany', 1],
        ['Myrtaceae', 'Botany', 53],
        ['Nemastomataceae', 'Botany', 1],
        ['Nephromataceae', 'Botany', 1],
        ['Nyctaginaceae', 'Botany', 1],
        ['Oleaceae', 'Botany', 1],
        ['Onagraceae', 'Botany', 3],
        ['Ophioglossaceae', 'Botany', 1],
        ['Orchidaceae', 'Botany', 8],
        ['Oscillatoriaceae', 'Botany', 1],
        ['Osmundaceae', 'Botany', 1],
        ['Oxalidaceae', 'Botany', 2],
        ['Pannariaceae', 'Botany', 1],
        ['Papaveraceae', 'Botany', 2],
        ['Parmeliaceae', 'Botany', 3],
        ['Passifloraceae', 'Botany', 1],
        ['Phyllophoraceae', 'Botany', 1],
        ['Physciaceae', 'Botany', 3],
        ['Pittosporaceae', 'Botany', 2],
        ['Plagiotheciaceae', 'Botany', 1],
        ['Poaceae', 'Botany', 19],
        ['Podocarpaceae', 'Botany', 2],
        ['Polygonaceae', 'Botany', 9],
        ['Polypodiaceae', 'Botany', 1],
        ['Potamogetonaceae', 'Botany', 1],
        ['Pottiaceae', 'Botany', 3],
        ['Proteaceae', 'Botany', 1],
        ['Pteridaceae', 'Botany', 3],
        ['Racopilaceae', 'Botany', 2],
        ['Radulaceae', 'Botany', 47],
        ['Ramalinaceae', 'Botany', 1],
        ['Ranunculaceae', 'Botany', 3],
        ['Rhodomelaceae', 'Botany', 35],
        ['Rosaceae', 'Botany', 1],
        ['Rubiaceae', 'Botany', 10],
        ['Rutaceae', 'Botany', 2],
        ['Salicaceae', 'Botany', 2],
        ['Salviniaceae', 'Botany', 1],
        ['Sapindaceae', 'Botany', 1],
        ['Sapotaceae', 'Botany', 2],
        ['Scrophulariaceae', 'Botany', 4],
        ['Scytosiphonaceae', 'Botany', 1],
        ['Sematophyllaceae', 'Botany', 1],
        ['Solanaceae', 'Botany', 4],
        ['Solieriaceae', 'Botany', 1],
        ['Sphaerophoraceae', 'Botany', 1],
        ['Splachnaceae', 'Botany', 1],
        ['Splachnidiaceae', 'Botany', 1],
        ['Stereocaulaceae', 'Botany', 1],
        ['Stictaceae', 'Botany', 2],
        ['Thelephoraceae', 'Botany', 1],
        ['Thuidiaceae', 'Botany', 1],
        ['Typhaceae', 'Botany', 1],
        ['Ulvaceae', 'Botany', 3],
        ['Zingiberaceae', 'Botany', 1],
        ['Anostostomatidae', 'Entomology', 23],
        ['Curculionidae', 'Entomology', 14],
        ['Diapriidae', 'Entomology', 5],
        ['Ephydridae: Ephydrinae', 'Entomology', 1],
        ['Hemerobiidae', 'Entomology', 1],
        ['Lestidae', 'Entomology', 28],
        ['Lucanidae', 'Entomology', 1],
        ['Salticidae', 'Entomology', 2],
        ['Thomisidae', 'Entomology', 1],

        ['Bovidae', 'Land Mammals/Land Vertebrates', 2],
        ['Cercopithecidae', 'Land Mammals/Land Vertebrates', 1],
        ['Felidae', 'Land Mammals/Land Vertebrates', 3],
        ['Leporidae', 'Land Mammals/Land Vertebrates', 1],
        ['Macropodidae', 'Land Mammals/Land Vertebrates', 5],
        ['Muridae', 'Land Mammals/Land Vertebrates', 4],
        ['Otariidae', 'Land Mammals/Land Vertebrates', 2],
        ['Phalangeridae', 'Land Mammals/Land Vertebrates', 1],
        ['Phocidae', 'Land Mammals/Land Vertebrates', 1],
        ['Rhinocerotidae', 'Land Mammals/Land Vertebrates', 1],
        ['Vespertilionidae', 'Land Mammals/Land Vertebrates', 1],




        ['Achatinidae', 'Marine', 6],
        ['Antipathidae', 'Marine', 1],
        ['Buccinulidae', 'Marine', 14],
        ['Caryophylliidae', 'Marine', 2],
        ['Cyclophoridae', 'Marine', 27],
        ['Dalmanellidae', 'Marine', 1],
        ['Flabellidae', 'Marine', 2],
        ['Grapsidae', 'Marine', 2],
        ['Gryphaeidae', 'Marine', 1],
        ['Homalonotidae', 'Marine', 1],
        ['Hymenosomatidae', 'Marine', 1],
        ['Isididae', 'Marine', 2],
        ['Lottiidae', 'Marine', 1],
        ['Majidae', 'Marine', 1],
        ['Mangeliidae', 'Marine', 9],
        ['Megalomastomidae', 'Marine', 1],
        ['Muricidae', 'Marine', 1],
        ['Oculinidae', 'Marine', 1],
        ['Orthalicidae', 'Marine', 1],
        ['Otodontidae', 'Marine', 1],
        ['Philinidae', 'Marine', 1],
        ['Primnoidae', 'Marine', 1],
        ['Pupinidae', 'Marine', 2],
        ['Strombidae', 'Marine', 32],
        ['Struthiolariidae', 'Marine', 1],
        ['Subulinidae', 'Marine', 1],
        ['Teredinidae', 'Marine', 1],


        ['Cheloniidae', 'Reptiles And Amphibians/Land Vertebrates', 1],
        ['Crocodylidae', 'Reptiles And Amphibians/Land Vertebrates', 1],
        ['Dermochelyidae', 'Reptiles And Amphibians/Land Vertebrates', 1],
        ['Elapidae', 'Reptiles And Amphibians/Land Vertebrates', 2],
        ['Gekkonidae', 'Reptiles And Amphibians/Land Vertebrates', 15],
        ['Hylidae', 'Reptiles And Amphibians/Land Vertebrates', 2],
        ['Iguanidae', 'Reptiles And Amphibians/Land Vertebrates', 1],
        ['Leiopelmatidae', 'Reptiles And Amphibians/Land Vertebrates', 3],
        ['Microhylidae', 'Reptiles And Amphibians/Land Vertebrates', 1],
        ['Mosasauridae', 'Reptiles And Amphibians/Land Vertebrates', 1],
        ['Scincidae', 'Reptiles And Amphibians/Land Vertebrates', 21],
        ['Sphenodontidae', 'Reptiles And Amphibians/Land Vertebrates', 3],
        ['Varanidae', 'Reptiles And Amphibians/Land Vertebrates', 1],

        ['Entomology', 'Natural Science', null],

        ['Austrolestes', 'Lestidae', 28],
        ['Anisoura', 'Anostostomatidae', 5],
        ['Deinacrida', 'Anostostomatidae', 5],
        ['Hemideina', 'Anostostomatidae', 13],
        ['Trite', 'Salticidae', 1],
        ['Limnellia', 'Ephydridae: Ephydrinae', 1],
        ['Drepanacra', 'Hemerobiidae', 1],
        ['Mitophyllus', 'Lucanidae', 1],
        ['Indecentia', 'Curculionidae', 2],
        ['Agastegnus', 'Curculionidae', 2],
        ['Trichopria', 'Diapriidae', 3],
        ['Basalys', 'Diapriidae', 2],
        ['Land Mammals/Land Vertebrates', 'Natural Science', null],

        ['Panthera', 'Felidae', 1],
        ['Felis', 'Felidae', 2],
        ['Capra', 'Bovidae', 1],
        ['Rattus', 'Muridae', 3],
        ['Macropus', 'Macropodidae', 4],
        ['Mus', 'Muridae', 1],
        ['Mirounga', 'Phocidae', 1],
        ['Wallabia', 'Macropodidae', 1],
        ['Neophoca', 'Otariidae', 1],
        ['Ceratotherium', 'Rhinocerotidae', 1],
        ['Arctocephalus', 'Otariidae', 1],
        ['Trichosurus', 'Phalangeridae', 1],
        ['Papio', 'Cercopithecidae', 1],
        ['Chalinolobus', 'Vespertilionidae', 1],
        ['Oryctolagus', 'Leporidae', 1],
        ['Kobus', 'Bovidae', 1],


        ['Marine', 'Natural Science', null],

        ['Homalonotus', 'Homalonotidae', 1],
        ['Bankia', 'Teredinidae', 1],
        ['Carcharocles', 'Otodontidae', 1],
        ['Crenostrea', 'Gryphaeidae', 1],
        ['Dalmanella', 'Dalmanellidae', 1],
        ['Keratoisis', 'Isididae', 2],
        ['Narella', 'Primnoidae', 1],
        ['Terestrombus', 'Strombidae', 5],
        ['Oculina', 'Oculinidae', 1],
        ['Antipathes', 'Antipathidae', 1],
        ['Dolomena', 'Strombidae', 4],
        ['Lentigo', 'Strombidae', 3],
        ['Stephanocyathus', 'Caryophylliidae', 2],
        ['Canarium', 'Strombidae', 8],
        ['Flabellum', 'Flabellidae', 2],
        ['Conomurex', 'Strombidae', 2],
        ['Tridentarius', 'Strombidae', 1],
        ['Euprotomus', 'Strombidae', 4],
        ['Gibberulus', 'Strombidae', 2],
        ['Sinustrombus', 'Strombidae', 2],
        ['Doxander', 'Strombidae', 1],
        ['Achatina', 'Achatinidae', 6],
        ['Cyclotus', 'Cyclophoridae', 8],
        ['Ditropis', 'Cyclophoridae', 1],
        ['Leptopoma', 'Cyclophoridae', 14],
        ['Neoguraleus', 'Mangeliidae', 9],
        ['Pupina', 'Pupinidae', 2],
        ['Liguus', 'Orthalicidae', 1],
        ['Kenia', 'Subulinidae', 1],
        ['Farcimen', 'Megalomastomidae', 1],
        ['Xymene', 'Muricidae', 1],
        ['Notoacmea', 'Lottiidae', 1],
        ['Struthiolaria (Pelicaria)', 'Struthiolariidae', 1],
        ['Notomithrax', 'Majidae', 1],
        ['Philinopsis', 'Philinidae', 1],
        ['Elamena', 'Hymenosomatidae', 1],
        ['Hemigrapsus', 'Grapsidae', 2],
        ['Cyclophorus', 'Cyclophoridae', 1],
        ['Opisthoporus', 'Cyclophoridae', 1],
        ['Lagochilus', 'Cyclophoridae', 2],
        ['Penion', 'Buccinulidae', 14],
        ['Reptiles And Amphibians/Land Vertebrates', 'Natural Science', null],

        ['Dactylocnemis', 'Gekkonidae', 3],
        ['Oligosoma', 'Scincidae', 9],
        ['Gehyra', 'Gekkonidae', 3],
        ['Emoia', 'Scincidae', 8],
        ['Mokopirirakau', 'Gekkonidae', 1],
        ['Chelonia', 'Cheloniidae', 1],
        ['Lepidodactylus', 'Gekkonidae', 3],
        ['Hemidactylus', 'Gekkonidae', 3],
        ['Cophixalus', 'Microhylidae', 1],
        ['Naultinus', 'Gekkonidae', 2],
        ['Leiopelma', 'Leiopelmatidae', 2],
        ['Sphenodon', 'Sphenodontidae', 3],
        ['Pelamis', 'Elapidae', 1],
        ['Dermochelys', 'Dermochelyidae', 1],
        ['Brachylophus', 'Iguanidae', 1],
        ['Marmorosphax', 'Scincidae', 2],
        ['Litoria', 'Hylidae', 2],
        ['Varanus', 'Varanidae', 1],
        ['Crocodylus', 'Crocodylidae', 1],
        ['Ascaphus', 'Leiopelmatidae', 1],
        ['Laticauda', 'Elapidae', 1],
        ['Nannoscincus', 'Scincidae', 1],
    ]);

    var tree = new google.visualization.TreeMap(document.getElementById('trees'));

    var options = {
        highlightOnMouseOver: true,
        maxDepth: 1,
        maxPostDepth: 2,
        minHighlightColor: '#8c6bb1',
        midHighlightColor: '#9ebcda',
        maxHighlightColor: '#edf8fb',
        minColor: '#009688',
        midColor: '#f7f7f7',
        maxColor: '#ee8100',
        headerHeight: 15,
        showScale: true,
        height: 500,
        useWeightedAverageForAggregation: true
    };

    tree.draw(data, options);
}

//chart 6: Horses
function drawChart6(){
 var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1PzmQ1IlplTBZiEftG7tHTAaJyA1yyoZjJGBDjCfGMtE/gviz/tq?range=U:X&headers=1&gid=0');
  query.send(handleQueryResponse);

function handleQueryResponse(response) {
  var data = response.getDataTable();
  var options = {
    title: 'Troopship Cargo',
    'isStacked': 'percent',
    legend: {position: 'right'},
    hAxis: {ticks: []} 
  } 
  var chart = new google.visualization.BarChart(document.getElementById('horse'));
  chart.draw(data, options);
}
}

//chart 7: Manuscripts Timeline
function drawChart7(){
 var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1PzmQ1IlplTBZiEftG7tHTAaJyA1yyoZjJGBDjCfGMtE/gviz/tq?range=Z:AC&headers=1&gid=0');
  query.send(handleQueryResponse);

function handleQueryResponse(response) {
  var data = response.getDataTable();
    var options = {
      timeline: { showRowLabels: true },
      height : 1600,
      tooltip: {isHtml: false}
    };
  var chart = new google.visualization.Timeline(document.getElementById('manuscripts'));
  chart.draw(data, options);
}
}


//chart 8: Calendar
function drawChart8(){
 var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1PzmQ1IlplTBZiEftG7tHTAaJyA1yyoZjJGBDjCfGMtE/gviz/tq?range=AF:AG&headers=1&gid=0');
  query.send(handleQueryResponse);

function handleQueryResponse(response) {
  var data = response.getDataTable();
  var options = {
    title: 'WW1 Casulties',
    calendar: { cellSize: 8 },
    
  } 
  var chart = new google.visualization.Calendar(document.getElementById('Calendar'));
  chart.draw(data, options);
}
}
$(window).resize(function() {
  drawChart1();
  drawChart2();
  drawChart3();
  drawChart4();
  drawChart5();
  drawChart6();
  drawChart7();
  drawChart8();
});
