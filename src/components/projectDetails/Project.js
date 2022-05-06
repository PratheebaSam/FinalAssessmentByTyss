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
import LinkIcon from "@material-ui/icons/Link";
import TitleIcon from "@material-ui/icons/Title";
import DescriptionIcon from "@material-ui/icons/Description";
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
}));

function Project() {
  const classes = useStyles();
  const values = useStyles();
  return (
    <Paper className={classes.padding}>
      <Card>
        <CardHeader title="Projects Developed" />
      </Card>
      <CardContent>
        <div className={classes.margin}>
          <Grid container spacing={2} alignItems="center" lg={12}>
            <Grid item xs={12} lg={12}>
              <h5>Project 1</h5>
            </Grid>
            <Grid item md={12} sm={12} xs={12} lg={12}>
              <TextField
                margin="dense"
                variant="outlined"
                name="title1"
                label="Title"
                style={{ width: "80%" }}
                required
                value={values.title1}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <TitleIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item md={12} sm={12} xs={12} lg={12}>
              <TextField
                margin="dense"
                variant="outlined"
                name="link1"
                label="Link"
                style={{ width: "80%" }}
                required
                value={values.link1}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <LinkIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item md={12} sm={12} xs={12} lg={12}>
              <TextField
                margin="dense"
                variant="outlined"
                name="projectDescription1"
                label="Description"
                style={{ width: "80%" }}
                required
                value={values.projectDescription1}
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
          <Grid container spacing={2} alignItems="center" lg={12}>
            <Grid item xs={12} lg={12}>
              <h5>Project 2</h5>
            </Grid>
            <Grid item md={12} sm={12} xs={12} lg={12}>
              <TextField
                margin="dense"
                variant="outlined"
                name="title2"
                label="Title"
                style={{ width: "80%" }}
                required
                value={values.title2}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <TitleIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item md={12} sm={12} xs={12} lg={12}>
              <TextField
                margin="dense"
                variant="outlined"
                name="link2"
                label="Link"
                style={{ width: "80%" }}
                required
                value={values.link2}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <LinkIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item md={12} sm={12} xs={12} lg={12}>
              <TextField
                margin="dense"
                variant="outlined"
                name="projectDescription2"
                label="Description"
                style={{ width: "80%" }}
                required
                value={values.projectDescription2}
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
          <Grid container spacing={2} alignItems="center" lg={12}>
            <Grid item xs={12} lg={12}>
              <h5>Project 3</h5>
            </Grid>
            <Grid item md={12} sm={12} xs={12} lg={12}>
              <TextField
                margin="dense"
                variant="outlined"
                name="title3"
                label="Title"
                style={{ width: "80%" }}
                value={values.title3}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <TitleIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item md={12} sm={12} xs={12} lg={12}>
              <TextField
                margin="dense"
                variant="outlined"
                name="link3"
                label="Link"
                style={{ width: "80%" }}
                value={values.link3}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <LinkIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item md={12} sm={12} xs={12} lg={12}>
              <TextField
                margin="dense"
                variant="outlined"
                name="projectDescription3"
                label="Description"
                style={{ width: "80%" }}
                value={values.projectDescription3}
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
        <Link to="/educationdetails">
          <Button startIcon={<NavigateBeforeIcon />}>Back</Button>
        </Link>
        <Link to="/experiencedetails">
          <Button endIcon={<NavigateNextIcon />}>Next</Button>
        </Link>
      </Container>
      <p className="text-center text-muted">Page 3</p>
    </Paper>
  );
}

export default Project;
