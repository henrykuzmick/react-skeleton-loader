declare module "react-skeleton-loader" {
    import * as React from "react";

    interface Props {
        width?: string,
        height?: string,
        widthRandomness?: number,
        heightRandomness?: number,
        borderRadius?: string,
        color?: string,
        count?: number,
        animated?: boolean
    }

    const Skeleton: React.SFC<Props>;
    export default Skeleton;
}
