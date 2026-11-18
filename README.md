# Monteiro Lobato Futsal — Matrícula

Site dedicado da unidade **Monteiro Lobato Futsal**. A home já é a ficha de cadastro (sem seleção de unidade).

## Planilha (mesma do ndf-futsal)

`GOOGLE_SCRIPT_URL` em `config.js` aponta para a **mesma** implantação Apps Script / planilha do projeto `ndf-futsal`. Não altere a URL `/exec` sem sincronizar os dois projetos.

Aba de cadastros: **Monteiro Lobato Futsal**

## Deploy

- GitHub: este repositório
- Vercel: `https://monteiro-lobato-futsal.vercel.app`

## Mercado Pago

Slots em `UNIDADES["monteiro-lobato"].paymentLinks` (`COLE_AQUI_...`). O botão de pagar só aparece com URL `https://...`.

## Apps Script

Código em `google-apps-script/Code.gs`. Ao atualizar: **Gerenciar implantações → editar → Nova versão** (mantém a URL).
