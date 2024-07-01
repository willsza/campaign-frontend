Este projeto utiliza **Next.js** para renderização no lado do servidor e geração de sites estáticos, proporcionando SEO aprimorado e performance otimizada. **Server Components** e **Server Actions** são utilizados para melhorar a performance e a segurança, dividindo a renderização entre cliente e servidor e manipulando dados diretamente no servidor. O gerenciamento de formulários é simplificado com **React Hook Form**, enquanto **Zod** garante validação robusta de dados. **Zustand** facilita o gerenciamento de estado com uma API intuitiva. Para estilização, **Tailwind CSS** oferece uma abordagem utilitária eficiente, e **shadcn/ui** fornece componentes de interface de usuário pré-construídos e customizáveis, acelerando o desenvolvimento e mantendo a consistência visual.

## Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/)**: Framework React para renderização no lado do servidor e geração de sites estáticos.
- **Server Components**: Utilização de componentes do servidor para otimizar a renderização e melhorar a performance.
- **Server Actions**: Implementação de ações do servidor para manipulação de dados de forma eficiente.
- **[React Hook Form](https://react-hook-form.com/)**: Biblioteca para gerenciamento de formulários em React.
- **[Zod](https://github.com/colinhacks/zod)**: Biblioteca de validação de esquemas para TypeScript.
- **[Zustand](https://github.com/pmndrs/zustand)**: Gerenciamento de estado simples e escalável para React.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utilitário para estilização rápida e eficiente.
- **[shadcn/ui](https://github.com/shadcn/ui)**: Componentes de interface de usuário pré-construídos e altamente customizáveis.

## Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Você instalou a versão mais recente do `Node.js`.
- Você tem um gerenciador de pacotes como `npm` ou `yarn` instalado.

## Instalação

1. Clone o repositório

    ```bash
    git clone https://github.com/seu-usuario/nome-do-repositorio.git
    ```

2. Navegue até o diretório do projeto

    ```bash
    cd nome-do-repositorio
    ```

3. Instale as dependências

    ```bash
    pnpm install
    # ou
    npm install
    # ou
    yarn install
    ```

## Uso

Para iniciar o servidor de desenvolvimento, execute:

```bash
pnpm dev
# ou
npm run dev
# ou
yarn dev
```
Abra http://localhost:3000 com seu navegador para ver o resultado.

## Estrutura do Projeto

Aqui está a estrutura básica do projeto:

```
/campaign-frontend
├── public
│   ├── favicon.ico
│   └── ...
├── src
│   ├── actions
│   │   └── ...
│   ├── app
│   │   └── ...
│   ├── components
│   │   └── ...
│   ├── constants
│   │   └── ...
│   ├── hooks
│   │   └── ...
│   ├── lib
│   │   └── ...
│   ├── models
│   │   └── ...
│   ├── schemas
│   │   └── ...
│   ├── types
│   │   └── ...
│   └── ...
├── .env.local
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```
## Configuração

Certifique-se de configurar suas variáveis de ambiente no arquivo `.env.`local, conforme o exemplo abaixo:

```
# Exemplo de variáveis de ambiente
NEXT_PUBLIC_API_URL=http://api.example.com
ANOTHER_ENV_VARIABLE=value
```