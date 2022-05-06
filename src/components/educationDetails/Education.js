import React from "react";
import {
  TextField,
  Button,
  Container,
  Divider,
  makeStyles,
} from "@material-ui/core";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import SchoolIcon from "@material-ui/icons/School";
import DateRangeIcon from "@material-ui/icons/DateRange";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Paper, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  padding: {
    padding: theme.spacing(),
    textAlign: "center",
  },
  onhover: {
    backgroundColor: "pink",
  },
}));

function Education() {
  const classes = useStyles();
  const values = useStyles();
  return (
    <Paper className={classes.padding}>
      <Card>
        <CardHeader title="Education Details" />
      </Card>
      <CardContent>
        <div className={classes.margin}>
          <Grid container spacing={2} alignItems="center" lg={12}>
            <Grid item md={4} sm={12} xs={12} lg={4}>
              <TextField
                margin="dense"
                variant="outlined"
                name="college"
                label="College/Unviersity"
                style={{ width: "80%" }}
                required
                value={values.college}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <SchoolIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item md={4} sm={6} xs={12} lg={4}>
              <TextField
                margin="dense"
                variant="outlined"
                name="fromyear1"
                type="date"
                style={{ width: "80%" }}
                required
                value={values.fromyear1}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <DateRangeIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item md={4} sm={6} xs={12} lg={4}>
              <TextField
                margin="dense"
                variant="outlined"
                name="toyear1"
                type="date"
                style={{ width: "80%" }}
                required
                value={values.toyear1}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <DateRangeIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item md={4} sm={12} xs={12} lg={4}>
              <TextField
                margin="dense"
                label="Qualification"
                variant="outlined"
                style={{ width: "80%" }}
                name="qualification1"
                required
                value={values.qualification1}
              />
            </Grid>

            <Grid item md={8} sm={12} xs={12} lg={8}>
              <TextField
                margin="dense"
                label="Description"
                variant="outlined"
                style={{ width: "90%" }}
                name="description1"
                required
                value={values.description1}
              />
            </Grid>
          </Grid>
          <br />
          <Divider />
          <br />
          <Grid container spacing={2} alignItems="center" lg={12}>
            <Grid item md={4} sm={12} xs={12} lg={4}>
              <TextField
                margin="dense"
                variant="outlined"
                name="school"
                label="School"
                style={{ width: "80%" }}
                required
                value={values.school}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SchoolIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item md={4} sm={6} xs={12} lg={4}>
              <TextField
                margin="dense"
                variant="outlined"
                name="fromyear2"
                type="date"
                style={{ width: "80%" }}
                required
                value={values.fromyear2}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <DateRangeIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item md={4} sm={6} xs={12} lg={4}>
              <TextField
                margin="dense"
                variant="outlined"
                name="toyear2"
                type="date"
                style={{ width: "80%" }}
                required
                value={values.toyear2}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <DateRangeIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item md={4} sm={12} xs={12} lg={4}>
              <TextField
                margin="dense"
                label="Qualification"
                variant="outlined"
                style={{ width: "80%" }}
                name="qualification2"
                required
                value={values.qualification2}
              />
            </Grid>

            <Grid item md={8} sm={8} xs={8} lg={8}>
              <TextField
                margin="dense"
                label="Description"
                variant="outlined"
                style={{ width: "90%" }}
                name="description2"
                required
                value={values.description2}
              />
            </Grid>
          </Grid>
          <Container>
            <Link to="/">
              <Button startIcon={<NavigateBeforeIcon />}>Back</Button>
            </Link>
            <Link to="/projectdetails">
              <Button endIcon={<NavigateNextIcon />}>Next</Button>
            </Link>
          </Container>
        </div>
      </CardContent>
      <p className="text-center text-muted">Page 2</p>
    </Paper>
  );
}

export default Education;
