# Front Marketplace

Um frontend moderno de Marketplace construído com React, Vite e Tailwind CSS. A interface é estilizada com componentes customizados baseados no Shadcn UI, tipografia Geist e ícones Lucide para entregar uma experiência de usuário performática e elegante.

🚀 Tecnologias Utilizadas
* **React 19** (Biblioteca para construção de interfaces de usuário)
* **Vite** (Ferramenta de build e dev server ultrarrápido)
* **TypeScript** (Superset do JavaScript com tipagem estática)
* **Tailwind CSS v4** (Framework CSS utilitário para estilização ágil)
* **Shadcn UI & Base UI** (Base de componentes de interface acessíveis e altamente customizáveis)
* **Lucide React** (Ícones belos e consistentes)
* **Embla Carousel** (Biblioteca de carrossel fluida para React)
* **Geist Font** (Tipografia moderna projetada pela Vercel)

📦 Como rodar o projeto localmente

1. Pré-requisitos
Tenha o Node.js e um gerenciador de pacotes (npm, yarn ou pnpm) instalados em sua máquina.

2. Instalação
Na raiz do repositório, clone o projeto e baixe as dependências:

```bash
git clone https://github.com/raphael-aciardi/front-marketplace.git
cd front-marketplace
yarn install
```

3. Executando o Servidor
# Iniciar o servidor de desenvolvimento com Hot Reload (auto-reiniciar ao modificar o código)
```bash
yarn dev
```
A interface estará rodando em http://localhost:5173.

4. Construindo para Produção
Gere os arquivos minificados otimizados para produção:
```bash
yarn build
```
Para visualizar a build de produção localmente, utilize: `yarn preview`

🏛️ Estrutura do Projeto (React)
O projeto é organizado seguindo boas práticas de componentização e separação de responsabilidades na pasta `src/`:

* `src/components/` - Contém componentes de UI reutilizáveis genéricos (como botões, badges, carrossel) e componentes compostos (como o Header e a Sidebar).
* `src/pages/` - Contém as rotas e views principais da aplicação, agrupando a regra visual de cada página.
* `src/templates/` - Layouts utilitários que definem a casca comum entre múltiplas páginas (ex: cabeçalhos e barras laterais envolventes).
* `src/lib/` - Funções utilitárias e helpers globais, como utilitários do Tailwind (ex: `cn`).