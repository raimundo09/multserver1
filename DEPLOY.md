# Instruções de Deploy

## Problema Resolvido
O problema das páginas não abrindo no deploy foi causado pela falta de configuração para Single Page Applications (SPA) no servidor.

## Arquivos Criados/Modificados

### 1. `public/_redirects` (Netlify)
```
/*    /index.html   200
```

### 2. `public/404.html` (GitHub Pages)
Página 404 personalizada que redireciona para a aplicação principal.

### 3. `vercel.json` (Vercel)
Configuração de rewrites para redirecionar todas as rotas para index.html.

### 4. `public/.htaccess` (Apache)
Configuração para servidores Apache.

### 5. `index.html`
Adicionado script para lidar com roteamento em servidores estáticos.

### 6. `vite.config.ts`
Otimizações de build adicionadas.

## Plataformas Suportadas

### Netlify
- O arquivo `_redirects` já está configurado
- Deploy automático funcionará corretamente

### Vercel
- O arquivo `vercel.json` já está configurado
- Deploy automático funcionará corretamente

### GitHub Pages
- O arquivo `404.html` já está configurado
- Funciona com GitHub Actions ou deploy manual

### Apache
- O arquivo `.htaccess` já está configurado
- Funciona em servidores Apache tradicionais

### Nginx
Adicione ao seu arquivo de configuração:
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

## Comandos de Deploy

```bash
# Build do projeto
npm run build

# Preview local do build
npm run preview
```

## Verificação
Após o deploy, teste as seguintes rotas:
- `/` (página inicial)
- `/help-center`
- `/faq`
- `/privacy-policy`
- `/terms-of-service`

Todas devem funcionar corretamente, incluindo refresh da página e acesso direto via URL. 