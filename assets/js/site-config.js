/* ==========================================================================
   CONFIGURAÇÃO DE CONTATOS — Mar Conexões
   Preencha apenas com dados REAIS. Campos vazios não aparecem no site.

   Contatos informados pela Mar Conexões:
   - whatsapp  → lista de números com DDI+DDD (55 + 21 + número); para adicionar outro, inclua mais um item
   - instagram → usuário sem @
   - email     → e-mail comercial
   ========================================================================== */
window.MAR_CONFIG = {
  whatsapp: ["5521970934004", "5521967373007"],
  whatsappMensagem: "Olá! Gostaria de conversar sobre um projeto com a Mar Conexões.",
  instagram: "marconexoes",
  email: "marconexoesmkt@gmail.com",
  /* Clientes: a aba e a seção só aparecem quando houver pelo menos um item.
     Cada item: { nome (obrigatório); opcionais: logo ("assets/img/clientes/arquivo.png"), tipo, descricao, servicos [lista], endereco, horario, telefones, email, site ("https://...") }
     Exemplo: clientes: [ { nome: "Clínica Exemplo", logo: "assets/img/clientes/exemplo.png" } ] */
  clientes: [
    {
      nome: "Ortocopa",
      tipo: "Clínica odontológica · Copacabana, Rio de Janeiro",
      descricao: "Clínica odontológica em Copacabana, com profissionais capacitados e tratamentos modernos, conforto e segurança no atendimento. Há mais de 20 anos transformando sorrisos com técnica e inovação.",
      servicos: ["Invisalign", "Implantes dentários", "Scanner iTero", "Clareamento", "Check-ups"],
      endereco: "Rua Siqueira Campos, 117B · Copacabana · Rio de Janeiro",
      horario: "Seg a sex, 9h às 19h · Sáb, 8h30 às 12h30",
      telefones: "(21) 2255-9290 · (21) 2547-6057 · WhatsApp (21) 98839-9290",
      email: "contato@ortocopa.com.br",
      site: "https://ortocopa.com.br"
    }
  ]
};
