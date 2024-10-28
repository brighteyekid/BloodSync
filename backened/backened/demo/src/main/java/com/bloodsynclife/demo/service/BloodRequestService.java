package com.bloodsynclife.demo.service;

import com.bloodsynclife.demo.model.BloodRequest;
import com.bloodsynclife.demo.repository.BloodRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class BloodRequestService {

    private static final Logger logger = LoggerFactory.getLogger(BloodRequestService.class);

    @Autowired
    private BloodRequestRepository bloodRequestRepository;

    public List<BloodRequest> getAllBloodRequests() {
        List<BloodRequest> requests = bloodRequestRepository.findAll();
        logger.info("Retrieved {} blood requests", requests.size());
        return requests;
    }

    public BloodRequest saveBloodRequest(BloodRequest bloodRequest) {
        BloodRequest savedRequest = bloodRequestRepository.save(bloodRequest);
        logger.info("Saved blood request with ID: {}", savedRequest.getId());
        return savedRequest;
    }

    public void deleteBloodRequest(Long id) {
        bloodRequestRepository.deleteById(id);
    }

    // Add other methods as needed
}
