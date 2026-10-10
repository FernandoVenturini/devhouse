class HouseController {// Define the HouseController class to handle house-related operations
    
    async store(req, res) {
        return res.json({ message: 'House created successfully! `' });
    }
}

export default new HouseController();