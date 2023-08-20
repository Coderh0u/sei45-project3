const express = require("express");
const {
  seedUsers,
  seedContents,
  getAllContents,
  getOneContentByContentID,
  addToLikeCount,
  addCommentToContent,
  deleteComment,
  findContentWithSpecifcComment,
} = require("../controllers/forYouPage");
const { auth } = require("../middleware/user");
const router = express.Router();

router.get("/seed-users", seedUsers);
router.patch("/comments/:contentId", addCommentToContent);
router.delete("/comments/:commentId", deleteComment);
router.get("/find", findContentWithSpecifcComment);
router.get("/seed-contents", auth, seedContents);
router.get("/all-contents", auth, getAllContents);
router.post("/:contentId", auth, getOneContentByContentID);
router.patch("/:contentId", auth, addToLikeCount);

module.exports = router;
