# 🏠 Dashboard IoT - Monitoramento Ambiental Residencial

![Status do Projeto](https://img.shields.io/badge/status-concluído-blue)
![Tecnologia](https://img.shields.io/badge/tecnologia-JS%20Vanilla-yellow)
![Tecnologia](https://img.shields.io/badge/backend(original)-PHP%20API-orange)

Uma interface de dashboard responsiva para monitoramento de sensores IoT, com um sistema de alertas visuais de 3 níveis.

---

## 🚀 Demo Interativa (Versão Portfólio)

Você pode testar o projeto ao vivo no link abaixo.

**🔗 Link da Demo:** **https://rafaelp23.github.io/Dashboard/**

Esta versão foi adaptada para portfólio e **não requer XAMPP ou PHP**. Ela utiliza o **LocalStorage** do navegador para simular a persistência de dados (envio e histórico), demonstrando a funcionalidade completa da interface.

---

## ✨ Funcionalidades Principais

* **Interface Responsiva:** O layout se adapta perfeitamente a desktops e dispositivos móveis.
* **Dashboard "Tempo Real":** O monitor é atualizado instantaneamente a cada novo "envio" de dados.
* **Sistema de Alertas de 3 Níveis:** A interface reage visualmente com base nos dados dos sensores, mudando cores e aplicando animações para indicar status **Normal**, **Moderado** ou **Perigoso**.
* **Simulação de Sensores:** Um formulário permite simular leituras de 4 sensores (Temperatura, Umidade, CO2, Luminosidade).
* **Persistência de Histórico (Demo):** O histórico de leituras é salvo no LocalStorage do navegador, permitindo recarregar a página sem perder os dados.

---

## 🛠️ Tecnologias Utilizadas

Este projeto demonstra proficiência nas seguintes tecnologias:

* **Frontend:**
    * HTML5 (Semântico)
    * CSS3 (Flexbox, Grid, Animações `@keyframes`)
    * JavaScript Vanilla (ES6+)
* **APIs do Navegador:**
    * Fetch API (para comunicação com o backend)
    * LocalStorage (usado nesta versão de portfólio para simular a persistência)
* **Backend (Projeto Acadêmico Original):**
    * PHP 7.4+
    * API RESTful (com endpoints para `status`, `enviar dados` e `ler histórico`)
    * Persistência de dados em arquivos JSON

---

## 🎨 Design e Sistema de Alertas Visuais

A interface foi personalizada com um **Tema Azul "Corporate"** para clareza profissional. A paleta de cores foi escolhida especificamente para criar uma hierarquia visual clara para os alertas:

* **Cor Principal (Normal):** `#2196F3` (Azul)
    * *Justificativa:* Transmite calma, confiança e estabilidade quando os sensores estão em níveis normais.
* **Cor de Alerta (Moderado):** `#FF5722` (Laranja-Vermelho)
    * *Justificativa:* Cor de "atenção" vibrante, que se destaca do azul sem ser tão agressiva quanto o alerta de perigo.
* **Cor de Perigo (Perigoso):** `#D32F2F` (Vermelho Escuro)
    * *Justificativa:* Cor universal para "perigo". O tom escuro é profissional e indica uma necessidade de ação imediata, ativando a animação `cardShake`.

---

## 📁 Estrutura de Arquivos (Versão Demo)

A versão de portfólio (sem PHP) utiliza esta estrutura simplificada:
dashboard-iot-demo/ 
├── index.html ← Interface principal 
├── css/ │ 
└── style.css ← Estilos (Tema Corporate)
 └── js/
  └── dashboard.js ← Lógica (LocalStorage + Alertas)



  ## 👤 Autor

**Rafael Pereira**

* **GitHub:** https://github.com/rafaelp23
* **LinkedIn:** https://www.linkedin.com/in/rafael-pereira-6a8b602a4/