# 🏠 Dashboard IoT - Monitoramento Ambiental Residencial

## 📋 Descrição do Projeto

Este é um sistema de monitoramento IoT focado em **Monitoramento Ambiental Residencial**, desenvolvido como projeto acadêmico para demonstrar conhecimentos em desenvolvimento web com APIs REST.

## 🎯 Objetivos de Aprendizagem

- ✅ Implementar API RESTful em PHP
- ✅ Criar interface web responsiva
- ✅ Trabalhar com comunicação cliente-servidor
- ✅ Validar dados no backend e frontend
- ✅ Persistir dados em JSON
- ✅ Desenvolver dashboard em tempo real
- ✅ Implementar sistema de alertas visuais (3 níveis)

## 📊 Sensores Monitorados

- **Temperatura**: -40 a 80 °C
- **Umidade**: 0 a 100 %
- **CO2**: 0 a 5000 PPM
- **Luminosidade**: 0 a 65535 lux

## 🚀 Como Executar

### Pré-requisitos
- XAMPP (ou WAMP/LAMP)
- Navegador web moderno
- Editor de código (VS Code recomendado)

### Passo a Passo

1. **Copie o projeto para o htdocs do XAMPP**
C:\xampp\htdocs\meu-projeto\


2. **Inicie o Apache no XAMPP**

3. **Acesse no navegador**
http://localhost/meu-projeto/


4. **Teste o sistema**
- Preencha o formulário
- Clique em "Enviar Leitura"
- Veja os dados no monitor em tempo real
- Confira o histórico

## 📁 Estrutura de Arquivos

devhome-iot/ ├── index.html ← Interface principal ├── css/ │ └── style.css ← Estilos (Personalizados) ├── js/ │ └── dashboard.js ← Lógica JavaScript (com Thresholds) ├── api/ │ ├── status.php ← Verifica se API está online │ ├── sensor-data.php ← Recebe dados dos sensores │ └── dashboard.php ← Retorna histórico └── data/ └── sensor-readings.json ← Dados armazenados


## 🎨 Personalização Realizada

O layout padrão foi modificado para um **Tema Azul "Corporate"** profissional, melhorando a clareza visual dos alertas, conforme as diretrizes do projeto.

### 1. Paleta de Cores (em `css/style.css`)

A paleta de cores original (verde) foi substituída para criar uma hierarquia visual clara para os alertas:

- **Cor Principal (Normal):** `#2196F3` (Azul)
  - *Justificativa:* Transmite calma, confiança e estabilidade quando os sensores estão em níveis normais.
- **Cor de Alerta (Moderado):** `#FF5722` (Laranja-Vermelho)
  - *Justificativa:* Cor de "atenção" vibrante, que se destaca do azul sem ser tão agressiva quanto o alerta de perigo.
- **Cor de Perigo (Perigoso):** `#D32F2F` (Vermelho Escuro)
  - *Justificativa:* Cor universal para "perigo". O tom escuro é profissional e indica uma necessidade de ação imediata, ativando a animação `cardShake`.

### 2. Thresholds (em `js/dashboard.js`)

Os limites (`THRESHOLDS`) para cada sensor foram configurados na lógica do JavaScript para implementar o sistema de 3 níveis, de acordo com o contexto residencial.

### 3. Título e Ícones (em `index.html`)

O título e os ícones foram mantidos para clareza e identificação rápida de cada sensor.

## 🧪 Como Testar a API

### Teste 1: Verificar Status
http://localhost/meu-projeto/api/status.php


### Teste 2: Ver Histórico
http://localhost/meu-projeto/api/dashboard.php


### Teste 3: Limpar Dados
http://localhost/meu-projeto/api/sensor-data.php?action=clear_all


## 📝 O Que Você Deve Entregar

1. ✅ Código funcionando 100%
2. ✅ Este README.md preenchido
3. ✅ Comentários explicativos no código
4. ✅ Imprimir telas do sistema funcionando
5. ✅ Apresentação de 15 minutos

## 👥 Equipe

- **Membro 1**: Rafael Pereira - 41764510 - Líder de Projeto e Desenvolvedor Full-Stack
- **Membro 2**: Luís Felipe Colaboni - 41949731 - Desenvolvedor Backend
- **Membro 3**: Raul Borges - 42923255 - Desenvolvedor Frontend (UI/UX)
- **Membro 4**: Raphael Siqueira - 45342440 - Desenvolvedor Frontend
- **Membro 5**: Juan Carlo da Silva - 42318947 - AGUARDANDO

## 📚 Conceitos Aplicados

### Frontend
- HTML5 semântico
- CSS3 com Flexbox e Animações (`@keyframes`)
- JavaScript Vanilla (Fetch API)
- DOM Manipulation

### Backend
- PHP 7.4+
- API REST
- Validação de dados
- Persistência em JSON
- HTTP Status Codes

### Arquitetura
- Separação em camadas
- Cliente-Servidor
- Comunicação assíncrona

## 🐛 Problemas Comuns

**Problema**: "API: Offline"
- **Solução**: Verifique se o Apache está rodando no XAMPP

**Problema**: Dados não aparecem
- **Solução**: Verifique se a pasta `data/` tem permissão de escrita

**Problema**: Erro 404
- **Solução**: Confira o caminho do projeto no htdocs

## 📞 Suporte

Dúvidas? Entre em contato com os membros da equipe.

---

**Desenvolvido por**: DevHome IoT  
**Data**: Novembro de 2025  
**Disciplina**: Desenvolvimento Web com IoT
