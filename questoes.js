const questions = [
    {
        question: "Qual é a capital do Brasil?",
        options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
        answer: "Brasília"
    },
    {
        question: "Quem escreveu 'Dom Casmurro'?",
        options: ["Machado de Assis", "Carlos Drummond de Andrade", "Clarice Lispector", "Guimarães Rosa"],
        answer: "Machado de Assis"
    },
    {
        question: "Qual é o maior animal terrestre?",
        options: ["Elefante Africano", "Girafa", "Hipopótamo", "Baleia Azul"],
        answer: "Elefante Africano"
    },
    { question: "Qual é o maior estado do Brasil em área?",
        options: ["Amazonas", "Minas Gerais", "Mato Grosso", "Pará"],
        answer: "Amazonas"
    },
    {
        question: "Quem pintou 'Guernica'?",
        options: ["Pablo Picasso", "Vincent van Gogh", "Salvador Dalí", "Claude Monet"],
        answer: "Pablo Picasso"
    },
    {
        question: "Qual é o metal mais abundante na crosta terrestre?",
        options: ["Ferro", "Alumínio", "Ouro", "Cobre"],
        answer: "Alumínio"
    },
    {
        question: "Quem foi o primeiro presidente do Brasil?",
        options: ["Deodoro da Fonseca", "Getúlio Vargas", "Juscelino Kubitschek", "Tancredo Neves"],
        answer: "Deodoro da Fonseca"
    },
    {
        question: "Quem escreveu 'Memórias Póstumas de Brás Cubas'?",
        options: ["Machado de Assis", "Euclides da Cunha", "José de Alencar", "Graciliano Ramos"],
        answer: "Machado de Assis"
    },
    {
        question: "Qual é o rio mais extenso do mundo?",
        options: ["Nilo", "Amazonas", "Yangtzé", "Mississippi"],
        answer: "Amazonas"
    },
    {
        question: "Quem foi o primeiro homem a pisar na Lua?",
        options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"],
        answer: "Neil Armstrong"
    },
    {
        question: "Qual é o elemento químico representado pelo símbolo 'Fe'?",
        options: ["Ferro", "Cobre", "Alumínio", "Ouro"],
        answer: "Ferro"
    },
    {
        question: "Quem foi o autor de 'O Pequeno Príncipe'?",
        options: ["Antoine de Saint-Exupéry", "Franz Kafka", "J.K. Rowling", "Charles Dickens"],
        answer: "Antoine de Saint-Exupéry"
    },
    {
        question: "Qual é a cidade mais populosa do mundo?",
        options: ["Tóquio", "Pequim", "Nova Deli", "Xangai"],
        answer: "Tóquio"
    },
    {
        question: "Quem foi o criador do Facebook?",
        options: ["Mark Zuckerberg", "Jeff Bezos", "Elon Musk", "Bill Gates"],
        answer: "Mark Zuckerberg"
    },
    {
        question: "Qual é o país com maior extensão territorial do mundo?",
        options: ["Rússia", "Canadá", "China", "Estados Unidos"],
        answer: "Rússia"
    },
    {
        question: "Qual é o elemento químico representado pelo símbolo 'Na'?",
        options: ["Sódio", "Cálcio", "Potássio", "Ferro"],
        answer: "Sódio"
    },
    {
        question: "Quem foi o primeiro presidente dos Estados Unidos?",
        options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
        answer: "George Washington"
    },
    {
        question: "Em que ano começou a Segunda Guerra Mundial?",
        options: ["1939", "1941", "1943", "1945"],
        answer: "1939"
    },
    {
        question: "Quem escreveu 'Cem Anos de Solidão'?",
        options: ["Gabriel García Márquez", "Jorge Luis Borges", "Isabel Allende", "Pablo Neruda"],
        answer: "Gabriel García Márquez"
    },
    {
        question: "Qual é o maior deserto do mundo?",
        options: ["Saara", "Antártida", "Arábia", "Gobi"],
        answer: "Antártida"
    },
    {
        question: "Quem foi o pintor do quadro 'A Noite Estrelada'?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Claude Monet", "Leonardo da Vinci"],
        answer: "Vincent van Gogh"
    },
    {
        question: "Qual é o maior oceano do mundo?",
        options: ["Pacífico", "Atlântico", "Índico", "Ártico"],
        answer: "Pacífico"
    },
    {
        question: "Qual é o elemento químico representado pelo símbolo 'H'?",
        options: ["Hidrogênio", "Hélio", "Carbono", "Nitrogênio"],
        answer: "Hidrogênio"
    },
    {
        question: "Qual é o menor país do mundo em área territorial?",
        options: ["Vaticano", "Mônaco", "Nauru", "Tuvalu"],
        answer: "Vaticano"
    },
    {
        question: "Quem escreveu 'A Revolução dos Bichos'?",
        options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Margaret Atwood"],
        answer: "George Orwell"
    },
    {
        question: "Qual é o único planeta do Sistema Solar que gira de leste a oeste?",
        options: ["Vênus", "Urano", "Júpiter", "Saturno"],
        answer: "Vênus"
    },
    {
        question: "Quem foi o primeiro astronauta a dar um passeio espacial?",
        options: ["Alexei Leonov", "Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong"],
        answer: "Alexei Leonov"
    },
    {
        question: "Qual é a única cidade situada em dois continentes?",
        options: ["Istambul", "Moscou", "Londres", "Cidade do Cabo"],
        answer: "Istambul"
    },
    {
        question: "Qual é a unidade básica de estrutura e função em um organismo?",
        options: ["Célula", "Átomo", "DNA", "Proteína"],
        answer: "Célula"
    },
    {
        question: "Quem pintou 'Mona Lisa'?",
        options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Salvador Dalí"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "Qual é o país mais populoso do mundo?",
        options: ["China", "Índia", "Estados Unidos", "Indonésia"],
        answer: "China"
    },
    {
        question: "Quem escreveu 'O Retrato de Dorian Gray'?",
        options: ["Oscar Wilde", "James Joyce", "Virginia Woolf", "William Faulkner"],
        answer: "Oscar Wilde"
    },
    {
        question: "Quantos lados tem um heptágono?",
        options: ["7", "6", "8", "5"],
        answer: "7"
    },
    {
        question: "Quem é considerado o 'pai da computação'?",
        options: ["Alan Turing", "Bill Gates", "Steve Jobs", "Tim Berners-Lee"],
        answer: "Alan Turing"
    },
    {
        question: "Qual é o metal mais leve?",
        options: ["Lítio", "Alumínio", "Titânio", "Magnésio"],
        answer: "Lítio"
    },
    {
        question: "Quem escreveu 'O Senhor dos Anéis'?",
        options: ["J.R.R. Tolkien", "C.S. Lewis", "J.K. Rowling", "George R.R. Martin"],
        answer: "J.R.R. Tolkien"
    },
    {
        question: "Quem foi o primeiro presidente do Brasil após o regime militar?",
        options: ["José Sarney", "Fernando Collor", "Itamar Franco", "Fernando Henrique Cardoso"],
        answer: "José Sarney"
    },
    {
        question: "Qual é o animal que é conhecido como 'o rei da selva'?",
        options: ["Leão", "Tigre", "Elefante", "Gorila"],
        answer: "Leão"
    },
    {
        question: "Qual é o maior oceano do mundo?",
        options: ["Pacífico", "Atlântico", "Índico", "Ártico"],
        answer: "Pacífico"
    },
    {
        question: "Quem foi o autor de '1984'?",
        options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Philip K. Dick"],
        answer: "George Orwell"
    },
    {
        question: "Qual é a capital do Japão?",
        options: ["Tóquio", "Kyoto", "Osaka", "Hiroshima"],
        answer: "Tóquio"
    },
    {
        question: "Quem foi o primeiro homem a escalar o Monte Everest?",
        options: ["Sir Edmund Hillary", "Reinhold Messner", "Tenzing Norgay", "Chris Bonington"],
        answer: "Sir Edmund Hillary"
    },
    {
        question: "Quem é considerado o pai da psicologia moderna?",
        options: ["William James", "Sigmund Freud", "Carl Jung", "Ivan Pavlov"],
        answer: "William James"
    },
    {
        question: "Quem escreveu 'A Odisséia'?",
        options: ["Homero", "Virgílio", "Sófocles", "Eurípides"],
        answer: "Homero"
    },
    {
        question: "Qual é o maior animal terrestre?",
        options: ["Elefante africano", "Girafa", "Rinoceronte", "Hipopótamo"],
        answer: "Elefante africano"
    },
    {
        question: "Quem foi o primeiro presidente dos Estados Unidos?",
        options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
        answer: "George Washington"
    },
    {
        question: "Quem foi o autor de 'A Metamorfose'?",
        options: ["Franz Kafka", "Fyodor Dostoevsky", "Leo Tolstoy", "Albert Camus"],
        answer: "Franz Kafka"
    },
    {
        question: "Qual é a capital da Alemanha?",
        options: ["Berlim", "Munique", "Hamburgo", "Frankfurt"],
        answer: "Berlim"
    },
    {
        question: "Qual é a cidade mais populosa do Brasil?",
        options: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
        answer: "São Paulo"
    },
    {
        question: "Quem é conhecido como 'o Rei do Pop'?",
        options: ["Michael Jackson", "Elvis Presley", "Prince", "Madonna"],
        answer: "Michael Jackson"
    },
    {
        question: "Qual é o símbolo químico para o ouro?",
        options: ["Au", "Ag", "Fe", "Cu"],
        answer: "Au"
    },
    {
        question: "Quem pintou 'A Noite Estrelada'?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        answer: "Vincent van Gogh"
    },
    {
        question: "Qual é o menor país do mundo em área territorial?",
        options: ["Vaticano", "Mônaco", "Nauru", "Tuvalu"],
        answer: "Vaticano"
    },
    {
        question: "Quem escreveu 'A Revolução dos Bichos'?",
        options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Margaret Atwood"],
        answer: "George Orwell"
    },
    {
        question: "Qual é o único planeta do Sistema Solar que gira de leste a oeste?",
        options: ["Vênus", "Urano", "Júpiter", "Saturno"],
        answer: "Vênus"
    },
    {
        question: "Quem foi o primeiro astronauta a dar um passeio espacial?",
        options: ["Alexei Leonov", "Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong"],
        answer: "Alexei Leonov"
    },
    {
        question: "Qual é a única cidade situada em dois continentes?",
        options: ["Istambul", "Moscou", "Londres", "Cidade do Cabo"],
        answer: "Istambul"
    },
    {
        question: "Qual é a unidade básica de estrutura e função em um organismo?",
        options: ["Célula", "Átomo", "DNA", "Proteína"],
        answer: "Célula"
    },
    {
        question: "Quem foi o autor de 'O Retrato de Dorian Gray'?",
        options: ["Oscar Wilde", "James Joyce", "Virginia Woolf", "William Faulkner"],
        answer: "Oscar Wilde"
    },
    {
        question: "Quantos lados tem um heptágono?",
        options: ["7", "6", "8", "5"],
        answer: "7"
    },
    {
        question: "Quem é considerado o 'pai da computação'?",
        options: ["Alan Turing", "Bill Gates", "Steve Jobs", "Tim Berners-Lee"],
        answer: "Alan Turing"
    },
    {
        question: "Qual é o metal mais leve?",
        options: ["Lítio", "Alumínio", "Titânio", "Magnésio"],
        answer: "Lítio"
    },
    {
        question: "Quem escreveu 'O Senhor dos Anéis'?",
        options: ["J.R.R. Tolkien", "C.S. Lewis", "J.K. Rowling", "George R.R. Martin"],
        answer: "J.R.R. Tolkien"
    },
    {
        question: "Quem foi o primeiro presidente do Brasil após o regime militar?",
        options: ["José Sarney", "Fernando Collor", "Itamar Franco", "Fernando Henrique Cardoso"],
        answer: "José Sarney"
    },
    {
        question: "Qual é o maior oceano do mundo?",
        options: ["Pacífico", "Atlântico", "Índico", "Ártico"],
        answer: "Pacífico"
    },
    {
        question: "Quem escreveu 'A Queda da Casa de Usher'?",
        options: ["Edgar Allan Poe", "H.P. Lovecraft", "Stephen King", "Mary Shelley"],
        answer: "Edgar Allan Poe"
    },
    {
        question: "Qual é o símbolo químico para o enxofre?",
        options: ["S", "So", "E", "En"],
        answer: "S"
    },
    {
        question: "Quem foi o primeiro ser humano a viajar para o espaço duas vezes?",
        options: ["Gherman Titov", "Yuri Gagarin", "Alan Shepard", "John Glenn"],
        answer: "Gherman Titov"
    },
    {
        question: "Qual é o animal nacional do Canadá?",
        options: ["Castor", "Urso-pardo", "Alce", "Caribu"],
        answer: "Castor"
    },
    {
        question: "Quem foi o primeiro rei unificador do Egito Antigo?",
        options: ["Menes", "Tutancâmon", "Cleópatra", "Amenhotep"],
        answer: "Menes"
    },
    {
        question: "Qual é a cidade mais antiga do mundo?",
        options: ["Damasco", "Jerusalém", "Alexandria", "Roma"],
        answer: "Damasco"
    },
    {
        question: "Quem foi o primeiro astronauta a pisar na Lua?",
        options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"],
        answer: "Neil Armstrong"
    },
    {
        question: "Qual é o animal que é conhecido como 'o rei da selva'?",
        options: ["Leão", "Tigre", "Elefante", "Gorila"],
        answer: "Leão"
    },
    {
        question: "Quem foi o autor de '1984'?",
        options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Philip K. Dick"],
        answer: "George Orwell"
    },
    {
        question: "Qual é a capital do Japão?",
        options: ["Tóquio", "Kyoto", "Osaka", "Hiroshima"],
        answer: "Tóquio"
    },
    {
        question: "Quem foi o primeiro homem a escalar o Monte Everest?",
        options: ["Sir Edmund Hillary", "Reinhold Messner", "Tenzing Norgay", "Chris Bonington"],
        answer: "Sir Edmund Hillary"
    },
    {
        question: "Quem é considerado o pai da psicologia moderna?",
        options: ["William James", "Sigmund Freud", "Carl Jung", "Ivan Pavlov"],
        answer: "William James"
    },
    {
        question: "Quem escreveu 'A Odisséia'?",
        options: ["Homero", "Virgílio", "Sófocles", "Eurípides"],
        answer: "Homero"
    },
    {
        question: "Qual é o maior animal terrestre?",
        options: ["Elefante africano", "Girafa", "Rinoceronte", "Hipopótamo"],
        answer: "Elefante africano"
    },
    {
        question: "Quem foi o primeiro homem a caminhar na Lua?",
        options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"],
        answer: "Neil Armstrong"
    },
    {
        question: "Qual é o maior rio do mundo em volume de água?",
        options: ["Rio Amazonas", "Rio Nilo", "Rio Yangtzé", "Rio Mississipi"],
        answer: "Rio Amazonas"
    },
    {
        question: "Qual é o processo natural pelo qual a água é devolvida à atmosfera?",
        options: ["Evaporação", "Condensação", "Precipitação", "Infiltração"],
        answer: "Evaporação"
    },
    {
        question: "Quem escreveu 'O Velho e o Mar'?",
        options: ["Ernest Hemingway", "F. Scott Fitzgerald", "John Steinbeck", "Mark Twain"],
        answer: "Ernest Hemingway"
    },
    {
        question: "Qual é o símbolo químico para o carbono?",
        options: ["C", "Co", "Ca", "Cu"],
        answer: "C"
    },
    {
        question: "Qual é a montanha mais alta dos Estados Unidos?",
        options: ["Monte McKinley (Denali)", "Monte Everest", "Monte Whitney", "Monte Rainier"],
        answer: "Monte McKinley (Denali)"
    },
    {
        question: "Quem é conhecido como 'o pai da teoria da relatividade'?",
        options: ["Albert Einstein", "Isaac Newton", "Stephen Hawking", "Galileu Galilei"],
        answer: "Albert Einstein"
    },
    {
        question: "Qual é o maior órgão interno do corpo humano?",
        options: ["Fígado", "Pulmões", "Coração", "Intestino delgado"],
        answer: "Fígado"
    },
    {
        question: "Quem foi o primeiro presidente dos Estados Unidos a ser impeachmado?",
        options: ["Andrew Johnson", "Richard Nixon", "Bill Clinton", "Donald Trump"],
        answer: "Andrew Johnson"
    },
    {
        question: "Qual é o menor osso do corpo humano?",
        options: ["Estribo", "Martelo", "Bigorna", "Tálus"],
        answer: "Estribo"
    },
    {
        question: "Quem foi o primeiro homem a criar um microscópio?",
        options: ["Anton van Leeuwenhoek", "Galileu Galilei", "Robert Hooke", "Isaac Newton"],
        answer: "Anton van Leeuwenhoek"
    },
    {
        question: "Quem pintou 'O Grito'?",
        options: ["Edvard Munch", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"],
        answer: "Edvard Munch"
    },
    {
        question: "Qual é o símbolo químico para o hidrogênio?",
        options: ["H", "Hy", "Hg", "He"],
        answer: "H"
    },
    {
        question: "Quem foi o primeiro presidente do Brasil eleito pelo voto direto após a ditadura?",
        options: ["Tancredo Neves", "Fernando Collor", "Fernando Henrique Cardoso", "Luiz Inácio Lula da Silva"],
        answer: "Fernando Collor"
    },
    {
        question: "Qual é o maior animal marinho?",
        options: ["Baleia Azul", "Tubarão Branco", "Polvo Gigante", "Lula Colossal"],
        answer: "Baleia Azul"
    },
    {
        question: "Quem escreveu 'O Médico e o Monstro'?",
        options: ["Robert Louis Stevenson", "H.G. Wells", "Edgar Allan Poe", "Mary Shelley"],
        answer: "Robert Louis Stevenson"
    },
    {
        question: "Qual é a velocidade do som em metros por segundo?",
        options: ["343 m/s", "300 m/s", "220 m/s", "400 m/s"],
        answer: "343 m/s"
    },
    {
        question: "Qual é o símbolo químico para o oxigênio?",
        options: ["O", "Ox", "Oi", "Os"],
        answer: "O"
    },
    {
        question: "Quem foi o primeiro homem a viajar para o espaço duas vezes?",
        options: ["Gherman Titov", "Yuri Gagarin", "Alan Shepard", "John Glenn"],
        answer: "Gherman Titov"
    },
    {
        question: "Qual é o nome do maior recife de coral do mundo?",
        options: ["Grande Barreira de Coral", "Recife de Ningaloo", "Recife de Tubbataha", "Recife de Palau"],
        answer: "Grande Barreira de Coral"
    },
    {
        question: "Qual é o resultado de (3 * 5) + 8 / 2?",
        options: ["17", "18", "19", "20"],
        answer: "19"
    },
    {
        question: "Qual é o valor de x na equação 2x + 5 = 15?",
        options: ["5", "7", "8", "10"],
        answer: "5"
    },
    {
        question: "Qual é a solução para a equação quadrática x^2 - 4x + 4 = 0?",
        options: ["x = 2", "x = 3", "x = 4", "x = 5"],
        answer: "x = 2"
    },
    {
        question: "Se um triângulo tem lados medindo 5 cm, 12 cm e 13 cm, qual é a sua área?",
        options: ["24 cm²", "30 cm²", "36 cm²", "40 cm²"],
        answer: "30 cm²"
    },
    {
        question: "Qual é o perímetro de um retângulo com comprimento 8 cm e largura 6 cm?",
        options: ["24 cm", "26 cm", "28 cm", "30 cm"],
        answer: "28 cm"
    },
    {
        question: "Qual é o valor de π (pi) arredondado para duas casas decimais?",
        options: ["3.12", "3.14", "3.16", "3.18"],
        answer: "3.14"
    },
    {
        question: "Se uma loja vende uma camisa por R$ 35 e outra por R$ 25, qual é o preço médio?",
        options: ["R$ 25", "R$ 30", "R$ 32", "R$ 40"],
        answer: "R$ 30"
    },
    {
        question: "Qual é o valor de √(9 + √9)?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "Qual é o valor de cos(60°)?",
        options: ["1/2", "√3/2", "1", "2"],
        answer: "1/2"
    },
    {
        question: "Se um cubo tem volume de 64 cm³, qual é o comprimento de uma de suas arestas?",
        options: ["4 cm", "5 cm", "6 cm", "7 cm"],
        answer: "4 cm"
    },
    {
        question: "Qual é o valor de log₂(16)?",
        options: ["2", "3", "4", "5"],
        answer: "4"
    },
    {
        question: "Se 30% de um número é 45, qual é o número?",
        options: ["100", "120", "150", "200"],
        answer: "150"
    },
    {
        question: "Qual é o valor de 2^(3/2)?",
        options: ["√2", "2", "√3", "3"],
        answer: "√8"
    },
    {
        question: "Qual é a média aritmética de 2, 4, 6 e 8?",
        options: ["4", "5", "6", "7"],
        answer: "5"
    },
    {
        question: "Qual é o valor de sen(45°) * cos(45°)?",
        options: ["1/2", "√2/2", "1", "√3/2"],
        answer: "1/2"
    },
    {
        question: "Se x + y = 10 e x - y = 4, qual é o valor de x?",
        options: ["3", "4", "5", "6"],
        answer: "7"
    },
    {
        question: "Qual é a raiz cúbica de 64?",
        options: ["2", "3", "4", "5"],
        answer: "4"
    },
    {
        question: "Qual é a área de um círculo com raio 5 cm?",
        options: ["25π cm²", "50π cm²", "75π cm²", "100π cm²"],
        answer: "25π cm²"
    },
    {
        question: "Se log₃(x) = 2, qual é o valor de x?",
        options: ["3", "6", "9", "12"],
        answer: "9"
    },
    {
        question: "Qual é o valor de 3% de 500?",
        options: ["15", "25", "35", "45"],
        answer: "15"
    },
    {
        question: "Qual é o processo pelo qual os organismos vivos produzem energia?",
        options: ["Fotossíntese", "Respiração", "Digestão", "Circulação"],
        answer: "Respiração"
    },
    {
        question: "Qual é o órgão humano responsável pela produção de insulina?",
        options: ["Pâncreas", "Fígado", "Rins", "Coração"],
        answer: "Pâncreas"
    },
    {
        question: "Qual é o sistema do corpo humano responsável por proteger o corpo de patógenos?",
        options: ["Sistema Imunológico", "Sistema Nervoso", "Sistema Endócrino", "Sistema Respiratório"],
        answer: "Sistema Imunológico"
    },
    {
        question: "Qual é a menor unidade estrutural e funcional de um organismo vivo?",
        options: ["Célula", "Átomo", "Molécula", "Tecido"],
        answer: "Célula"
    },
    {
        question: "Qual é o ácido encontrado no estômago humano?",
        options: ["Ácido clorídrico", "Ácido sulfúrico", "Ácido cítrico", "Ácido acético"],
        answer: "Ácido clorídrico"
    },
    {
        question: "Qual é o nome dado ao processo de divisão celular que resulta em células sexuais?",
        options: ["Meiose", "Mitose", "Fotossíntese", "Digestão"],
        answer: "Meiose"
    },
    {
        question: "Qual é a parte do corpo humano responsável pela filtragem do sangue?",
        options: ["Rins", "Pulmões", "Fígado", "Coração"],
        answer: "Rins"
    },
    {
        question: "Qual é a camada mais externa da pele humana?",
        options: ["Epiderme", "Derme", "Hipoderme", "Mesoderme"],
        answer: "Epiderme"
    },
    {
        question: "Qual é a principal função dos glóbulos brancos no corpo humano?",
        options: ["Combater infecções", "Transportar oxigênio", "Coagulação sanguínea", "Armazenar energia"],
        answer: "Combater infecções"
    },
    {
        question: "Qual é o nome dado ao processo de eliminação de resíduos do corpo através da urina?",
        options: ["Excreção", "Digestão", "Transpiração", "Fotossíntese"],
        answer: "Excreção"
    },
    {
        question: "Qual é a função principal do sistema circulatório no corpo humano?",
        options: ["Transportar nutrientes e oxigênio", "Produzir hormônios", "Eliminar resíduos", "Proteger contra infecções"],
        answer: "Transportar nutrientes e oxigênio"
    },
    {
        question: "Qual é o ácido encontrado nas células musculares que causa fadiga durante o exercício?",
        options: ["Ácido lático", "Ácido acético", "Ácido úrico", "Ácido sulfúrico"],
        answer: "Ácido lático"
    },
    {
        question: "Qual é o órgão responsável pela produção de glóbulos vermelhos?",
        options: ["Medula óssea", "Baço", "Fígado", "Rins"],
        answer: "Medula óssea"
    },
    {
        question: "Qual é o principal órgão do sistema respiratório humano?",
        options: ["Pulmões", "Traqueia", "Bronquíolos", "Diafragma"],
        answer: "Pulmões"
    },
    {
        question: "Qual é a unidade básica de hereditariedade em um organismo vivo?",
        options: ["Gene", "Cromossomo", "DNA", "RNA"],
        answer: "Gene"
    },
    {
        question: "Qual é o nome do processo pelo qual os organismos verdes produzem seu próprio alimento?",
        options: ["Fotossíntese", "Respiração", "Digestão", "Excreção"],
        answer: "Fotossíntese"
    },
    {
        question: "Qual é o principal órgão do sistema nervoso central?",
        options: ["Cérebro", "Medula Espinhal", "Nervos Periféricos", "Gânglios Linfáticos"],
        answer: "Cérebro"
    },
    {
        question: "Qual é o nome dado à estrutura que transporta a água e os nutrientes de uma planta?",
        options: ["Xilema", "Floema", "Raiz", "Folha"],
        answer: "Floema"
    },
    {
        question: "Qual é o processo de formação de novas células em um organismo vivo?",
        options: ["Divisão Celular", "Digestão", "Fotossíntese", "Excreção"],
        answer: "Divisão Celular"
    },
    {
        question: "Qual é o principal órgão do sistema digestivo humano?",
        options: ["Estômago", "Intestino Delgado", "Fígado", "Esôfago"],
        answer: "Intestino Delgado"
    }
];