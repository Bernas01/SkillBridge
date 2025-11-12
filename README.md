
# SkillBridge — Frontend SPA (React + Tailwind)
**Disciplina:** Front-End Design – Web Development (Global Solution FIAP 2025)
**Tema:** O Futuro do Trabalho – Conectando pessoas, competências e propósito por meio da tecnologia.
**Integrantes:** Felipe Bernardes — RM 564360; Guilherme Romero — RM 564431

## Resumo do projeto
SkillBridge é uma Single Page Application (SPA) desenvolvida com React e Tailwind CSS. Ela exibe uma lista de 60 perfis fictícios (arquivo JSON), permite busca e filtragem por área e localização, abre modal com informações completas do perfil e possui ações simuladas: **Recomendar profissional** e **Enviar mensagem**. Oferece Dark Mode e design responsivo.

## Estrutura de arquivos
- `package.json` — metadados e scripts (dev/build/preview)
- `index.html` — ponto de entrada
- `src/main.jsx` — bootstrap do React
- `src/App.jsx` — componente principal da SPA
- `src/index.css` — estilos (Tailwind placeholders; instructions included)
- `src/data/profiles.json` — JSON com 60 perfis simulados
- `.gitignore` — ignores
- `README.md` — este arquivo

## Como executar (passo a passo)
> Observação: o repositório disponibiliza o código. Recomendamos instalar Node 18+.

1. Clone o repositório (ou descompacte a pasta).
2. Instale dependências:
```
npm install
```
3. Para desenvolvimento com Vite (servidor local):
```
npm run dev
```
O Vite exibirá o endereço (por exemplo http://localhost:5173).

### Tailwind CSS (opcional se você preferir usar CDN)
Este projeto foi escrito com classes Tailwind no JSX. Para usar Tailwind corretamente, siga o guia oficial para configurar Tailwind com Vite + React:
https://tailwindcss.com/docs/guides/vite

Como alternativa rápida para testes locais, você pode incluir o CDN do Tailwind no `<head>` de `index.html` e o app funcionará visualmente (menos otimizado).

## Usuários / Senhas
Não há autenticação real; todos os botões ("Recomendar" e "Enviar mensagem") são simulados e exibem alertas/prompt.

## Deploy
Você pode gerar build com:
```
npm run build
```
E hospedar os arquivos gerados no serviço de sua preferência (Netlify, Vercel, GitHub Pages, etc.)

## Link do repositório
- **Link do repositório:** (https://github.com/Bernas01/SkillBridge.git)

## Observações finais
- Incluí um JSON com 60 perfis fictícios em `src/data/profiles.json`.

----
Eentrega por:
Felipe Bernardes — RM 564360
Guilherme Romero — RM 564431
