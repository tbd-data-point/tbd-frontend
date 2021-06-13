import React from "react";
import OfferMinStyledComponents from "./OfferMinStyledComponents";

const OfferHeader = OfferMinStyledComponents.OfferHeader;
const OfferTitle = OfferMinStyledComponents.OfferTitle;
const OfferIcon = OfferMinStyledComponents.OfferIcon;
const StarIcon = OfferMinStyledComponents.StarIcon;

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