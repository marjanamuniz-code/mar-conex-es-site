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
     Cada item: { nome (obrigatório); opcionais: logo ("assets/img/clientes/arquivo.png"), tipo, descricao, servicos [lista], endereco, horario, telefones, email, instagram (usuário sem @), site ("https://...") }
     Exemplo: clientes: [ { nome: "Clínica Exemplo", logo: "assets/img/clientes/exemplo.png" } ] */
  clientes: [
    {
      nome: "Ortocopa",
      tipo: "Torneio de ortopedistas · 10ª edição",
      instagram: "ortocopa_rio"
    }
  ]
};
