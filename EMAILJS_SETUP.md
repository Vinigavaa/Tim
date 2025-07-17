# Configuração do EmailJS

Este guia irá ajudá-lo a configurar o EmailJS para que o formulário de leads funcione corretamente.

## Passo 1: Criar conta no EmailJS

1. Acesse [https://www.emailjs.com/](https://www.emailjs.com/)
2. Crie uma conta gratuita
3. Confirme seu email

## Passo 2: Configurar o serviço de email

1. No painel do EmailJS, vá para "Email Services"
2. Clique em "Add New Service"
3. Escolha seu provedor de email (Gmail, Outlook, etc.)
4. Configure as credenciais do seu email
5. Anote o `Service ID` gerado

## Passo 3: Criar template de email

1. Vá para "Email Templates"
2. Clique em "Create New Template"
3. Use o seguinte template:

```
Subject: Novo Lead: {{nome}} - {{ramo_negocio}}

Olá {{to_name}},

Você recebeu um novo lead através do formulário da landing page:

------ INFORMAÇÕES DO LEAD ------
Nome: {{nome}}
Instagram: {{instagram}}
Ramo do negócio: {{ramo_negocio}}
Faturamento: {{faturamento}}
Data do envio: {{data_envio}}

------ PRÓXIMOS PASSOS ------
Entre em contato com este lead o mais rápido possível para não perder a oportunidade.

Atenciosamente,
Sistema de Captura de Leads
```

4. Salve o template e anote o `Template ID`

## Passo 4: Obter a chave pública

1. Vá para "Account" > "General"
2. Copie sua `Public Key`

## Passo 5: Configurar no projeto

1. Abra o arquivo `src/config/emailjs.ts`
2. Substitua os valores pelas suas credenciais:

```typescript
export const emailjsConfig = {
  serviceId: 'seu_service_id_aqui',
  templateId: 'seu_template_id_aqui',
  publicKey: 'sua_public_key_aqui'
};
```

## Passo 6: Testar o formulário

1. Execute o projeto: `npm run dev`
2. Acesse a página do formulário
3. Preencha e envie um teste
4. Verifique se o email chegou em viniciusgavauseall@gmail.com

## Variáveis do Template

O template está configurado para usar as seguintes variáveis:

- `{{to_email}}` - Email de destino (viniciusgavauseall@gmail.com)
- `{{from_name}}` - Nome da pessoa que preencheu o formulário
- `{{to_name}}` - Seu nome (Vinícius)
- `{{subject}}` - Assunto do email
- `{{nome}}` - Nome completo do lead
- `{{instagram}}` - Instagram do lead
- `{{ramo_negocio}}` - Ramo do negócio do lead
- `{{faturamento}}` - Faturamento mensal do lead
- `{{data_envio}}` - Data e hora do envio

## Solução de Problemas

### Email não está sendo enviado
- Verifique se as credenciais estão corretas
- Verifique se o serviço de email está ativo
- Verifique o console do navegador para erros

### Template não está funcionando
- Certifique-se de que as variáveis estão escritas corretamente
- Verifique se o Template ID está correto

### Emails indo para spam
- Configure SPF e DKIM no seu provedor de email
- Use um email profissional (não gratuito) se possível

## Limites da Conta Gratuita

- 200 emails por mês
- 2 serviços de email
- 1 template por serviço

Para mais emails, considere upgradar para um plano pago.

## Segurança

- A chave pública pode ser exposta no frontend
- Nunca exponha a chave privada
- Configure rate limiting se necessário 