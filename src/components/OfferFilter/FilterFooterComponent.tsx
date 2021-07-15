import React from "react";
import {FilterFooter, Button} from "./OfferFilterStyledComponents";

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