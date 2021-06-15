import React from "react";
import OfferMinStyledComponents from "./OfferFilterStyledComponents";

const FilterFooter = OfferMinStyledComponents.FilterFooter;
const Button = OfferMinStyledComponents.Button;

const FilterFooterComponent = ({filterFunction, newFilter}:any) => {
    return  <FilterFooter>
        <Button
        className={'submit'}
        onClick={() => {filterFunction(newFilter)}}>
        Apply
        </Button>
        <Button>Clear</Button>
    </FilterFooter>;
};

export default FilterFooterComponent;