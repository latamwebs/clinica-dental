import React from "react";

export const ParentStart = (children) => {
    return(
        <div className="object-center">
            <div className="inicio-bg">
                {children.nav}
                {children.inicio}
            </div>
        </div>
    )
}