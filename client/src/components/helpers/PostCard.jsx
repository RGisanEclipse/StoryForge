import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { Avatar } from "@mui/material";
import Grow from "@mui/material/Grow";
export default function PostCard(props) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const [isLiked, setIsLiked] = React.useState(false);
  const [isSaved, setIsSaved] = React.useState(false);
  const [likeCount, setLikeCount] = React.useState(0);

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      setLikeCount(likeCount + 1);
    } else {
      setLikeCount(likeCount - 1);
    }
  };

  const handleSaveClick = () => {
    setIsSaved(!isSaved);
  };

  const descriptionElementRef = React.useRef(null);

  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <Card
      className="p-2 mx-5 pt-4"
      sx={{
        backgroundColor: "#0b0338",
      }}
    >
      <CardMedia
        component="img"
        src={props.banner}
        className="h-60 w-60"
        sx={{
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          borderBottomLeftRadius: "30px",
          borderBottomRightRadius: "30px",
          borderBottom: "2px solid white",
          borderLeft: "0.5px solid white",
          borderRight: "0.5px solid white",
        }}
      >
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="text-white"
          >
            {props.title}
          </Typography>
          <div className="flex items-center gap-2 my-3">
            <Avatar src={props.authorProfile} />
            <span
              variant="body2"
              className="text-gray-400"
              sx={{
                mb: 2,
              }}
            >
              {props.author}
            </span>
          </div>
          <Typography variant="body2" className="text-white">
            {props.overview}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="flex items-center justify-center">
            <React.Fragment>
              {isLiked ? (
                <Button sx={{ color: "red" }} onClick={handleLikeClick}>
                  <FavoriteIcon />
                </Button>
              ) : (
                <Button sx={{ color: "red" }} onClick={handleLikeClick}>
                  <FavoriteBorderIcon />
                </Button>
              )}
              <Typography variant="body2" className="text-white">
                {likeCount}
              </Typography>
              {isSaved ? (
                <Button onClick={handleSaveClick}>
                  <BookmarkIcon />
                </Button>
              ) : (
                <Button onClick={handleSaveClick}>
                  <BookmarkBorderIcon />
                </Button>
              )}
            </React.Fragment>
          </div>
          <div>
            <Button
              sx={{ color: "white", textTransform: "initial"}}
              onClick={handleClickOpen("paper")}
            >
              More
            </Button>
            <Button
            sx={{ color: "white", textTransform: "initial" }}
          >
            View
          </Button>
          </div>
        </CardActions>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        TransitionComponent={Grow}
        transitionDuration={800}
        sx={{
          backdropFilter: "blur(2px)",
          "& .MuiDialog-paper": {
            maxHeight: "80%",
            backgroundColor: "#0b0338",
            color: "white",
            borderTop: "1px solid white",
            borderBottom: "1px solid white",
            borderRadius: "10px",
          },
        }}
      >
        <DialogTitle id="scroll-dialog-title">{props.title}</DialogTitle>
        <DialogContent
          dividers={scroll === "paper"}
          style={{
            scrollbarWidth: "none",
          }}
        >
          <div>{props.description}</div>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ color: "white", textTransform: "initial" }}
            onClick={handleClose}
          >
            Back
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}
