import React from "react";
import { TextField, Button, Container, makeStyles } from "@material-ui/core";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import LanguageIcon from "@material-ui/icons/Language";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
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
}));

function Personal() {
  const classes = styles();
  const values = styles();
  return (
    <Paper className={classes.padding}>
      <Card>
        <CardHeader title="Personal Details" />
      </Card>
      <CardContent>
        <div className={classes.margin}>
          <Grid container spacing={2} alignItems="center" lg={12}>
            <Grid item md={6} sm={12} xs={12} lg={6}>
              <TextField
                margin="dense"
                variant="outlined"
                name="firstname"
                label="First Name"
                style={{ width: "80%" }}
                required
                value={values.firstname}
              />
            </Grid>
            <Grid item md={6} sm={12} xs={12} lg={6}>
              <TextField
                margin="dense"
                label="Last Name"
                variant="outlined"
                style={{ width: "80%" }}
                name="lastname"
                required
                value={values.lastname}
              />
            </Grid>

            <Grid item md={6} sm={12} xs={12} lg={6}>
              <TextField
                margin="dense"
                label="Email"
                variant="outlined"
                name="email"
                required
                style={{ alignItems: "left", width: "80%" }}
                value={values.email}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item lg={6} xs={12} sm={12} md={6}>
              <TextField
                margin="dense"
                label="Phone Number"
                variant="outlined"
                name="phone"
                style={{ alignItems: "left", width: "80%" }}
                value={values.phone}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <PhoneIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item md={6} sm={12} xs={12} lg={6}>
              <TextField
                margin="dense"
                label="Your Website"
                variant="outlined"
                name="website"
                style={{ alignItems: "left", width: "80%" }}
                value={values.website}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <LanguageIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item md={6} sm={12} xs={12} lg={6}>
              <TextField
                margin="dense"
                label="GitHub"
                variant="outlined"
                name="github"
                style={{ alignItems: "left", width: "80%" }}
                value={values.github}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <GitHubIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item md={6} sm={12} xs={12} lg={6}>
              <TextField
                margin="dense"
                label="Linked In"
                variant="outlined"
                name="linkedin"
                style={{ alignItems: "left", width: "80%" }}
                value={values.linkedin}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <LinkedInIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item md={6} sm={12} xs={12} lg={6}>
              <TextField
                margin="dense"
                label="Twitter"
                variant="outlined"
                name="twitter"
                style={{ alignItems: "left", width: "80%" }}
                value={values.twitter}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <TwitterIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item md={6} sm={12} xs={12} lg={6}>
              <TextField
                margin="dense"
                label="Facebook"
                variant="outlined"
                name="facebook"
                style={{ alignItems: "left", width: "80%" }}
                value={values.facebook}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <FacebookIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item md={6} sm={12} xs={12} lg={6}>
              <TextField
                margin="dense"
                label="Instagram"
                variant="outlined"
                name="instagram"
                style={{ alignItems: "left", width: "80%" }}
                value={values.instagram}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <InstagramIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Container>
              <Link to="/educationdetails">
                <Button endIcon={<NavigateNextIcon />}>Next</Button>
              </Link>
            </Container>
          </Grid>
        </div>
      </CardContent>
      <p className="text-center text-muted">Page 1 </p>
    </Paper>
  );
}

export default Personal;
