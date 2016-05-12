define(['react', '../containers/FilterLink'], function (React, FilterLink) {
  // const { PropTypes } = React

  const Footer = () => (
    <p>
      Show:
      {" "}
      <FilterLink filter="SHOW_ALL">
        All
      </FilterLink>
      {", "}
      <FilterLink filter="SHOW_ACTIVE">
        Active
      </FilterLink>
      {", "}
      <FilterLink filter="SHOW_COMPLETED">
        Completed
      </FilterLink>
    </p>
  )

  return Footer
})
