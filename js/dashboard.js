/* ========================================
   DASHBOARD JAVASCRIPT - VERSÃO PORTFÓLIO (SEM PHP)
   Lógica de Interação com LocalStorage
   ======================================== */

// ===== THRESHOLDS PARA MONITORAMENTO AMBIENTAL =====
// (Esta seção não foi alterada)
const THRESHOLDS = {
    temperatura: {
        normal: { min: 18, max: 26 },     
        moderate_low: { min: 15, max: 17 },
        moderate_high: { min: 27, max: 30 },    
        dangerous_low: { min: -40, max: 14 }, 
        dangerous_high: { min: 31, max: 80 }  
    },
    umidade: {
        normal: { min: 30, max: 60 },
        moderate_low: { min: 20, max: 29 },
        moderate_high: { min: 61, max: 80 },
        dangerous_low: { min: 0, max: 19 },
        dangerous_high: { min: 81, max: 100 }
    },
    co2: {
        normal: { min: 0, max: 800 }, 
        moderate: { min: 801, max: 1500 },
        dangerous: { min: 1501, max: 5000 } 
    },
    luminosidade: {
        normal: { min: 300, max: 1000 }, 
        moderate_low: { min: 100, max: 299 },   
        moderate_high: {min: 1001, max: 2000},
        dangerous_low: { min: 0, max: 99 },     
        dangerous_high: { min: 2001, max: 65535 }
    }
};

// ===== FUNÇÃO DE AVALIAÇÃO DE STATUS =====
// (Esta seção não foi alterada)
function getSensorStatus(type, value) {
    const limits = THRESHOLDS[type];
    value = parseFloat(value); 

    if (!limits) {
        return { text: 'Normal', class: 'status-normal', level: 'normal' };
    }

    if (value >= limits.normal.min && value <= limits.normal.max) {
        return { text: 'Normal', class: 'status-normal', level: 'normal' };
    }

    if ((limits.moderate_low && (value >= limits.moderate_low.min && value <= limits.moderate_low.max)) ||
        ((limits.moderate_high || limits.moderate) && (value >= (limits.moderate_high || limits.moderate).min && value <= (limits.moderate_high || limits.moderate).max))) {
        return { text: 'Alerta', class: 'status-moderate', level: 'moderate' };
    }

    if ((limits.dangerous_low && (value >= limits.dangerous_low.min && value <= limits.dangerous_low.max)) ||
        ((limits.dangerous_high || limits.dangerous) && (value >= (limits.dangerous_high || limits.dangerous).min && value <= (limits.dangerous_high || limits.dangerous).max))) {
        return { text: 'Crítico', class: 'status-dangerous', level: 'dangerous' };
    }
    
    return { text: 'Alerta', class: 'status-moderate', level: 'moderate' };
}

// ===== APLICAR ANIMAÇÕES DE ALERTA =====
// (Esta seção não foi alterada)
function aplicarAnimacaoAlerta(cardId, level) {
    const cardElement = document.getElementById(cardId);
    if (!cardElement) {
        console.warn('Elemento do card não encontrado:', cardId);
        return;
    }
    cardElement.classList.remove('alert-normal', 'alert-moderate', 'alert-dangerous');
    
    if (level === 'normal') {
        cardElement.classList.add('alert-normal');
    } else if (level === 'moderate') {
        cardElement.classList.add('alert-moderate');
    } else if (level === 'dangerous') {
        cardElement.classList.add('alert-dangerous');
    }
}

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('Dashboard Monitoramento Ambiental Residencial iniciado! (Modo Portfólio)');
    verificarStatusAPI();
    carregarHistorico();
    
    // Mantém o formulário com o ID do sensor padrão
    document.querySelector('[name="sensor_id"]').value = "PORTFOLIO_SALA_01";
});

// ===== MUDANÇA: VERIFICAR STATUS (Simulado) =====
// Não faz mais requisição; apenas define o status como Online
async function verificarStatusAPI() {
    const statusElement = document.getElementById('status-api');
    statusElement.textContent = 'API: Online (Demo)';
    statusElement.className = 'status online';
}

// ===== MUDANÇA: ENVIAR DADOS (LocalStorage) =====
document.getElementById('sensor-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    
    // Coleta dados do form para salvar e atualizar
    const dataToUpdate = {
        sensor_id: formData.get('sensor_id'),
        temperatura: formData.get('temperatura'),
        umidade: formData.get('umidade'),
        co2: formData.get('co2'),
        luminosidade: formData.get('luminosidade'),
        timestamp: getTimestamp() // Adiciona data/hora
    };
    
    try {
        // Pega o histórico, adiciona o novo item e salva
        let history = getHistoryFromLocalStorage();
        history.push(dataToUpdate);
        
        // Limita o histórico salvo (opcional, mas bom para performance)
        if (history.length > 50) {
            history = history.slice(history.length - 50);
        }
        
        localStorage.setItem('DB_IOT_HISTORY', JSON.stringify(history));
        
        alert('✓ Dados (Demo) enviados com sucesso!');
        atualizarMonitor(dataToUpdate); // Atualiza o monitor com os dados do form
        carregarHistorico();

    } catch (error) {
        console.error('Erro ao salvar no LocalStorage:', error);
        alert('✗ Erro ao salvar dados. Verifique o console.');
    }
});

// ===== GERAR DADOS ALEATÓRIOS =====
// (Esta seção não foi alterada)
function gerarDadosAleatorios() {
    document.querySelector('[name="temperatura"]').value = (Math.random() * (80 - -40) + -40).toFixed(1);
    document.querySelector('[name="umidade"]').value = (Math.random() * (100 - 0) + 0).toFixed(1);
    document.querySelector('[name="co2"]').value = (Math.random() * (5000 - 0) + 0).toFixed(0);
    document.querySelector('[name="luminosidade"]').value = (Math.random() * (65535 - 0) + 0).toFixed(0);
    alert('🎲 Dados aleatórios gerados!');
}

// ===== ATUALIZAR MONITOR =====
// (Esta seção não foi alterada)
function atualizarMonitor(data) {
    let status; 
    let statusElement; 

    if (data.temperatura !== undefined) {
        document.getElementById('temperatura-valor').textContent = 
            data.temperatura + ' °C';
        status = getSensorStatus('temperatura', data.temperatura);
        statusElement = document.getElementById('temperatura-status');
        statusElement.textContent = status.text;
        statusElement.className = 'status ' + status.class;
        aplicarAnimacaoAlerta('temperatura-card', status.level);
    }

    if (data.umidade !== undefined) {
        document.getElementById('umidade-valor').textContent = 
            data.umidade + ' %';
        status = getSensorStatus('umidade', data.umidade);
        statusElement = document.getElementById('umidade-status');
        statusElement.textContent = status.text;
        statusElement.className = 'status ' + status.class;
        aplicarAnimacaoAlerta('umidade-card', status.level);
    }

    if (data.co2 !== undefined) {
        document.getElementById('co2-valor').textContent = 
            data.co2 + ' PPM';
        status = getSensorStatus('co2', data.co2);
        statusElement = document.getElementById('co2-status');
        statusElement.textContent = status.text;
        statusElement.className = 'status ' + status.class;
        aplicarAnimacaoAlerta('co2-card', status.level);
    }

    if (data.luminosidade !== undefined) {
        document.getElementById('luminosidade-valor').textContent = 
            data.luminosidade + ' lux';
        status = getSensorStatus('luminosidade', data.luminosidade);
        statusElement = document.getElementById('luminosidade-status');
        statusElement.textContent = status.text;
        statusElement.className = 'status ' + status.class;
        aplicarAnimacaoAlerta('luminosidade-card', status.level);
    }
}

// ===== MUDANÇA: CARREGAR HISTÓRICO (LocalStorage) =====
async function carregarHistorico() {
    try {
        let history = getHistoryFromLocalStorage();
        history.reverse(); // Inverte para mostrar os mais novos primeiro

        if (history.length > 0) {
            renderizarHistorico(history);
            // Atualiza o monitor com o dado mais recente do histórico
            atualizarMonitor(history[0]);
        } else {
            document.getElementById('historico-list').innerHTML = 
                '<p style="text-align: center; color: #666;">Nenhuma leitura encontrada. Envie dados para começar!</p>';
        }
    } catch (error) {
        console.error('Erro ao carregar histórico do LocalStorage:', error);
        document.getElementById('historico-list').innerHTML = 
            '<p style="text-align: center; color: red;">Erro ao carregar histórico.</p>';
    }
}

// ===== RENDERIZAR HISTÓRICO =====
// (Esta seção não foi alterada)
function renderizarHistorico(history) {
    const container = document.getElementById('historico-list');
    
    const html = history.slice(0, 10).map(item => `
        <div class="historico-item">
            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                <strong>🔹 ${item.sensor_id}</strong>
                <span style="color: #666;">📅 ${item.timestamp}</span>
            </div>
            <div style="font-size: 14px;">
                    <strong>Temperatura:</strong> ${item.temperatura} °C<br>
                    <strong>Umidade:</strong> ${item.umidade} %<br>
                    <strong>CO2:</strong> ${item.co2} PPM<br>
                    <strong>Luminosidade:</strong> ${item.luminosidade} lux<br>
            </div>
        </div>
    `).join('');
    
    container.innerHTML = html;
}

// ===== MUDANÇA: LIMPAR DADOS (LocalStorage) =====
async function limparDados() {
    if (!confirm('⚠️ Tem certeza que deseja limpar todos os dados (Demo)?')) {
        return;
    }
    
    try {
        localStorage.removeItem('DB_IOT_HISTORY');
        alert('✓ Dados (Demo) limpos com sucesso!');
        carregarHistorico();
        
        // Limpa o monitor visualmente
        const clearData = { temperatura: '--', umidade: '--', co2: '--', luminosidade: '--' };
        atualizarMonitor(clearData);
        // Reseta os status das pílulas e cards
        const defaultStatus = { text: 'Aguardando...', class: '', level: 'normal' };
        document.getElementById('temperatura-status').textContent = defaultStatus.text;
        document.getElementById('temperatura-status').className = 'status';
        aplicarAnimacaoAlerta('temperatura-card', defaultStatus.level);
        
        document.getElementById('umidade-status').textContent = defaultStatus.text;
        document.getElementById('umidade-status').className = 'status';
        aplicarAnimacaoAlerta('umidade-card', defaultStatus.level);
        
        document.getElementById('co2-status').textContent = defaultStatus.text;
        document.getElementById('co2-status').className = 'status';
        aplicarAnimacaoAlerta('co2-card', defaultStatus.level);
        
        document.getElementById('luminosidade-status').textContent = defaultStatus.text;
        document.getElementById('luminosidade-status').className = 'status';
        aplicarAnimacaoAlerta('luminosidade-card', defaultStatus.level);

    } catch (error) {
        console.error('Erro:', error);
        alert('✗ Erro ao limpar dados (Demo)');
    }
}

// ===== FUNÇÕES AUXILIARES (Novas) =====

/**
 * Pega o histórico salvo no LocalStorage
 * @returns {Array} - O histórico de leituras
 */
function getHistoryFromLocalStorage() {
    const data = localStorage.getItem('DB_IOT_HISTORY');
    return data ? JSON.parse(data) : [];
}

/**
 * Gera um timestamp no formato YYYY-MM-DD HH:MM:SS
 * (Similar ao 'date("Y-m-d H:i:s")' do PHP)
 * @returns {string} - O timestamp formatado
 */
function getTimestamp() {
    const now = new Date();
    // Ajusta para o fuso horário local
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    // Formata para o padrão ISO e remove 'T' e 'Z'
    return now.toISOString().slice(0, 19).replace('T', ' ');
}