package com.bloodsynclife.demo.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "blood_requests")
public class BloodRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String phone;
    private String location;
    private String bloodType;
    private Integer unitsNeeded;
    private LocalDate dateNeeded;
    private String urgency;
    private String additionalInfo;

    // Default constructor
    public BloodRequest() {}

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getBloodType() {
        return bloodType;
    }

    public void setBloodType(String bloodType) {
        this.bloodType = bloodType;
    }

    public Integer getUnitsNeeded() {
        return unitsNeeded;
    }

    public void setUnitsNeeded(Integer unitsNeeded) {
        this.unitsNeeded = unitsNeeded;
    }

    public LocalDate getDateNeeded() {
        return dateNeeded;
    }

    public void setDateNeeded(LocalDate dateNeeded) {
        this.dateNeeded = dateNeeded;
    }

    public String getUrgency() {
        return urgency;
    }

    public void setUrgency(String urgency) {
        this.urgency = urgency;
    }

    public String getAdditionalInfo() {
        return additionalInfo;
    }

    public void setAdditionalInfo(String additionalInfo) {
        this.additionalInfo = additionalInfo;
    }

    // toString method for debugging and logging
    @Override
    public String toString() {
        return "BloodRequest{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                ", location='" + location + '\'' +
                ", bloodType='" + bloodType + '\'' +
                ", unitsNeeded=" + unitsNeeded +
                ", dateNeeded=" + dateNeeded +
                ", urgency='" + urgency + '\'' +
                ", additionalInfo='" + additionalInfo + '\'' +
                '}';
    }
}
