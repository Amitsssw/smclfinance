const mongoose = require('mongoose');

const loanApplicationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    employmentType: {
        type: String,
        required: true,
        enum: ['salaried', 'self-employed', 'unemployed', 'student'],
        trim: true
    },
    loanType: {
        type: String,
        required: true,
        enum: ['personal', 'home', 'car', 'education', 'private finance'],
        trim: true
    },
    status: {
        type: String,
        enum: ['pending', 'in_review', 'approved', 'rejected'],
        default: 'pending'
    },
    reason: {
        type: String,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Virtual for full name
loanApplicationSchema.virtual('fullName').get(function () {
    return `${this.firstName} ${this.lastName}`;
});

const LoanApplication = mongoose.model('LoanApplication', loanApplicationSchema);

module.exports = LoanApplication;
