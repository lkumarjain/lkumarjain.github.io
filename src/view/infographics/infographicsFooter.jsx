import React from "react";


import "./infographicsFooter.css";

export default function InfographicsFooter(props) {
    const { content, config = {} } = props;

    return <div className="jn-infographics-footer">
        <div class="jn-flex-box">
            <div class="jn-flex-box-col-4 copy-right">
                <div>&copy; {config.Title}</div>
                <div>https://lkumarjain.github.io/</div>
            </div>
            <div class="jn-flex-box-col-2">{content}</div>
            <div class="jn-flex-box-col-4 more-info">
                <div>Find More at</div>
                <div>https://lkumarjain.blogspot.com/</div>
            </div>
        </div>
    </div>;
}
