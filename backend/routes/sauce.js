const express = require('express');
const router = express.Router(); // création du router express
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const sauceCtrl = require('../controllers/sauce'); // import des controlleurs sauce

router.post('/', auth, multer, sauceCtrl.addSauce); // créer une sauce 
router.get('/', auth, sauceCtrl.getAllSauce); // récupérer toutes les sauces 
router.get('/', auth, sauceCtrl.getOneSauce); // récupère une sauce
router.put('/:id', auth, multer, sauceCtrl.modifySauce); // modifier une sauce
router.delete('/:id', auth, sauceCtrl.deleteSauce); // supprimer une sauce

module.exports = router;