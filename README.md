# Mar Conexões — site institucional

Site estático (HTML + CSS + JS puro), sem build e sem dependências pagas.

## Prévia local
```
npx http-server -p 8080 -c-1
```
Abra http://localhost:8080 (ou, sem Node: `python3 -m http.server 8080`).

## Onde editar
- **Textos:** `index.html` (seções comentadas) e `404.html`.
- **Cores e fontes:** variáveis em `:root`, no topo de `assets/css/styles.css`.
- **Imagens:** `assets/img/` (recortes WebP). Originais em `src/`. Para trocar, substitua o arquivo mantendo o nome.
- **Contatos:** `assets/js/site-config.js` (WhatsApp, Instagram, e-mail). Vazios = não aparecem no site.
- **Favicon:** `assets/favicon.svg`.

## Pendências
- Logo aprovado (hoje há um wordmark provisório com ondas; não é logo oficial).
- Domínio, textos de apresentação adicionais de Marjana e Raquel (se desejado) e confirmação do material de marca.
- Endereço, CNPJ e páginas legais: não incluídos de propósito.

## Publicação e domínio
Hospedagem estática gratuita (ex.: GitHub Pages, Netlify, Cloudflare Pages): publicar a pasta raiz, registrar o domínio e apontar DNS (CNAME/A) conforme o provedor; habilitar HTTPS. Configurar `404.html` como página de erro (use caminhos absolutos se o provedor servir em subpastas).
