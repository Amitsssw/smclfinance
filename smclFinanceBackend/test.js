const mongoose = require('mongoose');
const LoanApplication = require('./src/models/LoanApplication');

async function testLoanApplication() {
    try {
        // Connect to MongoDB
        await mongoose.connect('mongodb+srv://yd103448_db_user:smclfinanace@cluster0.n3ujgup.mongodb.net/', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');

        // Create a loan application
        const app = await LoanApplication.create({
            firstName: 'Amit',
            lastName: 'Y',
            email: 'a@example.com',
            loanAmount: 10000
        });
        console.log('Created loan application:', app);

        // Find the created application
        const found = await LoanApplication.findById(app._id);
        console.log('Found application:', {
            fullName: found.fullName,
            email: found.email,
            loanAmount: found.loanAmount,
            status: found.status
        });

    } catch (error) {
        console.error('Error:', error.message);
    } finally {
        // Close the connection
        await mongoose.connection.close();
    }
}

testLoanApplication();
