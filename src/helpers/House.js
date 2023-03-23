function House(name) {
    if (name === 'Slytherin') {
       alert('A Sonserina têm como características, ambição, astúcia e individualismo,por isso estão sempre se dedicando a alcançar e expandir metas e se empenhando com inteligência,essas qualidades podem promover um senso de competição muito aflorado, o que os torna presunçosos e egoístas.  ')
    } 
    else if(name === 'Ravenclaw'){
        alert('Suas principais características são relacionadas a sabedoria, criatividade e personalidade única, o que garante a eles certa excentricidade.')
    }
    else if (name === 'Hufflepuff'){
        alert('Os estudantes da Lufa-Lufa são dedicados, pacientes e honestos. Suas admiráveis características os tornam trabalhadores árduos e modestos.')
    }
    else {
       alert('A Casa valoriza feitos de coragem e superação pessoal que costumam ser realizados por altruísmo. Seus estudantes tendem a ser bastante aventureiros, mas se destacam, sobretudo, pela lealdade.')
    }
}

export default House