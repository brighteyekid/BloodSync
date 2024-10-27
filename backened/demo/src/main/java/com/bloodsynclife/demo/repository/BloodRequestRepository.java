package com.bloodsynclife.demo.repository;

import com.bloodsynclife.demo.model.BloodRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BloodRequestRepository extends JpaRepository<BloodRequest, Long> {
}
