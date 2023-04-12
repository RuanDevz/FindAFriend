const estado = document.getElementById('sigla');
const selectCidade = document.getElementById('cidade');

const cidadesPorEstado = {

    DF: [ "Brasília",],

    RR: [  "Boa Vista", "Caracaraí", "Mucajaí",],

    TO: [ "Palmas", "Araguaína", "Gurupi", "Porto Nacional", "Paraíso do Tocantins", "Guaraí", "Colinas do Tocantins", "Formoso do Araguaia", "Tocantinópolis", "Miracema do Tocantins", "Taguatinga", "Wanderlândia", "Xambioá", "Augustinópolis", "Ananás", "Araguatins", "Dianópolis", "São Miguel do Tocantins", "Nova Olinda", "Alvorada",],

    SE: [ "Aracaju", "Nossa Senhora do Socorro", "Lagarto", "Itabaiana", "São Cristóvão", "Estância", "Tobias Barreto", "Itabaianinha", "Simão Dias", "Capela", "Propriá", "Poço Verde", "Nossa Senhora da Glória", "Porto da Folha", "Canindé de São Francisco", "Laranjeiras", "Barra dos Coqueiros", "Aquidabã", "Riachão do Dantas", "Boquim",],

    RO: [ "Porto Velho", "Ji-Paraná", "Ariquemes", "Vilhena", "Cacoal", "Jaru", "Guajará-Mirim", "Rolim de Moura", "Pimenta Bueno", "Ouro Preto do Oeste", "Nova Mamoré", "Machadinho d'Oeste", "Buritis", "Espigão d'Oeste", "Candeias do Jamari", "Alta Floresta d'Oeste", "São Miguel do Guaporé", "Colorado do Oeste", "Mirante da Serra", "Monte Negro",],

    RS: [  "Porto Alegre", "Caxias do Sul", "Pelotas", "Canoas", "Santa Maria", "Gravataí", "Viamão", "Novo Hamburgo", "São Leopoldo", "Rio Grande", "Alvorada", "Passo Fundo", "Uruguaiana", "Sapucaia do Sul", "Santa Cruz do Sul", "Cachoeirinha", "Bagé", "Bento Gonçalves", "Esteio", "Ijuí",],

    RN: [ "Natal", "Mossoró", "Parnamirim", "São Gonçalo do Amarante", "Macaíba", "Ceará-Mirim", "Caicó", "Assu", "Currais Novos", "São José de Mipibu", "Santa Cruz", "Nova Cruz", "Apodi", "João Câmara", "Pau dos Ferros", "Areia Branca", "Macau", "Baraúna", "Canguaretama", "Goianinha",],

    RJ: [ "Rio de Janeiro", "São Gonçalo", "Duque de Caxias", "Nova Iguaçu", "Niterói", "Belford Roxo", "São João de Meriti", "Campos dos Goytacazes", "Petrópolis", "Volta Redonda", "Magé", "Itaboraí", "Mesquita", "Cabo Frio", "Angra dos Reis", "Macaé", "Nilópolis", "Teresópolis", "Barra Mansa", "Queimados",],

    PI: [  "Teresina", "Parnaíba", "Picos", "Piripiri", "Campo Maior", "Floriano", "Barras", "Pedro II", "Altos", "José de Freitas", "Luzilândia", "Oeiras", "Batalha", "Esperantina", "Miguel Alves", "Castelo do Piauí", "União", "Cocal", "São João do Piauí", "Valença do Piauí",
],
    PE: ["Recife", "Jaboatão dos Guararapes", "Olinda", "Caruaru", "Paulista", "Petrolina", "Cabo de Santo Agostinho", "Camaragibe", "Garanhuns", "Vitória de Santo Antão", "Igarassu", "São Lourenço da Mata", "Santa",],

    PR: [  "Curitiba", "Londrina", "Maringá", "Ponta Grossa", "Cascavel", "São José dos Pinhais", "Foz do Iguaçu", "Colombo", "Guarapuava", "Paranaguá", "Araucária", "Toledo", "Apucarana", "Pinhais", "Campo Largo", "Arapongas", "Cambé", "Paranavaí", "Almirante Tamandaré", "Umuarama",],

    PB: [ "João Pessoa", "Campina Grande", "Santa Rita", "Patos", "Bayeux", "Cabedelo", "Sousa", "Cajazeiras", "Guarabira", "Mamanguape", "Queimadas", "Esperança", "Monteiro", "Pombal", "Catolé do Rocha", "Rio Tinto", "Areia", "Solânea", "Alagoa Grande", "Itaporanga",],

    PA: [ "Belém", "Ananindeua", "Santarém", "Marabá", "Castanhal", "Parauapebas", "Abaiara", "Cametá", "Capanema", "Bragança", "Moju", "Tucuruí", "Barcarena", "Altamira", "Tailândia", "Breves", "Itaituba", "Capitão Poço", "Igarapé-Miri", "Oriximiná",],

    MG: [  "Belo Horizonte", "Uberlândia", "Contagem", "Juiz de Fora", "Betim", "Montes Claros", "Ribeirão das Neves", "Uberaba", "Governador Valadares", "Ipatinga", "Sete Lagoas", "Divinópolis", "Santa Luzia", "Ibirité", "Poços de Caldas", "Patos de Minas", "Teófilo Otoni", "Sabará", "Varginha", "Itabira",],

    MS: [ "Campo Grande", "Dourados", "Três Lagoas", "Corumbá", "Naviraí", "Ponta Porã", "Sidrolândia", "Aquidauana", "Maracaju", "Nova Andradina", "Coxim", "Amambai", "Paranaíba", "Rio Brilhante", "Jardim", "Bela Vista", "Miranda", "Ribas do Rio Pardo", "Cassilândia", "Caarapó",],

    MT: [  "Cuiabá", "Várzea Grande", "Rondonópolis", "Sinop", "Tangará da Serra", "Cáceres", "Sorriso", "Lucas do Rio Verde", "Primavera do Leste", "Barra do Garças", "Alta Floresta", "Nova Mutum", "Pontes e Lacerda", "Campo Verde", "Juína", "Colniza", "Guiratinga", "Poconé", "Peixoto de Azevedo", "Juara"],

    MA : ["São Luís", "Imperatriz", "Timon", "Caxias", "Codó", "Paço do Lumiar", "Açailândia", "Bacabal", "Balsas", "Santa Inês", "Barra do Corda", "Pinheiro", "Chapadinha", "Santa Luzia", "Grajaú", "Viana", "Coroatá", "Itapecuru Mirim", "Pedreiras", "Zé Doca",],

    GO: [ "Goiânia", "Aparecida de Goiânia", "Anápolis", "Rio Verde", "Luziânia", "Águas Lindas de Goiás", "Valparaíso de Goiás", "Trindade", "Formosa", "Novo Gama", "Catalão", "Senador Canedo", "Itumbiara", "Jataí", "Planaltina", "Cristalina", "Porangatu", "Inhumas", "Mineiros", "Jaraguá",],

    ES: [ "Vitória", "Vila Velha", "Serra", "Cariacica", "Linhares", "São Mateus", "Colatina", "Guarapari", "Aracruz", "Nova Venécia", "Barra de São Francisco", "Santa Maria de Jetibá", "Castelo", "Itapemirim", "Conceição da Barra", "Alegre", "Mimoso do Sul", "Domingos Martins", "Baixo Guandu", "Iúna",],

    CE: ["Fortaleza", "Caucaia", "Juazeiro do Norte", "Maracanaú", "Sobral", "Crato", "Itapipoca", "Maranguape", "Iguatu", "Quixadá", "Canindé", "Pacatuba", "Quixeramobim", "Aquiraz", "Russas", "Acaraú", "Horizonte", "Camocim", "Limoeiro do Norte", "Tauá",],

    AL: ["Maceió", "Arapiraca", "Rio Largo", "Palmeira dos Índios", "União dos Palmares", "São Miguel dos Campos", "Penedo", "Coruripe", "Delmiro Gouveia", "Marechal Deodoro", "Campo Alegre", "Santana do Ipanema", "Atalaia", "Pilar", "Viçosa", "Teotônio Vilela", "Girau do Ponciano", "Marechal Thaumaturgo",],

    AP: ["Macapá", "Santana", "Laranjal do Jari", "Oiapoque", "Mazagão", "Porto Grande", "Tartarugalzinho", "Pedra Branca do Amapari", "Serra do Navio", "Amapá",],

    AM: ["Manaus", "Parintins", "Itacoatiara", "Manacapuru", "Coari", "Tabatinga", "São Gabriel da Cachoeira", "Maués", "Tefé", "Iranduba", "Benjamin Constant", "Autazes", "Barcelos", "Novo Airão", "Borba", "Manicoré", "Careiro da Várzea", "Presidente Figueiredo", "Eirunepé", "Rio Preto da Eva", "Humaitá"],

    BA: ["Salvador", "Feira de Santana", "Vitória da Conquista", "Camaçari", "Itabuna", "Juazeiro", "Lauro de Freitas", "Ilhéus", "Jequié", "Teixeira de Freitas", "Alagoinhas", "Barreiras", "Porto Seguro", "Simões Filho", "Paulo Afonso", "Eunápolis", "Santo Antônio de Jesus", "Senhor do Bonfim", "Valença", "Candeias", "Guanambi", "Jacobina", "Serrinha", "Dias d'Ávila", "Casa Nova", "Campo Formoso", "Euclides da Cunha", "São Francisco do Conde", "Brumado", "Irecê", "Itapetinga", "São Sebastião do Passé",],

    AC: ["Acrelândia", "Assis Brasil", "Brasiléia", "Bujari", "Capixaba", "Cruzeiro do Sul", "Epitaciolândia", "Feijó", "Jordão", "Mâncio Lima", "Manoel Urbano", "Marechal Thaumaturgo", "Plácido de Castro", "Porto Acre", "Porto Walter", "Rio Branco", "Rodrigues Alves", "Santa Rosa do Purus", "Sena Madureira", "Senador Guiomard", "Tarauacá", "Xapuri",],


    SP: ["São Paulo", "Campinas", "Santo André", "São Bernardo do Campo", "Guarulhos", "Osasco", "Santos", "São José dos Campos", "Ribeirão Preto", "Sorocaba", "Barueri", "Jundiaí", "Diadema", "Mauá", "Itaquaquecetuba", "Taboão da Serra", "Carapicuíba", "Embu das Artes", "Franco da Rocha", "Itapecerica da Serra", "Poá", "Ferraz de Vasconcelos", "Bragança Paulista", "Itapevi", "Mogi das Cruzes", "Suzano", "Araraquara", "Atibaia", "Hortolândia", "Itatiba", "Jaguariúna", "Limeira", "Mairiporã", "Marília", "Pindamonhangaba", "Rio Claro", "Santa Bárbara d'Oeste", "São Carlos", "São Roque", "Valinhos",],

};


estado.addEventListener("change", () => {
  const estadoselecionado = estado.value;
  const cidadesfiltrada = cidadesPorEstado[estadoselecionado];
  
  selectCidade.innerHTML = "<option value=''>Selecione uma cidade</option>";
  cidadesfiltrada.forEach(cidade => {
    const option = document.createElement("option");
    option.value = cidade;
    option.textContent = cidade;
    selectCidade.appendChild(option);
  });
});

