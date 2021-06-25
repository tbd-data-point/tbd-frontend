import { useState, useEffect } from 'react'

import OfferMinStyledComponents from './OfferFilter/OfferFilterStyledComponents'
import FilterFooterComponent from './OfferFilter/FilterFooterComponent'

import Keywords from './OfferFilter/Filters/Keywords'
import FilterType from './OfferFilter/Filters/FilterType'
import Description from './OfferFilter/Filters/Description'

const FilterRect = OfferMinStyledComponents.FilterRect
// const Title = OfferMinStyledComponents.Title;
const FilterBody = OfferMinStyledComponents.FilterBody

type props = {
  props: {
    filter: any
    setFilter: any
  }
}

const OfferFilter = (props: props) => {
  const [tags, setTags] = useState<string[]>([])
  const [newFilter, setNewFilter] = useState(
    props.props.filter,
  )
  // const [toggle, setToggle] = useState<boolean>(true)
  const toggle = true

  useEffect(() => {
    setNewFilter(
      Object.assign({ ...newFilter }, { tags: tags }),
    )
  }, [tags])

  // const toggleFilter = () => {
  //   setToggle(!toggle)
  // }

  return (
    <>
      <FilterRect className={toggle ? 'show' : 'hide'}>
        {/* <Title>Filter</Title> */}
        <FilterBody>
          <Keywords tags={tags} setTags={setTags} />
          <FilterType
            filterFunction={setNewFilter}
            newFilter={newFilter}
          />
          <Description
            filterFunction={setNewFilter}
            newFilter={newFilter}
          />
        </FilterBody>
        <FilterFooterComponent
          newFilter={newFilter}
          filterFunction={props.props.setFilter}
        />
      </FilterRect>
    </>
  )
}

export default OfferFilter
