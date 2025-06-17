// Apenas efeitos de scroll
ScrollReveal({
  distance: '40px',
  duration: 1000,
  easing: 'ease-out',
  origin: 'bottom',
  reset: false
});

ScrollReveal().reveal('section', {
  interval: 150
});

async function setLanguage(lang) {
  const response = await fetch(`${lang}.json`);
  const translations = await response.json();

  document.getElementById('sobre-titulo').textContent = translations.sobre;
  document.getElementById('sobre-texto1').textContent = translations.sobreTexto1;
  document.getElementById('sobre-texto2').textContent = translations.sobreTexto2;
  document.getElementById('projetos-titulo').textContent = translations.projetos;
  document.getElementById('projeto1').textContent = translations.projeto1;
  document.getElementById('projeto1-desc').textContent = translations.projeto1desc;
  document.getElementById('projeto2').textContent = translations.projeto2;
  document.getElementById('projeto2-desc').textContent = translations.projeto2desc;
  document.getElementById('habilidades-titulo').textContent = translations.habilidades;
  document.getElementById('habilidades-sociais-titulo').textContent = translations.habilidadesSociais;
  document.getElementById('contato-titulo').textContent = translations.contato;
  document.getElementById('contato-email').textContent = translations.contatoEmail;
  document.getElementById('contato-telefone').textContent = translations.contatoTelefone;
  document.getElementById('contato-localizacao').textContent = translations.contatoLocalizacao;
  document.getElementById('contato-linkedin').textContent = translations.contatoLinkedin;
  document.getElementById('contato-github').textContent = translations.contatoGithub;
  document.getElementById('habilidades-linguagens').textContent = translations.habilidadesLinguagens;
  document.getElementById('habilidades-ferramentas').textContent = translations.habilidadesFerramentas;
  document.getElementById('habilidades-outros').textContent = translations.habilidadesOutros;
  document.getElementById('sociais-comunicacao').textContent = translations.sociaisComunicacao;
  document.getElementById('sociais-equipe').textContent = translations.sociaisEquipe;
  document.getElementById('sociais-problemas').textContent = translations.sociaisProblemas;
  document.getElementById('habilidades-linguagens-desc').textContent = translations.habilidadesLinguagensDesc;
  document.getElementById('habilidades-ferramentas-desc').textContent = translations.habilidadesFerramentasDesc;
  document.getElementById('habilidades-outros-desc').textContent = translations.habilidadesOutrosDesc;
  document.getElementById('sociais-comunicacao-desc').textContent = translations.sociaisComunicacaoDesc;
  document.getElementById('sociais-equipe-desc').textContent = translations.sociaisEquipeDesc;
  document.getElementById('sociais-problemas-desc').textContent = translations.sociaisProblemasDesc;
  document.getElementById('nav-sobre').textContent = translations.navSobre;
  document.getElementById('nav-projetos').textContent = translations.navProjetos;
  document.getElementById('nav-habilidades').textContent = translations.navHabilidades;
  document.getElementById('nav-contato').textContent = translations.navContato;

  // Troca o que está no botão de troca de idioma
  document.getElementById('lang-toggle').textContent = lang === 'pt-br' ? 'EN' : 'BR';
}

document.getElementById('lang-toggle').addEventListener('click', function() {
  const currentLang = document.documentElement.lang;
  const newLang = currentLang === 'pt-br' ? 'en' : 'pt-br';
  document.documentElement.lang = newLang;
  setLanguage(newLang);
});

// Inicializa com o idioma atual
setLanguage(document.documentElement.lang);
