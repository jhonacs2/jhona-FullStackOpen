import React from 'react';
import { connect } from 'react-redux';
import { setInput } from '../reducers/filterReducer';

const FilterAnecdote = (props) => {
  const filter = props.filter;

  const handleChange = (event) => {
    const content = event.target.value;
    props.setInput(content);
  };
  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input name='filter' onChange={handleChange} value={filter} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  };
};

const mapDispatchToProps = {
  setInput,
};

const connectedAnecdotes = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterAnecdote);
export default connectedAnecdotes;
