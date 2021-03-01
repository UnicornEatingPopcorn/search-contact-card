import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontSize: 14,
  },
  avatar: {
    position: "relative",
    top: "0.48%",
    left: 10,
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  progress: {
    width: "95px !important",
    height: "94px !important",
    position: "absolute",
    top: "-8.52%",
    left: "-10%",
  },
  circle: {
    stroke: "url(#linearColors)",
    strokeLinecap: "round",
  },
  // linearGradient: {
  // border: "1px solid #000",
  // },
});

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
      <CardMedia
        className={classes.avatar}
        image={props.profileImageUrl}
        children={
          <div>
            <svg>
              <linearGradient
                // className={classes.linearGradient}
                id="linearColors"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop offset="6%" stopColor="#FA5D75" />
                <stop offset="65%" stopColor="rgba(120, 100, 246, 0.67)" />
              </linearGradient>
            </svg>
            <CircularProgress
              classes={{ circle: classes.circle }}
              className={classes.progress}
              variant="determinate"
              value={props.trust}
            />
          </div>
        }
      />
      <CardHeader
        title={props.fullName}
        subheader={
          <p>
            Sta già condividendo <span>Disney Plus</span>
          </p>
        }
      />
      <Button variant="contained" color="primary">
        Hello World
      </Button>
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
