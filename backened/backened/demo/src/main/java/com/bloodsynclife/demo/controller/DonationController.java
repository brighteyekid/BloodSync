package com.bloodsynclife.demo.controller;

import com.bloodsynclife.demo.model.Donation;
import com.bloodsynclife.demo.service.DonationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/api/donations")
@CrossOrigin(origins = "http://localhost:3000")
public class DonationController {
    private static final Logger logger = LoggerFactory.getLogger(DonationController.class);

    @Autowired
    private DonationService donationService;

    @PostMapping
    public ResponseEntity<?> createDonation(@RequestBody Donation donation) {
        try {
            Donation savedDonation = donationService.saveDonation(donation);
            return ResponseEntity.ok(savedDonation);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error creating donation: " + e.getMessage());
        }
    }

    @GetMapping
    public List<Donation> getAllDonations() {
        logger.info("Fetching all donations");
        try {
            List<Donation> donations = donationService.getAllDonations();
            logger.info("Fetched {} donations", donations.size());
            return donations;
        } catch (Exception e) {
            logger.error("Error fetching donations", e);
            throw e;
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Donation> getDonationById(@PathVariable Long id) {
        return donationService.getDonationById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDonation(@PathVariable Long id) {
        donationService.deleteDonation(id);
        return ResponseEntity.ok().build();
    }
}
