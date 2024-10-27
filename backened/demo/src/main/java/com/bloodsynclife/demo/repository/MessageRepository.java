package com.bloodsynclife.demo.repository;

import com.bloodsynclife.demo.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<Message, Long> {
}
