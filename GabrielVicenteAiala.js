geral ="   <html><head><title>Gulliver Traveller - Roteiros</title></head><body><b>->1 - Roteiros para *São Paulo*</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554 a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil e aqui vão 3 dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>#Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para *Las Vegas*</b><br>Viva Las Vegas!<br>       A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905 e é considerada uma cidade, oficialmente, desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>#Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>#Roteiro B | Região: Downtown<br>; Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado; <br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b><br>Privet!<br>A capital Russa fica situada às margens do Rio Moscou e apesar de ser a cidade mais cosmopolita da Rússia, conta com grande resguardo de sua história soviética<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>#Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>#Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  <br></body></html>"
function separarDados(geral) {

    //O conteúdo do roteiro A de cada cidade avaliada.
    roteiros = geral.split("#",10)
    listaRoteiro = []
    roteiros.forEach(element => {
        if (element.substr(8,1)=='A') 
        {
            listaRoteiro.push(element.replaceAll('<br>','').replaceAll('Roteiro A | Região',''))
            
        }
        
    });
    console.log(listaRoteiro)
    //O nome das cidades avaliadas.
    cidades = geral.split("*",10)
    listaCidades = []
    cidades.forEach(element => {
        if (element.substr(0,1)!='<' && element.substr(0,1)!=' ') 
        {
            listaCidades.push(element)
        }
        
    });
    //Quantos locais são citados no roteiro A de cada cidade.
    contadorLocaisRoteiroA = []
    ch=";"
    roteiros.forEach(element => {
        if (element.substr(8,1)=='A') 
        {
            
            contadorLocaisRoteiroA.push([...element].filter(x => x === ch).length + 1) 
            
        }
        
    });
    console.log(contadorLocaisRoteiroA)

    //O nome dos pontos turísticos localizados no bairro Centro da cidade de São Paulo
    
        PontosSp=roteiros[2].split(';') 
        PontosSp[0]=PontosSp[0].substr(30)
        PontosSp[2]=PontosSp[2].substr(1,11)
        console.log(PontosSp)

    //O nome dos pontos turísticos localizados no bairro Downtown na cidade de Los Angeles
        PontosVegas = roteiros[5].split(';')
        PontosVegas[0]=PontosVegas[0]
        

        alert('nome das cidades avaliadas'+listaCidades)
        alert('conteúdo do roteiro A de cada cidade avaliada' +'|São Paulo '+listaRoteiro[0]+
        +'|'+listaRoteiro[1]+'|Moscou'+listaRoteiro[2])
        alert('O nome dos pontos turísticos localizados no bairro Centro da cidade de São Paulo:'+PontosSp)
        alert('O nome dos pontos turísticos localizados no bairro Downtown na cidade de Los Angeles:'+PontosVegas[0].replaceAll('<br>','').replaceAll('Roteiro B | Região:','')
        +PontosVegas[1]+PontosVegas[2])
    }
separarDados(geral)