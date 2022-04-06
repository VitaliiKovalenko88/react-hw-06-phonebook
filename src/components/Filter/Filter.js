import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input value={value} onChange={onChange} placeholder="Search here" />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
