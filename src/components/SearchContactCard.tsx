import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardHeader,
  Button,
  Typography,
  CardMedia,
  CircularProgress,
  Badge,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 362,
    marginTop: 200,
    overflow: "inherit",
  },
  avatar: {
    position: "relative",
    top: "-18.52%",
    left: 11,
    width: 77,
    height: 76,
    borderRadius: 50,
  },
  progress: {
    width: "89px !important",
    height: "89px !important",
    position: "absolute",
    top: "-8.52%",
    left: "-10%",
  },
  circleGradient: {
    stroke: "url(#linearColors)",
    strokeLinecap: "round",
    strokeWidth: 2,
  },
  circleWhite: {
    stroke: "white",
    strokeLinecap: "round",
    strokeWidth: 4,
  },
  button: {
    fontFamily: "'Nunito', sans-serif",
    height: 44,
    minWidth: 46,
    left: 291,
    bottom: 136,
    backgroundColor: "#EAE8FE",
    color: "#794BFF",
    fontWeight: "bold",
    fontSize: 30,
    border: "1px solid #794BFF",
    boxShadow: "none",
  },
  container: {
    height: 81,
  },
  content: {
    background: "#EAE8FE",
    padding: "10px !important",
  },
  contentText: {
    color: "#8463E7",
    textAlign: "center",
    fontSize: 14,
  },
  contentTextBold: {
    fontWeight: "bold",
  },
});

const StyledBadge = withStyles({
  badge: {
    width: 30,
    height: 30,
    borderRadius: 50,
    background: "#6A3EEA",
    fontFamily: "'Poppins', sans-serif",
  },
  root: {
    position: "absolute",
    right: "50%",
    top: 0,
  },
})(Badge);

const StyledHeader = withStyles({
  root: {
    position: "relative",
    top: "-78px",
    left: "25%",
  },
  title: {
    fontSize: 17,
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 500,
  },
})(CardHeader);

type Props = {
  userId: number;
  fullName: string;
  profileImageUrl: string;
  trust: number;
};

function SearchContactCard(props: Props): JSX.Element {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.container}>
        <CardMedia
          className={classes.avatar}
          image={props.profileImageUrl}
          children={
            <div>
              <svg>
                <linearGradient id="linearWhite" x1="0" y1="0" x2="1" y2="1" />
              </svg>
              <CircularProgress
                classes={{ circle: classes.circleWhite }}
                className={classes.progress}
                variant="determinate"
                value={props.trust}
              />
              <svg>
                <linearGradient id="linearColors" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="6%" stopColor="#FA5D75" />
                  <stop offset="65%" stopColor="rgba(120, 100, 246, 0.67)" />
                </linearGradient>
              </svg>
              <CircularProgress
                classes={{ circle: classes.circleGradient }}
                className={classes.progress}
                variant="determinate"
                value={props.trust}
              />
              <StyledBadge badgeContent={props.trust} color="primary" />
            </div>
          }
        />
        <StyledHeader title={props.fullName} subheader="nessuna connessione" />
        <Button variant="contained" color="primary" className={classes.button}>
          +
        </Button>
      </div>
      <CardContent className={classes.content}>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.contentText}
        >
          Sta già condividendo
          <span className={classes.contentTextBold}> Disney Plus</span>
        </Typography>
      </CardContent>
    </Card>
  );
}

SearchContactCard.defaultProps = {
  userId: 1234,
  fullName: "Gina Shelly",
  profileImageUrl: "https://randomuser.me/api/portraits/women/55.jpg",
  trust: 75,
};

export default SearchContactCard;
