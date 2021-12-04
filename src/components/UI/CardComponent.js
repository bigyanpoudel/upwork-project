import React from 'react'
import {makeStyles,Grid} from "@material-ui/core"
const style = makeStyles((theme)=>({
    card:{
        width:"100%",
        height:"170px",
        background:"linear-gradient(109.37deg, #FFC453 3.05%, #ECA00F 98.22%)",
        color:"white",
        fontFamily:"var(--font-family)",
        fontWeight:400,
        fontSize:".9rem",
        borderRadius:"4px",
        "&:hover":{
            cursor: "default"
        }
    },
    padding:{
        padding:".8rem"
    },
    divider:{
        width:"100%",
        height:"1px",
        background:"var(--color-8)"
    },
    heading:{
        fontSize:"1rem",
    },
    subHeading:{
        fontSize:"1.6rem",
        fontWeight:"600",
    }
}));
const CardComponent = ({data}) => {
const classes = style()
    return (
        <div className={classes.card} style={{background:data.background}}>
            <Grid container>
                <Grid container xs={12} className={classes.padding} spacing={1}>
                <Grid item xs={12} container justifyContent="flex-end">
                    <p style={{paddingTop:!data?.topLeftText && "1.19rem"}}>{data?.topLeftText|| ""}</p>
                </Grid>
                <Grid item xs={12} container>
                    <p className={classes.heading}>{data?.heading}</p>
                </Grid>
                <Grid item xs={12}>
                    <h4 className={classes.subHeading}>{data?.subHeading}</h4>
                </Grid>
                </Grid>
                <Grid item xs={12} className={classes.divider}></Grid>
                <Grid item xs={12} className={classes.padding}>
                    <p>{data?.bottomText}</p>
                </Grid>
            </Grid>
        </div>
    )
}

export default CardComponent
