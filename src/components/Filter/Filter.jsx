import PropTypes from 'prop-types';

export function Filter({ onHandleFilter }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <label htmlFor="">
        Find contacts by name
        <input type="text" onChange={onHandleFilter} />
      </label>
    </div>
  );
}
Filter.propTypes = {
  onHandleFilter: PropTypes.func.isRequired,
};
