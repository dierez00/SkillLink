package com.skilllink.backend.messaging;

import org.springframework.stereotype.*;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import com.skilllink.backend.config.RabbitMQConfig;
import java.util.HashMap;
import java.util.Map;

@Service
public class EmailEventPublisher {

    private final RabbitTemplate rabbitTemplate;

    @Autowired
    public EmailEventPublisher(RabbitTemplate rabbitTemplate) {
        this.rabbitTemplate = rabbitTemplate;
    }

    public void sendUserRegistrationEvent(String name, String email) {
        Map<String, String> message = new HashMap<>();
        message.put("type", "welcome");
        message.put("name", name);
        message.put("email", email);
        
        rabbitTemplate.convertAndSend(
            RabbitMQConfig.EXCHANGE, 
            RabbitMQConfig.ROUTING_KEY, 
            message
        );
    }
}
