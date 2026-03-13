const LoanApplication = require('../models/LoanApplication');

// Create a new loan application
exports.createLoanApplication = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            phone,
            address,
            city,
            employmentType,
            loanType
        } = req.body;

        // Basic validation
        if (!firstName || !lastName || !email || !phone || !address || !city || !employmentType || !loanType) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Please provide a valid email address'
            });
        }

        const loanApplication = await LoanApplication.create({
            firstName,
            lastName,
            email,
            phone,
            address,
            city,
            employmentType,
            loanType,
            status: 'pending' // Default status
        });

        res.status(201).json({
            success: true,
            message: 'Loan application submitted successfully',
            data: {
                id: loanApplication._id,
                fullName: `${loanApplication.firstName} ${loanApplication.lastName}`,
                email: loanApplication.email,
                status: loanApplication.status,
                applicationDate: loanApplication.createdAt
            }
        });
    } catch (error) {
        console.error('Error creating loan application:', error);

        // Handle duplicate email error
        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                message: 'A loan application with this email already exists'
            });
        }

        res.status(500).json({
            success: false,
            message: 'Error processing your application. Please try again.'
        });
    }
};

// Get loan application by ID
exports.getLoanApplication = async (req, res) => {
    try {
        const loanApplication = await LoanApplication.findById(req.params.id);
        if (!loanApplication) {
            return res.status(404).json({
                success: false,
                message: 'Loan application not found'
            });
        }
        res.status(200).json({
            success: true,
            data: loanApplication
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
