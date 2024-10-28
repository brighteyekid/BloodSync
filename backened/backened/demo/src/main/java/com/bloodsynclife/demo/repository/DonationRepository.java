package com.bloodsynclife.demo.repository;

import com.bloodsynclife.demo.model.Donation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DonationRepository extends JpaRepository<Donation, Long> {
}
