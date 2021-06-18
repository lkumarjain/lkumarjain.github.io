import { Divider, Typography } from "@material-ui/core";

export default function Example(props) {
    const { label, variant = "body1", divider = false, children } = props;

    return <div style={{ padding: "0px 8px 8px 8px", margin: "5px 0px" }}>
        {label && <Typography color="textSecondary" variant={variant} gutterBottom>{label}</Typography>}
        {divider && <Divider />}
        {children}
    </div>
}