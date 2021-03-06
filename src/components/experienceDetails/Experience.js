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
import DescriptionIcon from "@material-ui/icons/Description";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import TimelapseIcon from "@material-ui/icons/Timelapse";
import EventSeatIcon from "@material-ui/icons/EventSeat";
import BusinessIcon from "@material-ui/icons/Business";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Paper, withStyles, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
const styles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1.5),
  },
  padding: {
    padding: theme.spacing(1),
    textAlign: "center",
  },
  display: {
    display: "flex",
  },
}));
function Experience() {
  const classes = styles();
  const values = styles();
  return (
    <Paper className={classes.padding}>
      <Card>
        <CardHeader title="Experience Details" />
      </Card>
      <CardContent>
        <div className={classes.margin}>
          <Grid container spacing={2} alignItems="center" lg={12}>
            <Grid
              item
              xs={12}
              lg={4}
              alignItems="flex-end"
              alignContent="flex-end"
            >
              <h5>
                <CheckCircleIcon />
                <span className="pl-3">Experience 1</span>
              </h5>
            </Grid>
            <Grid item xs={0} lg={8} />
            <div className={classes.display}>
              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="institute1"
                  label="Institue/Organisation"
                  style={{ width: "90%" }}
                  required
                  value={values.institute1}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <BusinessIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="position1"
                  label="Position"
                  style={{ width: "90%" }}
                  required
                  value={values.position1}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <EventSeatIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="duration1"
                  label="Duration"
                  style={{ width: "90%" }}
                  required
                  value={values.duration1}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <TimelapseIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </div>

            <Grid item md={12} sm={12} xs={12} lg={12}>
              <TextField
                margin="dense"
                label="Description"
                variant="outlined"
                style={{ width: "97%" }}
                name="experienceDescription1"
                required
                value={values.experienceDescription1}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <DescriptionIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          <br />
          <Divider />
          <br />
          <Grid container spacing={2} alignItems="flex-start" lg={12}>
            <Grid
              item
              xs={12}
              lg={4}
              alignItems="flex-end"
              alignContent="flex-end"
            >
              <h5>
                <CheckCircleIcon />
                <span className="pl-3">Experience 2</span>
              </h5>
            </Grid>
            <Grid item xs={0} lg={8} />
            <br />
            <div className={classes.display}>
              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="institute2"
                  label="Institue/Organisation"
                  style={{ width: "90%" }}
                  required
                  value={values.institute2}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <BusinessIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="position2"
                  label="Position"
                  style={{ width: "90%" }}
                  required
                  value={values.position2}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <EventSeatIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="duration2"
                  label="Duration"
                  style={{ width: "90%" }}
                  required
                  value={values.duration2}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <TimelapseIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </div>

            <Grid item md={12} sm={12} xs={12} lg={12}>
              <TextField
                margin="dense"
                label="Description"
                variant="outlined"
                style={{ width: "97%" }}
                rows={3}
                name="experienceDescription2"
                required
                value={values.experienceDescription2}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <DescriptionIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </div>
      </CardContent>
      <Container>
        <Link to="/projectdetails">
          <Button startIcon={<NavigateBeforeIcon />}>Back</Button>
        </Link>
        <Link to="/extradetails">
          <Button endIcon={<NavigateNextIcon />}>Next</Button>
        </Link>
      </Container>
      <p className="text-center text-muted">Page 4</p>
    </Paper>
  );
}

export default Experience;
