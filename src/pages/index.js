import * as React from "react";
import { Link, navigate } from "gatsby";

export default () => {
    if (typeof window !== `undefined`) {
        navigate("/product-manager");
    }
    return <Link to="/product-manager/"></Link>;
};

export const Head = () => <title>Resume Morteza Hakim</title>;
