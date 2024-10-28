package com.bloodsynclife.demo.controller;

import com.bloodsynclife.demo.model.BloodRequest;
import com.bloodsynclife.demo.service.BloodRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/blood-requests")
public class BloodRequestController {

    @Autowired
    private BloodRequestService bloodRequestService;

    @PostMapping
    public ResponseEntity<?> createBloodRequest(@RequestBody BloodRequest bloodRequest) {
        try {
            BloodRequest savedRequest = bloodRequestService.saveBloodRequest(bloodRequest);
            return ResponseEntity.ok(savedRequest);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error creating blood request: " + e.getMessage());
        }
    }

    @GetMapping
    public ResponseEntity<List<BloodRequest>> getAllBloodRequests() {
        List<BloodRequest> requests = bloodRequestService.getAllBloodRequests();
        return ResponseEntity.ok(requests);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteBloodRequest(@PathVariable Long id) {
        try {
            bloodRequestService.deleteBloodRequest(id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error deleting blood request: " + e.getMessage());
        }
    }
}
