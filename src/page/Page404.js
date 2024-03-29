import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import React from "react";

const Page404 = () => {
    return (
        <Grid container justifyContent="center">
            <Grid item lg={8} md={8} sm={10} xs={10}>
                <Card style={{ marginTop: 20 }}>
                    <CardContent>
                        <Typography
                            variant="h5"
                            style={{ margin: "40px 0 20px 0" }}
                            align="center"
                        >
                            Oops! resource not found!
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Page404;
