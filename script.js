function startTrivia() {
  var name = prompt('Olá, seja bem vindo(a), qual seu nome?');
  if (name === "" || name === null) {
  var publicarName = document.getElementById('name').innerHTML = 'Olá, Desconhecido(a)!';
  } else { 
  var publicarName = document.getElementById('name').innerHTML = 'Olá, ' + name + '!';
}
console.log(name);
}

function opcaoA(){
  var pergA1 = prompt('Em que ano o personagem Batman foi criado? \n A)1939 \n B)1959 \n C)1979');
  while (pergA1 === "" || pergA1 === null) { 
    pergA1 = prompt('Responda, por favor! \n Em que ano o personagem Batman foi criado? \n A)1939 \n B)1959 \n C)1979')
  };
  if (pergA1 === "A" || pergA1 === "a") { 
    document.getElementById('paragrafoA1').innerHTML = 'Sua resposta está correta!'
    } else { 
    document.getElementById ('paragrafoA1').innerHTML = 'Você respondeu ' + pergA1 + ", a resposta correta é A"
  };
    
  var pergA2 = prompt('Qual destas personagens teve uma série televisiva exibida na década de 70? \n A)Supergirl \n B)Mulher Gavião \n C)Mulher Maravilha');
  while (pergA2 === "" || pergA2 === null) { 
    pergA2 = prompt('Responda, por favor! \n Qual destas personagens teve uma série televisiva exibida na década de 70? \n A)Supergirl \n B)Mulher Gavião \n C)Mulher Maravilha')
  };
  if (pergA2 === "C" || pergA2 === "c") { 
    document.getElementById('paragrafoA2').innerHTML = 'Sua resposta está correta!'
  } else { 
    document.getElementById ('paragrafoA2').innerHTML = 'Você respondeu ' + pergA2 + ', a resposta correta é C'
  };

  var pergA3 = prompt('O que significa o DC da DC Comics? \n A)Dark Comics \n B)Detective Comics \n C)Defense Comics');
  while (pergA3 === "" || pergA3 === null) { 
    pergA3 = prompt('Responda, por favor! \n O que significa o DC da DC Comics?? \n A)Dark Comics \n B)Detective Comics \n C)Defense Comics')
  }; 
  if (pergA3 === "B" || pergA3 === "b") { 
    document.getElementById('paragrafoA3').innerHTML = 'Sua resposta está correta!'
  } else { 
    document.getElementById ('paragrafoA3').innerHTML = 'Você respondeu ' + pergA3 + ", a resposta correta é B"
  };

  setTimeout("location.href = 'resultado.html'",10000);
}


function opcaoB(){
    
  var pergB1 = prompt('Em que ano a Marvel Comics foi fundada? \n A)1943 \n B)1947 \n C)1950');
  while (pergB1 === "" || pergB1 === null) { 
    pergB1 = prompt('Responda, por favor! \n Em que ano a Marvel Comics foi fundada? \n A)1943 \n B)1947 \n C)1950')
  };
  if (pergB1 === "B" || pergB1 === "b") { 
    document.getElementById('paragrafoB1').innerHTML = 'Sua resposta está correta!'
  } else { 
    document.getElementById ('paragrafoB1').innerHTML = 'Você respondeu ' + pergB1 + ", a resposta correta é B"
  };
    
  var pergB2 = prompt('Quem interpretará a Miss Marvel no cinema em 2019? \n A)Brie Larson \n B)Alice Vikander \n C)Emma Stone');
  while (pergB2 === "" || pergB2 === null) { 
    pergB2 = prompt('Responda, por favor! \n Quem interpretará a Miss Marvel no cinema em 2019? \n A)Brie Larson \n B)Alice Vikander \n C)Emma Stone')
  };
  if (pergB2 === "A" || pergB2 === "a") { 
    document.getElementById('paragrafoB2').innerHTML = 'Sua resposta está correta!'
  } else { 
        document.getElementById ('paragrafoB2').innerHTML = 'Você respondeu ' + pergB2 + ", a resposta correta é A"
  };

  var pergB3 = prompt('Qual o nome e sobrenome da Feiticeira Escarlate? \n A)Wanda Romanoff \n B)Nanda Maximoff \n C)Wanda Maximoff');
  while (pergB3 === "" || pergB3 === null) { 
    pergB3 = prompt('Responda, por favor! \n Qual o nome e sobrenome da Feiticeira Escarlate? \n A)Wanda Romanoff \n B)Nanda Maximoff \n C)Wanda Maximoff')
  }; 
  if (pergB3 === "C" || pergB3 === "c") { 
    document.getElementById('paragrafoB3').innerHTML = 'Sua resposta está correta!'
  } else { document.getElementById ('paragrafoB3').innerHTML = 'Você respondeu ' + pergB3 + ", a resposta correta é C"
  };

  setTimeout("location.href = 'resultado.html'",10000);
}

