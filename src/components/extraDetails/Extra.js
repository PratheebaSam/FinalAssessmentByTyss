import React from "react";
import {
  TextField,
  Button,
  Container,
  Divider,
  makeStyles,
} from "@material-ui/core";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Paper, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  padding: {
    padding: theme.spacing(1),
    textAlign: "center",
  },
  display: {
    display: "flex",
  },
}));
function Extra() {
  const classes = styles();
  const values = styles();
  return (
    <Paper className={classes.padding}>
      <Card>
        <CardHeader title="Extra Details" />
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
                <span className="pl-3">Skills/Languages</span>
              </h5>
            </Grid>
            <Grid item xs={0} lg={8} />
            <br />
            <div className={classes.display}>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="skill1"
                  label="Skill 1"
                  style={{ width: "90%" }}
                  value={values.skill1}
                  InputProps={{
                    endAdornment: <InputAdornment position="start" />,
                  }}
                />
              </Grid>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="skill2"
                  label="Skill 2"
                  style={{ width: "90%" }}
                  value={values.skill2}
                  InputProps={{
                    endAdornment: <InputAdornment position="start" />,
                  }}
                />
              </Grid>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="skill3"
                  label="Skill 3"
                  style={{ width: "90%" }}
                  value={values.skill3}
                  InputProps={{
                    endAdornment: <InputAdornment position="start" />,
                  }}
                />
              </Grid>
            </div>
            <div className={classes.display}>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="skill4"
                  label="Skill 4"
                  style={{ width: "90%" }}
                  value={values.skill4}
                  InputProps={{
                    endAdornment: <InputAdornment position="start" />,
                  }}
                />
              </Grid>

              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="skill5"
                  label="Skill 5"
                  style={{ width: "90%" }}
                  value={values.skill5}
                  InputProps={{
                    endAdornment: <InputAdornment position="start" />,
                  }}
                />
              </Grid>

              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  label="Skill 6"
                  variant="outlined"
                  style={{ width: "90%" }}
                  name="skill6"
                  value={values.skill6}
                  InputProps={{
                    endAdornment: <InputAdornment position="start" />,
                  }}
                />
              </Grid>
            </div>
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
                <span className="pl-3">Interest</span>
              </h5>
            </Grid>
            <Grid item xs={0} lg={8} />
            <br />
            <div className={classes.display}>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  label="Interest 1"
                  variant="outlined"
                  style={{ width: "90%" }}
                  name="interest1"
                  value={values.interest1}
                  InputProps={{
                    endAdornment: <InputAdornment position="start" />,
                  }}
                />
              </Grid>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  label="Interest 2"
                  variant="outlined"
                  style={{ width: "90%" }}
                  name="interest2"
                  value={values.interest2}
                  InputProps={{
                    endAdornment: <InputAdornment position="start" />,
                  }}
                />
              </Grid>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  label="Interest 3"
                  variant="outlined"
                  style={{ width: "90%" }}
                  name="interest3"
                  value={values.interest3}
                  InputProps={{
                    endAdornment: <InputAdornment position="start" />,
                  }}
                />
              </Grid>
            </div>
            <div className={classes.display}>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  label="Interest 4"
                  variant="outlined"
                  style={{ width: "90%" }}
                  name="interest4"
                  value={values.interest4}
                  InputProps={{
                    endAdornment: <InputAdornment position="start" />,
                  }}
                />
              </Grid>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  label="Interest 5"
                  variant="outlined"
                  style={{ width: "90%" }}
                  name="interest5"
                  value={values.interest5}
                  InputProps={{
                    endAdornment: <InputAdornment position="start" />,
                  }}
                />
              </Grid>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  label="Interest 6"
                  variant="outlined"
                  style={{ width: "90%" }}
                  name="interest6"
                  value={values.interest6}
                  InputProps={{
                    endAdornment: <InputAdornment position="start" />,
                  }}
                />
              </Grid>
            </div>
          </Grid>
        </div>
      </CardContent>
      <Container>
        <Link to="/experiencedetails">
          <Button startIcon={<NavigateBeforeIcon />}>Back</Button>
        </Link>
      </Container>
      <p className="text-center text-muted">Page 5</p>
    </Paper>
  );
}

export default Extra;
