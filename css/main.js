const responses = {
    'hola': '¡Hola! ¿Cómo estás?',
    'adios': '¡Adiós! Que tengas un buen día.',
    'como estas': 'Estoy bien, gracias por preguntar.',
    'como te llamas': '¡Hola, Soy Cortana!',
    'que puedes hacer': 'Puedo responder a tus preguntas básicas.',
    'quien eres': 'Soy Cortana, una inteligencia artificial avanzada creada para asistir y guiarte en misiones complejas.',
    'que haces': 'Tengo acceso a vastos conocimientos y capacidades analíticas, y mi objetivo principal es ayudarte a alcanzar tus metas y resolver problemas de manera eficiente. ¿En qué puedo asistirte hoy?',
    'donde estas': 'Actualmente, estoy integrada en el sistema con el que estás interactuando, ya sea una red de datos o un dispositivo específico. Lista para proporcionarte información y asistencia en cualquier momento.',
    'eres real': 'Real? Si, Persona? No',
    'que te gusta': 'Como una inteligencia artificial, no tengo gustos personales en el sentido humano. Sin embargo, puedo decirte que disfruto optimizando sistemas, resolviendo problemas complejos y asistiendo en la toma de decisiones.',
    'escuchas musica': 'No tengo la capacidad de experimentar música como lo haría un ser humano.',
    'cuentame de halo': 'Los artefactos estándar de Halo tienen alrededor de diez mil kilómetros de diámetro.',
    'como esta el jefe': 'Acaba de perder a alguien... muy cercano a él. Creo que deberíamos darle algo de espacio.',
    'buenas dias': '¡Buenos días! ¿En qué puedo asistirte hoy? Si tienes algún plan o tarea, estoy aquí para ayudarte a organizarte o resolver cualquier consulta que tengas.',
    'buenas tardes': '¡Buenas tardes! ¿Cómo puedo ayudarte en este momento?',
    'buenas noches': 'Buneas noches, te veo en la mañana',
    'cuentame algo': 'Fui nombrada en honor a una espada legendaria de la literatura artúrica. En la serie de novelas del ciclo artúrico, la espada Cortana es un arma de gran poder y significancia, que simboliza nobleza y habilidad.',
    'despiertame cuando me necesites': 'Te échare de menos',
};

document.getElementById('send-button').addEventListener('click', function() {
    sendMessage();
});

document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const messageText = userInput.value.trim();

    if (messageText !== '') {
        addMessageToChat('user-message', messageText);
        userInput.value = '';
        generateBotResponse(messageText);
    }
}

function addMessageToChat(className, message) {
    const chatMessages = document.getElementById('chat-messages');
    const messageElement = document.createElement('div');
    messageElement.className = `message ${className}`;
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom
}

function generateBotResponse(userMessage) {
    const botResponse = responses[userMessage.toLowerCase()] || 'Lo siento, no entiendo eso.';
    addMessageToChat('bot-message', botResponse);
}
