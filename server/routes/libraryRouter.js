// Import express
const express = require('express');
// Import required controllers
const LibraryController = require('../controllers/LibraryController');
// Require express router
const router = express.Router();

//// Specific routing goes here for .get, .post, etc....

// Router for get request to library to receive all libraries
router.get('/library', LibraryController.getLibrary, (req, res) => {
  // Sends 200 status and the entire library back to the client
  res.status(200).json(res.locals.library);
});

// Router for post to library creating new library
router.post('/library', LibraryController.newLibrary, (req, res) =>
  // Sends 200 status and the created library back to the client
  res.status(200).json(res.locals.newLibrary)
);

// Router for editing one instance of our library
router.put('/library', LibraryController.editLibrary, (req, res) =>
  res.status(200).json(res.locals.editLibrary)
);

// Router for deleting one library
router.delete('/library', LibraryController.deleteLibrary, (req, res) =>
  res.status(200).json(res.locals.deleteLibrary)
);

// Export as router
module.exports = router;
