import React from "react";
import {OfferHeader, OfferTitle, OfferIcon, StarIcon} from "./OfferMinStyledComponents";

const OfferHeaderComponent = ({title,small,unfollowed,followCallback}:any) => {
    return <OfferHeader>
        <OfferTitle>{title}</OfferTitle>
        <OfferIcon small={small || unfollowed} onClick={followCallback}>
            {small || unfollowed ? <p>Unfollow</p> : <p>Follow</p>}
            {small ? null : <StarIcon />}
        </OfferIcon>
    </OfferHeader>;
};

export default OfferHeaderComponent;