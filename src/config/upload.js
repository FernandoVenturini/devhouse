import multer from 'multer'; // Import the multer library for handling file uploads
import path from 'path'; // Import the path module for working with file and directory paths
import { fileURLToPath } from 'url'; // Import fileURLToPath to convert import.meta.url to a path

// Recreate __dirname in ES module scope
const __filename = fileURLToPath(import.meta.url); // Convert the import.meta.url to a file path
const __dirname = path.dirname(__filename); // Get the directory name of the current module

export default { // Export the configuration object for file uploads
    storage: multer.diskStorage({ // Configure the storage settings for multer
        destination: path.resolve(__dirname, '..', '..', 'uploads'), // Set the destination directory for uploaded files to 'uploads' in the project root
        filename: (req, file, cb) => { // Define the filename for the uploaded file
            const ext = path.extname(file.originalname); // Get the file extension of the original file
            const name = path.basename(file.originalname, ext); // Get the base name of the original file without the extension
            cb(null, `${name}-${Date.now()}${ext}`); // Create a unique filename by appending the current timestamp to the original name and keeping the original extension
        }
    })
}