import SearchContactCard from "./components/SearchContactCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  app: {
    display: "flex",
    justifyContent: "center",
  },
});

function App(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <SearchContactCard />
    </div>
  );
}

export default App;
